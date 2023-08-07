import { pages } from "../support/pages";
import { data } from "../support/data";

export class AdministrationTest {
    async pressAddCharityButton() {
        await browser.pause(2000);
        await pages.controlPanelPage.getAddAuctionBtnFor("charity").click();
    }

    async pressAddCommercialButton() {
        await pages.controlPanelPage.getAddAuctionBtnFor("commercial").click();
    }

    async pressSubmitAuctionButton() {
        await pages.createAuctionPage.getCurrentSubmitBtn().click();
    }

    async fillOutCreateCharityAuctionForm() {
        await pages.createAuctionPage.getInputField("objName").setValue(await data.auctionData.charity.objName);
        await pages.createAuctionPage.randomSelectObjectType("charity");
        await pages.createAuctionPage.selectPicture();
        await pages.createAuctionPage.getTextArea("description").setValue(await data.auctionData.charity.description);
        await pages.createAuctionPage.getInputField("goal").setValue(await data.auctionData.charity.goal);
    }

    async assertAuctionIsCreated() {
        await pages.checkAuctionPage.getSuccessMessage().waitForDisplayed({ timeout: 10000 });
    }
}