import { writeFile } from "node:fs/promises";
import path from "node:path";

const create = async () => {
    try {
        const content = 'I am fresh and young'
        const filePath = new URL(path.join('files', 'fresh.txt'), import.meta.url)
        await writeFile(filePath, content, { flag: 'ax' })
    } catch (err) {
        const error = new Error('FS operation failed')
        console.log(error)
    }
};

await create();