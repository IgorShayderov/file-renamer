#!/usr/bin/env node
import { Command } from "commander";

import { renameFiles } from '../src/index.js';

const program = new Command();

program
  .name('file-renamer')
  .description('Rename all files in specific directory')
  .version('0.1.0')
  .argument('dirPath')
  .argument('oldName')
  .argument('newName')
  .action((dirPath, oldName, newName) => {
    renameFiles(dirPath, oldName, newName);
  });

program.parse();
