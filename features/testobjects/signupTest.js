import { pages } from "../support/pages";
import { data } from "../support/data";

export class SignupTest {
    async fillOutCreateAccountForm() {
        await pages.createAccountPage.getInputField("name").setValue(await data.userData.platformUser.firstName);
        await pages.createAccountPage.getInputField("surname").setValue(await data.userData.platformUser.lastName);
        await pages.createAccountPage.getInputField("username").setValue(await data.userData.platformUser.userName);
        await pages.createAccountPage.getInputField("email").setValue(await data.userData.platformUser.email);
        await pages.createAccountPage.getInputField("password").setValue(await data.userData.platformUser.password);
        await pages.createAccountPage.getInputField("password_confirm").setValue(await data.userData.platformUser.password);
        await pages.createAccountPage.randomSelectSexRadioBtn().click();
    }

    async assertCheckOffersPage() {
        await pages.checkOffersPage.getCheckOffersHeader().waitForDisplayed({ timeout: 5000 });
        // Allow for offers and categories to load in
        await browser.pause(3000);
    }
}