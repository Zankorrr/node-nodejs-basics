import { createHash } from 'node:crypto'
import { createReadStream } from 'node:fs';

const calculateHash = async () => {
    try {
        const hash = createHash('sha256')
        const input = createReadStream(new URL('./files/fileToCalculateHashFor.txt', import.meta.url))
        input.pipe(hash).setEncoding('hex').pipe(process.stdout);
    } catch(err) {
        const error = new Error('Hash operation failed')
        console.log(error)
    }
};

await calculateHash();