import { WordRepository, Words } from 'repositories/word'

export class WordRepoMockImpl implements WordRepository {
  public async getWords(): Promise<Words> {
    const words: Words = {
      words: [
        {
          word: 'as long as',
          answers: ['だけずっと', 'さえすれば', 'する限り'],
        },
        {
          word: 'continuous',
          answers: ['連続的な', '切れ目のない', '途切れない'],
        },
      ],
    }

    return new Promise((resolve) => resolve(words))
  }
}
