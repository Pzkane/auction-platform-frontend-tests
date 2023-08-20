import { pages } from "../support/pages";
import { AuctionTest } from "./auction-test";

export class CharityAuctionTest extends AuctionTest {
    async submitDonation() {
        await browser.pause(2000);
        await (await pages.auctionsPage.getParticipationBtn()).click();
        await (await pages.auctionsPage.getPayPalBtn()).waitForDisplayed({ timeout: 30000});
        await browser.pause(2000);
        await (await pages.auctionsPage.getPayPalBtn()).click();
    }
}