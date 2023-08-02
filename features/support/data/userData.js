const { faker } = require("@faker-js/faker");

export default class UserData {
    constructor() {
        this.platformUser = new PlatformUser(
            faker.internet.email(),
            "Aaaa1234$",
            faker.name.firstName(),
            faker.name.lastName(),
            faker.internet.userName().slice(0,18) // input form limit for username
        )
    }
}

class PlatformUser {
  constructor(
    email,
    password,
    firstName,
    lastName,
    userName,
  ) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
  }
}
