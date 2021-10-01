import { IndexContentProps } from 'components/IndexContent'
import { IndexContentPresenterProps } from 'components/IndexContent/presenter'

type Params = IndexContentProps

export const useIndexContentContainer = ({
  onClickAnswers,
  onClickQuiz,
}: Params): IndexContentPresenterProps => {
  return {
    onClickAnswers,
    onClickQuiz,
  }
}
