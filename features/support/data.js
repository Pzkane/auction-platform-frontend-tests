import UserData from "./data/userData";
import OfferData from "./data/offerData";

class Data {
    constructor() {
        this.userData = new UserData();
        this.offerData = new OfferData();
    }
}

export const data = new Data();