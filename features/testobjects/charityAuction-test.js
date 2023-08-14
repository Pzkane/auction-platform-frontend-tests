import { pages } from "../support/pages";
import { data } from "../support/data";

export class CharityAuctionTest {
    async submitDonation() {
        await browser.pause(2000);
        await (await pages.auctionsPage.getParticipationBtn()).click();
        await (await pages.auctionsPage.getPayPalBtn()).waitForDisplayed({ timeout: 30000});
        await browser.pause(2000);
        await (await pages.auctionsPage.getPayPalBtn()).click();
    }

    async assertUserHasParticipated() {
        await pages.checkAuctionPage.getSuccessfulParticipationMessage().waitForDisplayed({ timeout: 15000 });
    }
}