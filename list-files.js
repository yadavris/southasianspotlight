import fs from "fs";
import path from "path";

function listDir(dir, depth = 0) {
  const indent = "  ".repeat(depth);
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    if (item.name === "node_modules" || item.name.startsWith(".")) continue; // skip node_modules & hidden folders
    console.log(`${indent}${item.name}`);
    if (item.isDirectory()) {
      listDir(path.join(dir, item.name), depth + 1);
    }
  }
}

listDir(process.cwd());
