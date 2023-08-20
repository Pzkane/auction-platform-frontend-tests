export class BasePage {
  constructor(baseName = null) {
    this.baseName = baseName;
  }

  getContainingButton(contains) {
    return $(`//button//span[contains(text(),'${contains}')]`);
  }

  getEmailInputField() {
    return $("#Login_username");
  }

  getPasswordInputField() {
    return $("#Login_password");
  }

  getLogInButton() {
    return $("button=Log In");
  }

  getLogOutButton() {
    return this.getContainingButton('Log Out');
  }

  getSignInButton() {
    return $("button=Sign In");
  }

  getInvalidCredentialsMsg() {
    return $("//span[@id='Login_error_msg']");
  }

  getCurrentSubmitBtn() {
    return $('button=Submit');
  }

  getInputField(name) {
    return $(`input[id="${this.baseName}_${name}"]`);
  }

  getTextArea(name) {
    return $(`textarea[id="${this.baseName}_${name}"]`);
  }

  getOKButton() {
    return $(`button=Ok`);
  }
}
