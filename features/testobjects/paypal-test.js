import { pages } from "../support/pages";
import { data } from "../support/data";

export class PaypalTest {
    async confirmTransaction(email, password) {
        await pages.paypalPage.login(email, password);
        await (await pages.paypalPage.getConfirmPurchaseBtn()).waitForDisplayed({timeout:10000});
        await (await pages.paypalPage.getConfirmPurchaseBtn()).click();
        await pages.paypalPage.returnToMainWindow();
    }
}