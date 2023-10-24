export const handleClickFetch = async () => {
    const res = await fetch('https://www.npmjs.com/package/puppeteer');

    const html = await res.text();

    console.log('html', html);
};
