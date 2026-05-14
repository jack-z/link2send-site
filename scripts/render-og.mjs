import sharp from "sharp";
import { readFileSync } from "node:fs";

const svg = readFileSync("public/og-image.svg");

const info = await sharp(svg, { density: 150 })
  .resize(1200, 630)
  .png({ compressionLevel: 9, quality: 92 })
  .toFile("public/og-image.png");

console.log(`OK  public/og-image.png  ${info.size} bytes  ${info.width}x${info.height}`);
