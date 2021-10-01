import { FC } from 'react'

import { useButtonContainer } from 'components/Button/hook'
import { ButtonPresenter } from 'components/Button/presenter'

export type ButtonProps = {
  label: string
  onClick: () => void
}

export const Button: FC<ButtonProps> = ({ label, onClick }) => {
  const props = useButtonContainer({ label, onClick })
  return <ButtonPresenter {...props} />
}
