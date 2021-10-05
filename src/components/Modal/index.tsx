import { FC } from 'react'

import { useModalContainer } from 'components/Modal/hook'
import { ModalPresenter } from 'components/Modal/presenter'

export type ModalProps = {
  onClickClose: () => void
  collect: boolean
  open: boolean
}

export const Modal: FC<ModalProps> = ({ onClickClose, collect, open }) => {
  const props = useModalContainer({ collect, onClickClose, open })
  return <ModalPresenter {...props} />
}
