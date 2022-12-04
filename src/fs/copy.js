import { copyFile, mkdir, readdir } from 'node:fs/promises'
import path from 'node:path';

const copy = async () => {
    try {
        const folderPath = new URL('files', import.meta.url)
        const folderCopyPath = new URL('files_copy', import.meta.url)
        const files = await readdir(folderPath)
        await mkdir(folderCopyPath)
        files.forEach(async (file) => {
            const filePath = new URL(path.join('files', file), import.meta.url)
            const fileCopyPath = new URL(path.join('files_copy', file), import.meta.url)
            await copyFile(filePath, fileCopyPath)
        })
    } catch (err) {
        const error = new Error('FS operation failed')
        console.log(error)
    }
};

copy();