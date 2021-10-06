import { getGistContent } from 'libs/github-api'
import { randomIndexes } from 'utils/random'

export type Word = {
  word: string
  answers: string[]
}

export type Words = {
  words: Word[]
}

export interface WordRepository {
  getWords(): Promise<Words>
  getRandomWords(): Promise<Words>
}

export const QUIZ_COUNT = 10

export class WordRepoImpl implements WordRepository {
  public async getWords(): Promise<Words> {
    const contentStr = await getGistContent()
    // HACK:(nus3) 良い子はタイプガートとかすること
    const content = JSON.parse(contentStr) as Words
    return content
  }

  public async getRandomWords(): Promise<Words> {
    const contentStr = await getGistContent()
    const content = JSON.parse(contentStr) as Words

    if (!content || !content.words || !content.words?.length) {
      return { words: [] }
    }

    const indexes = randomIndexes(QUIZ_COUNT, content.words.length - 1)
    const words = indexes.map((i) => content.words[i])

    return { words }
  }
}
