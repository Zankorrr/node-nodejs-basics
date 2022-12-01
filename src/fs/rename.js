import * as fs from 'node:fs/promises'
import path from 'node:path';

const rename = async () => {
    try {
        const oldPath = new URL(path.join('files', 'wrongFilename.txt'), import.meta.url)
        const newPath = new URL(path.join('files', 'properFilename.md'), import.meta.url)
        await fs.rename(oldPath, newPath)
    } catch (err) {
        const error = new Error('FS operation failed')
        console.log(error)
    }
};

await rename();