import {BasePage} from "./basePage"

export class CheckControlPanelPage extends BasePage {
    getCheckControlPanelTab() {
        return $('a=Control Panel');
    }
}