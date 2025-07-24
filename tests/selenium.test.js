const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function runTest() {
  let options = new chrome.Options();
  if (process.env.CHROME_BIN) {
    options.setChromeBinaryPath(process.env.CHROME_BIN);
  }
  options.addArguments('--headless'); // run without UI
  options.addArguments('--no-sandbox'); // needed on CI
  options.addArguments('--disable-dev-shm-usage'); // needed on CI

  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    await driver.get('http://localhost:3000'); // adjust if needed
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
