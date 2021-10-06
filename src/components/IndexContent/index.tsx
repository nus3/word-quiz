import { FC } from 'react'

import { useIndexContentContainer } from 'components/IndexContent/hook'
import { IndexContentPresenter } from 'components/IndexContent/presenter'

export type IndexContentProps = {
  onClickQuiz: () => void
  onClickAnswers: () => void
}

export const IndexContent: FC<IndexContentProps> = ({
  onClickAnswers,
  onClickQuiz,
}) => {
  const props = useIndexContentContainer({ onClickQuiz, onClickAnswers })
  return <IndexContentPresenter {...props} />
}
