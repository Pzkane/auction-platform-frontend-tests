import { NavigationTest } from "../testobjects/navigation-test";
import { LoginTest } from "../testobjects/login-test";
import {SignupTest} from "../testobjects/signupTest";

class Tests {
  constructor() {
    this.navigationTest = new NavigationTest();
    this.loginTest = new LoginTest();
    this.signupTest = new SignupTest();
  }
}

export const tests = new Tests();
