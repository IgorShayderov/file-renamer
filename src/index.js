import { readFile, readdir } from 'node:fs/promises';
import path from 'path';

export const rename = async (dirPath, oldName, newName) => {
  const fullDirPath = path.resolve(__dirname, dirPath);
  const res = await readdir(fullDirPath)

  console.log(res)
}
