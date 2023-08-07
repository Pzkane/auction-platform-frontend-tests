import UserData from "./data/userData";
import OfferData from "./data/offerData";
import AuctionData from "./data/auctionData";

class Data {
    constructor() {
        this.userData = new UserData();
        this.offerData = new OfferData();
        this.auctionData = new AuctionData();
    }
}

export const data = new Data();