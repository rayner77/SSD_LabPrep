const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function runTest() {
  let options = new chrome.Options()
    .addArguments('--headless', '--no-sandbox', '--disable-dev-shm-usage');

  if (process.env.CHROME_BIN) {
    options.setChromeBinaryPath(process.env.CHROME_BIN);
  }

  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    await driver.get('http://localhost:3000'); // or your URL
    let title = await driver.getTitle();
    console.log('Page title is:', title);
  } finally {
    await driver.quit();
  }
}

runTest().catch(e => {
  console.error(e);
  process.exit(1);
});
