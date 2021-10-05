import { ModalProps } from 'components/Modal'
import { ModalPresenterProps } from 'components/Modal/presenter'

type Params = ModalProps

export const useModalContainer = ({
  onClickClose,
  collect,
  open,
}: Params): ModalPresenterProps => {
  return {
    onCloseModal: onClickClose,
    collect,
    open,
  }
}
