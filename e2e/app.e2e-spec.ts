import { PostmanMimicPage } from './app.po';

describe('postman-mimic App', () => {
  let page: PostmanMimicPage;

  beforeEach(() => {
    page = new PostmanMimicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('sk works!');
  });
});
