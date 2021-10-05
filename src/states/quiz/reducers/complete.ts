import { QuizState } from 'states/quiz'

export const complete = (state: QuizState): QuizState => {
  return {
    ...state,
    open: false,
    isAnswer: false,
  }
}
