import { pages } from "../support/pages";
import { AuctionTest } from "./auction-test";

export class CommercialAuctionTest extends AuctionTest {
    async bid() {
        await browser.pause(2000);
        await (await pages.auctionsPage.getPlaceBidBtn()).click();
        await (await pages.auctionsPage.getOKButton()).click();
        await (await pages.auctionsPage.getOKButton()).click();
    }
}