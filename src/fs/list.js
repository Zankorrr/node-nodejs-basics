import { readdir } from 'node:fs/promises'

const list = async () => {
    try {
        const folderPath = new URL('files', import.meta.url)
        const folder = await readdir(folderPath)
        console.log(folder)
    } catch(err) {
        const error = new Error('FS operation failed')
        console.log(error)
    }
};

await list();