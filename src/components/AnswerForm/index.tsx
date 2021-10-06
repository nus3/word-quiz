import { FC } from 'react'

import { useAnswerFormContainer } from 'components/AnswerForm/hook'
import { AnswerFormPresenter } from 'components/AnswerForm/presenter'

export type AnswerFormValues = {
  answer: string
}

export type AnswerFormProps = {
  onSubmit: (values: AnswerFormValues) => void
  onClickViewAnswer: () => void
  word: string
}

export const AnswerForm: FC<AnswerFormProps> = ({
  onSubmit,
  onClickViewAnswer,
  word,
}) => {
  const props = useAnswerFormContainer({ onSubmit, onClickViewAnswer, word })
  return <AnswerFormPresenter {...props} />
}
