import { Word } from 'repositories/word'
import { QuizState } from 'states/quiz'

export type InitialLoadPayload = {
  words: Word[]
}

export const initialLoad = (
  state: QuizState,
  payload: InitialLoadPayload,
): QuizState => ({
  ...state,
  word: payload.words[state.index].word,
  words: payload.words,
})
