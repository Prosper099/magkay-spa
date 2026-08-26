#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Scan target image directories recursively and rename .jfif files to .jpg safely.
 * Usage: node rename-images.js [optional-custom-directory]
 */

const customArg = process.argv[2];
const targetDirectories = customArg
  ? [path.resolve(process.cwd(), customArg)]
  : [
      path.join(__dirname, 'public'),
      path.join(__dirname, 'public', 'images'),
      path.join(__dirname, 'src', 'assets'),
      path.join(__dirname, 'src', 'assets', 'images'),
      __dirname,
    ];

let renamedCount = 0;

function processDirectory(dirPath, recursive = true) {
  if (!fs.existsSync(dirPath)) return;

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      if (
        recursive &&
        entry.name !== 'node_modules' &&
        entry.name !== '.git' &&
        entry.name !== 'dist' &&
        entry.name !== '.next'
      ) {
        processDirectory(fullPath, true);
      }
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (ext === '.jfif') {
        const baseName = path.basename(entry.name, ext);
        const newFilePath = path.join(dirPath, `${baseName}.jpg`);

        try {
          fs.copyFileSync(fullPath, newFilePath);
          fs.unlinkSync(fullPath);
          console.log(`[RENAMED] ${fullPath} -> ${newFilePath}`);
          renamedCount++;
        } catch (err) {
          console.error(`[ERROR] Failed to rename ${fullPath}:`, err.message);
        }
      }
    }
  }
}

console.log('--- Image File Extension Converter (.jfif -> .jpg) ---');
console.log('Scanning directories for .jfif files...');

const scannedDirs = new Set();
for (const dir of targetDirectories) {
  if (fs.existsSync(dir) && !scannedDirs.has(dir)) {
    scannedDirs.add(dir);
    const isRoot = dir === __dirname;
    processDirectory(dir, !isRoot);
  }
}

console.log(`\nOperation Complete: Converted and renamed ${renamedCount} file(s) from .jfif to .jpg.\n`);
