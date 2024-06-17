const {test, expect} =require('@playwright/test')

//import {test,expect} from '@playwright/test'

test('Locatorstest', async({page})=>{

await page.goto("https://demoblaze.com/");


//click on LoginButton

//await page.locator('#login2').click();
await page.click('id=login2')


//provide username
await page.fill('#loginusername','shox1')


//provide password

await page.fill('#loginpassword', 'shox123')


//click on Login Button 

await page.click('//button[@onclick="logIn()"]'), {visible:true, timeout:5000}

//check the logout link is present or not

const logoutlink=await page.locator("//a[@id='logout2']")
await expect(logoutlink).toBeVisible();

})