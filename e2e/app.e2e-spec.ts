import { GymTrainningDesktopPage } from './app.po';

describe('gym-trainning-desktop App', function() {
  let page: GymTrainningDesktopPage;

  beforeEach(() => {
    page = new GymTrainningDesktopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
