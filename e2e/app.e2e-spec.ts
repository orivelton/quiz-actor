import { QuizActorPage } from './app.po';

describe('quiz-actor App', () => {
  let page: QuizActorPage;

  beforeEach(() => {
    page = new QuizActorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
