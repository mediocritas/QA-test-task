
export default class PlaywrightDevPage {
    /**
     * @param {import('@playwright/test').Page} page
     */

    async goto() {
        await this.page.goto('https://playwright.dev');
    }


}