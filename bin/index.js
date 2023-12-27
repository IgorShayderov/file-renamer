#!/usr/bin/env node
import { Command } from "commander";

import { rename } from './src/index.js';

const program = new Command();

program
  .name('file-renamer')
  .description('Rename all files in specific directory')
  .version('0.1.0')
  .argument('Name pattern')
  .argument('new name')
  .action((dirPath, oldNew, newName) => {
    rename(dirPath, oldNew, newName);
  });
