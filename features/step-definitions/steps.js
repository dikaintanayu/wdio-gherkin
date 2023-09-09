const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const DashboardPage = require('../pageobjects/dashboard.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (.+) and (.+)$/, async (email, password) => {
    await LoginPage.login(email, password)
    await browser.maximizeWindow()
});

Then(/^I login the dashboard without error$/, async () => {
    await expect(DashboardPage.profileButton).toBeExisting();
});

