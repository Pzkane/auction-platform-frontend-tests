const { faker } = require("@faker-js/faker");

export default class OfferData {
    constructor() {
        this.newOffer = new NewOffer(
            faker.name.title(),
            faker.lorem.paragraph(),
            faker.database.type(),
            faker.database.type(),
            faker.phone.phoneNumber('########')
        )
    }
}

class NewOffer {
  constructor(
    title,
    description,
    tag_label_primary,
    tag_label_secondary,
    phone,
  ) {
    this.title = title;
    this.description = description;
    this.tag_label_primary = tag_label_primary;
    this.tag_label_secondary = tag_label_secondary;
    this.phone = phone;
  }
}
