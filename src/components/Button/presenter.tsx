import classnames from 'classnames'
import { FC, ReactNode } from 'react'

import styles from './styles.module.css'

export type ButtonPresenterProps = {
  onClick?: () => void
  label: ReactNode
  disabled?: boolean
}

export const ButtonPresenter: FC<ButtonPresenterProps> = ({
  onClick,
  label,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      className={classnames(styles.button, {
        [styles.disabled]: disabled,
      })}
      disabled={disabled}
      type="button"
    >
      {label}
    </button>
  )
}
