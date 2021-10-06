import { FC } from 'react'

import { useResultContentContainer } from 'components/ResultContent/hook'
import { ResultContentPresenter } from 'components/ResultContent/presenter'

export type ResultContentProps = {
  onClickBack: () => void
  onClickRetry: () => void
  results: boolean[]
}

export const ResultContent: FC<ResultContentProps> = ({
  onClickBack,
  onClickRetry,
  results,
}) => {
  const props = useResultContentContainer({
    onClickRetry,
    onClickBack,
    results,
  })
  return <ResultContentPresenter {...props} />
}
