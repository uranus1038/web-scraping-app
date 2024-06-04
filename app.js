const { chromium } = require('playwright');
(async () => {
  console.log('##Bot Labubu Monsters Thailand##');
  try {
    const browser = await chromium.launch({ headless: false , channel: 'msedge'});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://th.shp.ee/zkMRESa'); // Replace with your target URL
  while(true)
  {
    try{
      const buttonFound = await page.waitForSelector('//*[@id="PageList2"]/div/ul/li[4]/a'); // Replace with actual selector
      if (buttonFound) {
        console.log('Button found!');
        break ; 
      } 
    }catch(err)
    {
        console.log('Button not found');
        //page.reload();
    }
  }
  await page.click('//*[@id="PageList2"]/div/ul/li[4]/a');
  process.exit();
  } catch (error) {
    console.error(error);
  }
})();
