const puppeteer = require('puppeteer');
var standard_input = process.stdin;
var id = process.argv[2];
var pw = process.argv[3];
standard_input.setEncoding('utf-8');
console.log("Please input id in command line.");
standard_input.on('data', function (data) {
  id = data;
});
standard_input.setEncoding('utf-8');
console.log("Please input pw in command line.");
standard_input.on('data', function (data) {
  id = data;
});

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1366,
    height: 768
  });
  await page.goto('https://github.com/login');
  await page.type('#login_field', id);
  await page.type('#password', pw);
  await page.click('#login > form > div.auth-form-body.mt-3 > input.btn.btn-primary.btn-block');
  // await browser.close();
})();