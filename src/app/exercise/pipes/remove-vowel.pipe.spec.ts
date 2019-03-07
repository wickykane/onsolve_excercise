import { RemoveVowelPipe } from './remove-vowel.pipe';

describe('RemoveVowelPipe', () => {
  it('create an instance', () => {
    const pipe = new RemoveVowelPipe();
    expect(pipe).toBeTruthy();
  });

  it('Should equal "Tst"', () => {
    const pipe = new RemoveVowelPipe();
    expect(pipe.removeVowel('Test')).toEqual('Tst');
  });

  it('Should equal "Ths wbst s fr lsrs LL!"', () => {
    const pipe = new RemoveVowelPipe();
    const text = 'This website is for losers LOL!';
    const result = 'Ths wbst s fr lsrs LL!';
    expect(pipe.removeVowel(text)).toEqual(result);
  });
});
