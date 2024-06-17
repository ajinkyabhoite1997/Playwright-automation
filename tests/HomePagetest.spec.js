const {test, expect }=require('@playwright/test');


test('Home Page',async({page})=>{

    await page.goto("https://demoblaze.com/");

    const pageTitle = page.title();
    console.log('Page title is:',pageTitle);

    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL("https://demoblaze.com/");


    const pageUrl= page.url();
    console.log('page URl is', pageUrl)

    await page.close();

})
