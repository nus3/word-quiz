import { FC } from 'react'

import { useAnswersContentContainer } from 'components/AnswersContent/hook'
import { AnswersContentPresenter } from 'components/AnswersContent/presenter'

import { Words } from 'repositories/word'

export type AnswersContentProps = {
  words: Words
}

export const AnswersContent: FC<AnswersContentProps> = ({ words }) => {
  const props = useAnswersContentContainer({ words })
  return <AnswersContentPresenter {...props} />
}
