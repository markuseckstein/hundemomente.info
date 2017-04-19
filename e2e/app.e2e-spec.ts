import { HundemomentePage } from './app.po';

describe('hundemomente App', () => {
  let page: HundemomentePage;

  beforeEach(() => {
    page = new HundemomentePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
