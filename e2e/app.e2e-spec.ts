import { SowablePage } from './app.po';

describe('sowable App', () => {
  let page: SowablePage;

  beforeEach(() => {
    page = new SowablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
