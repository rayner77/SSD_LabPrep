const {Builder, By} = require('selenium-webdriver');

(async function runTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:3000/');
    await driver.findElement(By.id('clickMe')).click();
    let text = await driver.findElement(By.id('output')).getText();
    console.log('Output:', text);
  } finally {
    await driver.quit();
  }
})();
