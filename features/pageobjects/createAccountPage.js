import { BasePage } from "./basePage";

export class CreateAccountPage extends BasePage {
  getInputField(name) {
    return $(`input[id="Registration_${name}"]`);
  }

  randomSelectSexRadioBtn() {
    const random_sex = Math.floor(Math.random() * 2);
    let s_type;
    switch (random_sex) {
      case 0:
        s_type = 'Female';
        break;
      case 1:
        s_type = 'Male';
        break;
    }
    return $('div[class="v-input--selection-controls__ripple primary--text"]');
  }


  getDropdownField(name) {
    return $(`select[id="sView1:r1:0:${name}::content"]`);
  }

  getCurrentSubmitBtn() {
    return $('button=Submit');
  }

  async setDropdownValue(name, value) {
    await this.getDropdownField(name).click();
    await this.getDropdownField(name).selectByAttribute("title", value);
  }
}
