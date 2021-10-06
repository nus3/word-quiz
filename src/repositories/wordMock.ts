import { QUIZ_COUNT, Word, WordRepository, Words } from 'repositories/word'
import { randomIndexes } from 'utils/random'

const w: Word[] = [...Array(50)].map((_, i) => ({
  word: `${i}`,
  answers: [`${i}`],
}))

const dummyWords: Word[] = [
  {
    word: 'as long as',
    answers: ['だけずっと', 'さえすれば', 'する限り'],
  },
  {
    word: 'continuous',
    answers: ['連続的な', '切れ目のない', '途切れない'],
  },
  {
    word: 'long answers',
    answers: [
      'すごい長い答えすごい長い答えすごい長い答えすごい長い答えすごい長い答えすごい長い答えすごい長い答えすごい長い答えすごい長い答えすごい長い答えすごい長い答え',
    ],
  },
  ...w,
]

export class WordRepoMockImpl implements WordRepository {
  public getWords(): Promise<Words> {
    const words: Words = {
      words: dummyWords,
    }

    return new Promise((resolve) => resolve(words))
  }

  public getRandomWords(): Promise<Words> {
    const indexes = randomIndexes(QUIZ_COUNT, dummyWords.length - 1)
    const w = indexes.map((i) => dummyWords[i])
    const words: Words = {
      words: w,
    }

    return new Promise((resolve) => resolve(words))
  }
}
