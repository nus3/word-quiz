import { getGistContent } from 'libs/github-api'

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

export class WordRepoImpl implements WordRepository {
  public async getWords(): Promise<Words> {
    const contentStr = await getGistContent()
    // HACK:(nus3) 良い子はタイプガートとかすること
    const content = JSON.parse(contentStr) as Words
    return content
  }
}
