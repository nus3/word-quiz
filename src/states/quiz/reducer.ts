import { Reducer } from 'react'

import { QuizState } from 'states/quiz'
import { QuizAction, QuizActionType } from 'states/quiz/action'
import { answer } from 'states/quiz/reducers/answer'
import { complete } from 'states/quiz/reducers/complete'
import { initialLoad } from 'states/quiz/reducers/initial-load'
import { nextAnswer } from 'states/quiz/reducers/next-answer'

export const quizReducer: Reducer<QuizState, QuizAction> = (state, action) => {
  switch (action.type) {
    case QuizActionType.InitialLoad:
      return initialLoad(state, action.payload)
    case QuizActionType.Answer:
      return answer(state, action.payload)
    case QuizActionType.NextAnswer:
      return nextAnswer(state)
    case QuizActionType.Complete:
      return complete(state)

    default:
      throw new Error(`unexpected action type. ${action}`)
  }
}
