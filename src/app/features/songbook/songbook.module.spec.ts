import { SongbookModule } from './songbook.module';

describe('SongbookModule', () => {
  let songbookModule: SongbookModule;

  beforeEach(() => {
    songbookModule = new SongbookModule();
  });

  it('should create an instance', () => {
    expect(songbookModule).toBeTruthy();
  });
});
