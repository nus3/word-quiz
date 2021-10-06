import { ModalProps } from 'components/Modal'
import { ModalPresenterProps } from 'components/Modal/presenter'

type Params = ModalProps

export const useModalContainer = ({
  onClickClose,
  collect,
  open,
  answers,
}: Params): ModalPresenterProps => {
  const answerText = answers.join('、')

  return {
    onCloseModal: onClickClose,
    collect,
    open,
    answerText,
  }
}
