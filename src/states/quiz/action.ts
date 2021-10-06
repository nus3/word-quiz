import { AnswerPayload } from 'states/quiz/reducers/answer'
import { InitialLoadPayload } from 'states/quiz/reducers/initial-load'

export enum QuizActionType {
  InitialLoad = 'InitialLoad',
  Answer = 'Answer',
  NextAnswer = 'NextAnswer',
  Complete = 'Complete',
  Retry = 'Retry',
}

export type QuizAction =
  | {
      type: QuizActionType.InitialLoad
      payload: InitialLoadPayload
    }
  | {
      type: QuizActionType.Answer
      payload: AnswerPayload
    }
  | {
      type: QuizActionType.NextAnswer
    }
  | {
      type: QuizActionType.Complete
    }
  | {
      type: QuizActionType.Retry
    }
