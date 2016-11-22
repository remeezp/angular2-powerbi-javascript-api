import { PowerbiTestPage } from './app.po';

describe('powerbi-test App', function() {
  let page: PowerbiTestPage;

  beforeEach(() => {
    page = new PowerbiTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
