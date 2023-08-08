import { pages } from "../support/pages";
import { data } from "../support/data";

export class AdministrationTest {
    async pressAddCharityButton() {
        await browser.pause(2000);
        await pages.controlPanelPage.getAddAuctionBtnFor("charity").click();
    }

    async pressAddCommercialButton() {
        await browser.pause(2000);
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

    async fillOutCreateCommercialAuctionForm() {
        await pages.createAuctionPage.getInputField("objName").setValue(await data.auctionData.commercial.objName);
        await pages.createAuctionPage.randomSelectObjectType("commercial");
        await pages.createAuctionPage.selectPicture();
        await pages.createAuctionPage.getTextArea("description").setValue(await data.auctionData.commercial.description);
        await pages.createAuctionPage.getInputField("startBid").setValue(await data.auctionData.commercial.startBid);
        await pages.createAuctionPage.selectRandomDate();
    }

    async assertAuctionIsCreated() {
        await pages.checkAuctionPage.getSuccessMessage().waitForDisplayed({ timeout: 10000 });
    }
}