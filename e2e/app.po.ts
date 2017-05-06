import { browser, element, by } from 'protractor';

export class PostmanMimicPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sk-root h1')).getText();
  }
}
