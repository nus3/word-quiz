import { Word, WordRepository, Words } from 'repositories/word'

const dummyWords: Word[] = [
  {
    word: 'as long as',
    answers: ['だけずっと', 'さえすれば', 'する限り'],
  },
  {
    word: 'continuous',
    answers: ['連続的な', '切れ目のない', '途切れない'],
  },
  { word: 'a', answers: ['a'] },
  { word: 'b', answers: ['b'] },
  { word: 'c', answers: ['c'] },
  { word: 'd', answers: ['d'] },
  { word: 'e', answers: ['e'] },
  { word: 'f', answers: ['f'] },
  { word: 'g', answers: ['g'] },
  { word: 'h', answers: ['h'] },
  { word: 'i', answers: ['i'] },
  { word: 'j', answers: ['j'] },
  { word: 'k', answers: ['k'] },
  { word: 'l', answers: ['l'] },
]

export class WordRepoMockImpl implements WordRepository {
  public getWords(): Promise<Words> {
    const words: Words = {
      words: dummyWords,
    }

    return new Promise((resolve) => resolve(words))
  }
}
