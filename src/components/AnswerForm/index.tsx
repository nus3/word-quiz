import { FC } from 'react'

import { useAnswerFormContainer } from 'components/AnswerForm/hook'
import { AnswerFormPresenter } from 'components/AnswerForm/presenter'

export type AnswerFormValues = {
  answer: string
}

export type AnswerFormProps = {
  onSubmit: (values: AnswerFormValues) => void
  word: string
}

export const AnswerForm: FC<AnswerFormProps> = ({ onSubmit, word }) => {
  const props = useAnswerFormContainer({ onSubmit, word })
  return <AnswerFormPresenter {...props} />
}
