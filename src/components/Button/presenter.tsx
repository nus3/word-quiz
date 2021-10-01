import { FC, ReactNode } from 'react'

import styles from './styles.module.css'

export type ButtonPresenterProps = {
  onClick: () => void
  label: ReactNode
}

export const ButtonPresenter: FC<ButtonPresenterProps> = ({
  onClick,
  label,
}) => {
  return (
    <button onClick={onClick} className={styles.button} type="button">
      {label}
    </button>
  )
}
