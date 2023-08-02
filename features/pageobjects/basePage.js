export class BasePage {
  getEmailInputField() {
    return $("#Login_username");
  }

  getPasswordInputField() {
    return $("#Login_password");
  }

  getLogInButton() {
    return $("button=Log In");
  }

  getSignInButton() {
    return $("button=Sign In");
  }

  getInvalidCredentialsMsg() {
    return $("//span[@id='Login_error_msg']");
  }
}
