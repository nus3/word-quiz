import { QuizState } from 'states/quiz'

export const retry = (state: QuizState): QuizState => {
  const index = 0
  return {
    ...state,
    index,
    open: false,
    word: state.words[index].word,
    results: [],
    isAnswer: true,
  }
}
