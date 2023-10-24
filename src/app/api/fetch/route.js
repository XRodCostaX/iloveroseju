export const getDownload = async () => {
    const res = fetch('https://www.npmjs.com/package/puppeteer');

    const html = await res.text();

    console.log('html', html);
};
