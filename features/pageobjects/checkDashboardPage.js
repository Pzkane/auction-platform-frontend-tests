import {BasePage} from "./basePage"

export class CheckDashboardPage extends BasePage {
    getCheckDashboardTab() {
        return $('a=Dashboard');
    }
}