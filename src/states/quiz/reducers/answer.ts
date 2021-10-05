import { QuizState } from 'states/quiz'

export type AnswerPayload = {
  collect: boolean
}

export const answer = (state: QuizState, payload: AnswerPayload): QuizState => {
  const results = state.results
  results.push(payload.collect)

  return {
    ...state,
    results,
    collect: payload.collect,
    open: true,
  }
}
