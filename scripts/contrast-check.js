const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Utility: convert hex or rgba to RGB array
function parseColor(c) {
  if (!c) return null;
  c = c.trim();
  // variables like var(--text-primary) handled externally
  if (c.startsWith("#")) {
    let hex = c.slice(1);
    if (hex.length === 3)
      hex = hex
        .split("")
        .map((h) => h + h)
        .join("");
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return [r, g, b, 1];
  }
  if (c.startsWith("rgb")) {
    const m = c.match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const vals = m[1].split(",").map((v) => v.trim());
    const r = parseInt(vals[0], 10);
    const g = parseInt(vals[1], 10);
    const b = parseInt(vals[2], 10);
    const a = vals[3] ? parseFloat(vals[3]) : 1;
    return [r, g, b, a];
  }
  return null;
}

function relativeLuminance([r, g, b, a = 1]) {
  // assumes r,g,b 0-255
  const rs = r / 255;
  const gs = g / 255;
  const bs = b / 255;
  const transform = (c) =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  const R = transform(rs);
  const G = transform(gs);
  const B = transform(bs);
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

function contrastRatio(colorRGB, bgRGB) {
  if (!colorRGB || !bgRGB) return null;
  const L1 = relativeLuminance(colorRGB);
  const L2 = relativeLuminance(bgRGB);
  const lighter = Math.max(L1, L2);
  const darker = Math.min(L1, L2);
  return (lighter + 0.05) / (darker + 0.05);
}

function pickColorFromGradient(s) {
  // Attempt to find the darkest hex/rgb in the gradient string
  const hexes = [...s.matchAll(/#([0-9a-fA-F]{3,6})/g)].map((m) => m[1]);
  const rgbs = [...s.matchAll(/rgba?\([^)]+\)/g)].map((m) => m[0]);
  const candidates = [];
  hexes.forEach((h) => {
    let hex = h;
    if (hex.length === 3)
      hex = hex
        .split("")
        .map((c) => c + c)
        .join("");
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    candidates.push([r, g, b, 1]);
  });
  rgbs.forEach((r) => {
    const p = parseColor(r);
    if (p) candidates.push(p);
  });
  // return the darkest luminance
  if (candidates.length === 0) return null;
  candidates.sort((a, b) => relativeLuminance(a) - relativeLuminance(b));
  return candidates[0];
}

function readVariables(varsPath) {
  const content = fs.readFileSync(varsPath, "utf-8");
  const lines = content.split(/\r?\n/);
  const map = {};
  lines.forEach((line) => {
    const m = line.match(/--([a-zA-Z0-9-]+)\s*:\s*([^;]+)/);
    if (m) {
      map[m[1].trim()] = m[2].trim();
    }
  });
  return map;
}

function resolveVar(value, varsMap) {
  if (!value) return null;
  const m = value.match(/var\(--([a-zA-Z0-9-]+)\)/);
  if (m) {
    const varName = m[1];
    const resolved = varsMap[varName];
    return resolved || null;
  }
  return value;
}

function scanCssForPairs(cssPath, varsMap) {
  const content = fs.readFileSync(cssPath, "utf-8");
  // crude split: find blocks
  const blocks = content.split(/}/g);
  const results = [];
  blocks.forEach((block) => {
    const parts = block.split(/{/g);
    if (parts.length < 2) return;
    const selector = parts[0].trim();
    const body = parts[1];

    const declared = {};
    const lines = body.split(/;\s*/g);
    lines.forEach((line) => {
      const m = line.match(/([a-zA-Z-]+)\s*:\s*(.+)/);
      if (m) {
        declared[m[1].trim()] = m[2].trim();
      }
    });

    // if we have both color and background-color or background
    if (
      declared.color &&
      (declared["background-color"] || declared.background)
    ) {
      let colorVal = declared.color;
      let bgVal = declared["background-color"] || declared.background;
      colorVal = resolveVar(colorVal, varsMap);
      bgVal = resolveVar(bgVal, varsMap);
      // if gradient, pick darkest stop
      if (bgVal && bgVal.includes("gradient")) {
        const picked = pickColorFromGradient(bgVal);
        if (picked) bgVal = `rgb(${picked[0]},${picked[1]},${picked[2]})`;
      }
      results.push({
        selector,
        color: colorVal,
        background: bgVal,
        plugin: cssPath,
      });
    }
  });
  return results;
}

function toRgbString(c) {
  if (!c) return null;
  const p = parseColor(c);
  if (!p) return null;
  return p;
}

function runCheck() {
  const varsPath = path.join(
    __dirname,
    "..",
    "src",
    "assets",
    "styles",
    "variables.css"
  );
  const vars = readVariables(varsPath);
  const cssFiles = glob.sync("src/**/*.css", {
    cwd: path.join(__dirname, ".."),
  });
  const pairs = [];
  cssFiles.forEach((cf) => {
    const full = path.join(__dirname, "..", cf);
    const r = scanCssForPairs(full, vars);
    r.forEach((rr) => pairs.push(rr));
  });

  const report = [];
  pairs.forEach((p) => {
    const textColor = toRgbString(p.color);
    const bgColor = toRgbString(p.background);
    if (!textColor || !bgColor) return;
    const ratio = contrastRatio(textColor, bgColor);
    report.push({
      selector: p.selector,
      file: p.plugin,
      color: p.color,
      background: p.background,
      ratio,
    });
  });

  const failing = report.filter((r) => r.ratio < 4.5); // min AA for normal text
  const warnings = report.filter((r) => r.ratio >= 4.5 && r.ratio < 7); // passes AA but not AAA

  console.log("\nContrast check summary");
  console.log("----------------------");
  console.log(`Evaluated ${report.length} selector pairs.`);
  console.log(`Failing (ratio < 4.5): ${failing.length}`);
  console.log(`Warning (4.5 <= ratio < 7): ${warnings.length}`);
  console.log("");

  if (failing.length > 0) {
    console.log("Failing pairs (ratio < 4.5):");
    failing.forEach((f) => {
      console.log(
        `- ${f.file} -> ${f.selector} : ${f.color} on ${
          f.background
        } = ${Number(f.ratio).toFixed(2)}`
      );
    });
  }

  if (warnings.length > 0) {
    console.log("\nWarnings (AA ok, AAA fail):");
    warnings.forEach((f) => {
      console.log(
        `- ${f.file} -> ${f.selector} : ${f.color} on ${
          f.background
        } = ${Number(f.ratio).toFixed(2)}`
      );
    });
  }

  if (failing.length === 0 && warnings.length === 0) {
    console.log("All scanned pairs meet AAA contrast (>=7). Nice!");
  }
}

runCheck();
