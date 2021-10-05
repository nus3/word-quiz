import { useForm } from 'react-hook-form'

import { AnswerFormProps, AnswerFormValues } from 'components/AnswerForm'
import { AnswerFormPresenterProps } from 'components/AnswerForm/presenter'

type Params = AnswerFormProps

export const useAnswerFormContainer = ({
  onSubmit,
  word,
}: Params): AnswerFormPresenterProps => {
  const { register, getValues } = useForm<AnswerFormValues>({
    defaultValues: {
      answer: '',
    },
  })

  const handleSubmit = () => {
    onSubmit(getValues())
  }

  return {
    register: register('answer', { required: true }),
    onSubmit: handleSubmit,
    word,
  }
}
