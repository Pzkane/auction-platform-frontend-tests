import { pages } from "../support/pages";

export class LoginTest {
  async fillEmailField(email) {
    await pages.basePage.getEmailInputField().setValue(email);
  }

  async fillPasswordField(password) {
    await pages.basePage.getPasswordInputField().setValue(password);
  }

  async assertInvalidCredentialsMsg() {
    await pages.basePage
      .getInvalidCredentialsMsg()
      .waitForDisplayed({ timeout: 5000 });
    await expect(await pages.basePage.getInvalidCredentialsMsg()).toHaveText(
      "Wrong username/email or password"
    );
  }
}
