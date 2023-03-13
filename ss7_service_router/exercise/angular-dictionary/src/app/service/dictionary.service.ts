import {Injectable} from '@angular/core';
import {IWord} from '../i-word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  wordList: IWord[] = [{
    word: 'red',
    mean: 'đỏ'
  }, {
    word: 'green',
    mean: 'xanh lá'
  }, {
    word: 'yellow',
    mean: 'vàng'
  }];


  constructor() {
  }

  translate(word: string): string {
    return this.wordList.filter(item => item.word === word)[0].mean;
  }
}
