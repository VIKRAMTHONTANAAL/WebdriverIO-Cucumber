import { Given, When, Then } from '@cucumber';
 import { expect } from 'chai';

// import LoginPage from '../../login.page';
// import SecurePage from '../../secure.page';

// const pages = {
//     login: LoginPage
// }

Given(/^I'm on the login page$/, function () {
  //  await pages[page].open()
    browser.url("http://automationpractice.com/index.php");
});

When(/^I login with a default user$/, function ()  {
    browser.element("(.//*[@class='login'])[1]").click();
    browser.element("(.//*[@id='email'])[1]").setValue("thontanaalvicky@gmail.com");
    browser.element("(.//*[@id='passwd'])[1]").setValue("password");
    browser.element("(.//*[@type='submit'])[3]").click();
 //   await LoginPage.login(username, password)

});

Then(/^I shall be on the Store page$/, function (){
  //  await expect(SecurePage.flashAlert).toBeExisting();
  //  await expect(SecurePage.flashAlert).toHaveTextContaining(message);

    expect.element("(.//*[@class='logout'])[1]").toBeExisting;
    console.log("My Store page is displayed");
});

