import { FC } from 'react'

import { useButtonContainer } from 'components/Button/hook'
import { ButtonPresenter } from 'components/Button/presenter'

export type ButtonProps = {
  label: string
  onClick?: () => void
  disabled?: boolean
}

export const Button: FC<ButtonProps> = ({ label, onClick, disabled }) => {
  const props = useButtonContainer({ label, onClick, disabled })
  return <ButtonPresenter {...props} />
}
