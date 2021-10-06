import { QuizState } from 'states/quiz'

export type AnswerPayload = {
  collect: boolean
}

export const answer = (state: QuizState, payload: AnswerPayload): QuizState => {
  const results = state.results
  results.push(payload.collect)

  // HACK:(nus3) findIndex等でエラー処理する
  const currentAnswers = state.words[state.index].answers

  return {
    ...state,
    results,
    collect: payload.collect,
    open: true,
    currentAnswers,
  }
}
