import { AnswersContentProps } from 'components/AnswersContent'
import { AnswersContentPresenterProps } from 'components/AnswersContent/presenter'

type Params = AnswersContentProps

export const useAnswersContentContainer = ({
  words,
}: Params): AnswersContentPresenterProps => {
  return {
    words,
  }
}
