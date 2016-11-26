import { browser, element, by } from 'protractor';

export class HundemomentePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hm-root h1')).getText();
  }
}
