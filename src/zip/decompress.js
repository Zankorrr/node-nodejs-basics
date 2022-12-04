import { createReadStream, createWriteStream } from 'node:fs';
import { createUnzip } from 'node:zlib'

const decompress = async () => {
    const gzip = createUnzip()
    const source = createReadStream(new URL('./files/archive.gz', import.meta.url))
    const destination = createWriteStream(new URL('./files/fileToCompress.txt', import.meta.url))
    source.pipe(gzip).pipe(destination)
};

await decompress();