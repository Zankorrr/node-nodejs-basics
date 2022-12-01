import { rm } from 'node:fs/promises'
import path from 'node:path';

const remove = async () => {
    try {
        const filePath = new URL(path.join('files', 'fileToRemove.txt'), import.meta.url)
        await rm(filePath)
    } catch(err) {
        const error = new Error('FS operation failed')
        console.log(error)
    }
};

await remove();