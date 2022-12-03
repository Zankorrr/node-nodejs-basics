import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib'

const compress = async () => {
    const gzip = createGzip()
    const source = createReadStream(new URL('./files/fileToCompress.txt', import.meta.url))
    const destination = createWriteStream(new URL('./files/archive.gz', import.meta.url))
    source.pipe(gzip).pipe(destination)
};

await compress();