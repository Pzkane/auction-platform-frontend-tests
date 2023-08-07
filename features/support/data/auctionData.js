const { faker } = require("@faker-js/faker");

export default class AuctionData {
  constructor() {
    this.charity = new CharityAuction(
      faker.name.title().substring(0, 24), // validation
      faker.internet.userAgent(),
      faker.finance.amount(1000,15000,0)
    );

    this.commercial = new CommercialAuction(
      faker.name.title().substring(0, 24), // validation
      faker.internet.userAgent(),
      faker.finance.amount(1000,15000,0),
      faker.date.future()
    )
  }
}

class Auction {
  constructor(
    objName,
    description,
  ) {
    this.objName = objName;
    this.description = description;
  }
}

class CharityAuction extends Auction {
  constructor(
    objName,
    description,
    goal,
  ) {
    super(objName, description);
    this.goal = goal;
  }
}

class CommercialAuction extends Auction {
  constructor(
    objName,
    description,
    startBid,
    endDate,
  ) {
    super(objName, description);
    this.startBid = startBid;
    this.endDate = endDate;
  }
}

