import { LearnA2Page } from './app.po';

describe('learn-a2 App', function() {
  let page: LearnA2Page;

  beforeEach(() => {
    page = new LearnA2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
