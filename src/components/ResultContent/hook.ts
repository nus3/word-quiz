import { ResultContentProps } from 'components/ResultContent'
import { ResultContentPresenterProps } from 'components/ResultContent/presenter'

type Params = ResultContentProps

export const useResultContentContainer = ({
  onClickBack,
  onClickRetry,
  results,
}: Params): ResultContentPresenterProps => {
  const len = results.length
  const collectCount = results.filter((r) => r).length

  const percent = Math.round((collectCount / len) * 100)

  return {
    onClickBack,
    onClickRetry,
    percent,
  }
}
