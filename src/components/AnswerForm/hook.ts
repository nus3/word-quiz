import { useForm } from 'react-hook-form'

import { AnswerFormProps, AnswerFormValues } from 'components/AnswerForm'
import { AnswerFormPresenterProps } from 'components/AnswerForm/presenter'

type Params = AnswerFormProps

export const useAnswerFormContainer = ({
  onSubmit,
  word,
  onClickViewAnswer,
}: Params): AnswerFormPresenterProps => {
  const { register, getValues, reset } = useForm<AnswerFormValues>({
    defaultValues: {
      answer: '',
    },
  })

  const handleSubmit = () => {
    onSubmit(getValues())
    reset()
  }

  const handleViewAnswer = () => {
    onClickViewAnswer()
    reset()
  }

  return {
    register: register('answer', { required: true }),
    onSubmit: handleSubmit,
    word,
    onClickViewAnswer: handleViewAnswer,
  }
}
