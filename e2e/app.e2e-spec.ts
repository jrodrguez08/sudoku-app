import { SudokuAppPage } from './app.po';

describe('sudoku-app App', () => {
  let page: SudokuAppPage;

  beforeEach(() => {
    page = new SudokuAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
