import { Word } from 'repositories/word'

export type QuizState = {
  collect: boolean
  open: boolean
  word: string
  index: number
  results: boolean[]
  words: Word[]
  isAnswer: boolean
}

export const initQuizState: QuizState = {
  collect: false,
  open: false,
  word: '',
  index: 0,
  results: [],
  words: [],
  isAnswer: true,
}
