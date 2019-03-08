import { RemoveVowelPipe } from './remove-vowel.pipe';

describe('RemoveVowelPipe', () => {
  it('create an instance', () => {
    const pipe = new RemoveVowelPipe();
    expect(pipe).toBeTruthy();
  });

  it('should equal "Tst"', () => {
    const pipe = new RemoveVowelPipe();
    expect(pipe.removeVowel('Test')).toEqual('Tst');
  });

  it('should equal "Ths wbst s fr lsrs LL!"', () => {
    const pipe = new RemoveVowelPipe();
    const text = 'This website is for losers LOL!';
    const result = 'Ths wbst s fr lsrs LL!';
    expect(pipe.removeVowel(text)).toEqual(result);
  });

  it('should equal undefined', () => {
    const pipe = new RemoveVowelPipe();
    const text = undefined;
    expect(pipe.removeVowel(text)).toBeUndefined();
  });

  it('should equal tttt', () => {
    const pipe = new RemoveVowelPipe();
    const text = 'tttt';
    const result = 'tttt';
    expect(pipe.removeVowel(text)).toEqual(result);
  });
});
