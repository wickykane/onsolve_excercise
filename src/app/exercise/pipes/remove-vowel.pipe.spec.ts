import { RemoveVowelPipe } from './remove-vowel.pipe';

describe('RemoveVowelPipe', () => {
  it('create an instance', () => {
    const pipe = new RemoveVowelPipe();
    expect(pipe).toBeTruthy();
  });

  it('should remove e', () => {
    const pipe = new RemoveVowelPipe();
    expect(pipe.removeVowel('e')).toEqual('');
  });

  it('should remove o', () => {
    const pipe = new RemoveVowelPipe();
    expect(pipe.removeVowel('o')).toEqual('');
  });

  it('should remove u', () => {
    const pipe = new RemoveVowelPipe();
    expect(pipe.removeVowel('u')).toEqual('');
  });

  it('should remove a', () => {
    const pipe = new RemoveVowelPipe();
    expect(pipe.removeVowel('a')).toEqual('');
  });

  it('should remove i', () => {
    const pipe = new RemoveVowelPipe();
    expect(pipe.removeVowel('i')).toEqual('');
  });

  it('should remove E', () => {
    const pipe = new RemoveVowelPipe();
    expect(pipe.removeVowel('E')).toEqual('');
  });

  it('should remove O', () => {
    const pipe = new RemoveVowelPipe();
    expect(pipe.removeVowel('O')).toEqual('');
  });

  it('should remove U', () => {
    const pipe = new RemoveVowelPipe();
    expect(pipe.removeVowel('U')).toEqual('');
  });

  it('should remove A', () => {
    const pipe = new RemoveVowelPipe();
    expect(pipe.removeVowel('A')).toEqual('');
  });

  it('should remove I', () => {
    const pipe = new RemoveVowelPipe();
    expect(pipe.removeVowel('I')).toEqual('');
  });

  it('should equal "Tst"', () => {
    const pipe = new RemoveVowelPipe();
    expect(pipe.removeVowel('Test')).toEqual('Tst');
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
