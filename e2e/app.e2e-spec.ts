import { BookwormProtoV1Page } from './app.po';

describe('bookworm-proto-v1 App', function() {
  let page: BookwormProtoV1Page;

  beforeEach(() => {
    page = new BookwormProtoV1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
