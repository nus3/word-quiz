import { QuizState } from 'states/quiz'

export const nextAnswer = (state: QuizState): QuizState => {
  const index = state.index + 1
  return {
    ...state,
    index,
    open: false,
    word: state.words[index].word,
  }
}
