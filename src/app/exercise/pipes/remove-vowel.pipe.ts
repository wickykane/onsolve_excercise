import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeVowel'
})
export class RemoveVowelPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return this.removeVowel(value);
  }

  removeVowel(text) {
    return text && text.replace(/[eouaiEOUAI]/g, '');
  }
}
