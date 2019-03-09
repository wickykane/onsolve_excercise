import { TextTruncatePipe } from './text-truncate.pipe';

describe('TextTruncatePipe', () => {
  it('create an instance', () => {
    const pipe = new TextTruncatePipe();
    expect(pipe).toBeTruthy();
  });

  it('should equal "Test ..."', () => {
    const pipe = new TextTruncatePipe();
    expect(pipe.truncateText('Test', 8)).toEqual('Test');
  });

});
