import { rename, readdir } from 'node:fs/promises';
import path from 'path';

export const renameFiles = async (dirPath, oldName, newName) => {
  try {
    const fullDirPath = path.resolve(process.cwd(), dirPath);
    const fileNames = await readdir(fullDirPath);

    fileNames.forEach(async (filename) => {
      const newFilename = filename.replace(oldName, newName);

      console.log('Было: ', filename);
      console.log('Стало: ', newFilename);

      const oldPath = `${dirPath}/${filename}`;
      const newPath = `${dirPath}/${newFilename}`;

      await rename(oldPath, newPath);
    });
  } catch (e) {
    console.log('Ошибочка ', e);
  }
}
