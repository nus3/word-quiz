import { FC } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import { Button } from 'components/Button'

import styles from './styles.module.css'

export type AnswerFormPresenterProps = {
  onSubmit: () => void
  register: UseFormRegisterReturn
  word: string
}

export const AnswerFormPresenter: FC<AnswerFormPresenterProps> = ({
  onSubmit,
  register,
  word,
}) => {
  return (
    <form className={styles.wrap}>
      <p className={styles.word}>{word}</p>
      <input {...register} className={styles.input} autoComplete="off" />
      {/* NOTE:(nus3) enterでのsubmit防止用 */}
      <input type="text" className="hidden" />
      <Button
        onClick={() => {
          onSubmit()
        }}
        label="回答する"
      />
    </form>
  )
}
