import { pages } from "../support/pages";

export class AuctionTest {
    async assertUserHasParticipated() {
        await pages.checkAuctionPage.getSuccessfulParticipationMessage().waitForDisplayed({ timeout: 15000 });
    }
}