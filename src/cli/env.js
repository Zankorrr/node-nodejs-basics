const parseEnv = () => {
    const rss = Object.entries(process.env).reduce((acc, val) => {
        if (val[0].startsWith('RSS_')) {
            acc.push(`${val[0]}=${val[1]}`)
        }
        return acc
    }, [])
    const str = rss.join('; ')
    console.log(str)
};

parseEnv();