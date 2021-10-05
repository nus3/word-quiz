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
}

const QUIZ_COUNT = 10

export class WordRepoImpl implements WordRepository {
  public async getWords(): Promise<Words> {
    const contentStr = await getGistContent()
    // HACK:(nus3) 良い子はタイプガートとかすること
    const content = JSON.parse(contentStr) as Words

    const indexes = randomIndexes(QUIZ_COUNT, content.words.length)
    const words = indexes.map((i) => content.words[i])

    return { words }
  }
}
