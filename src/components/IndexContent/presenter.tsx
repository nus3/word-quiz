import { FC } from 'react'

import { Button } from 'components/Button'

import styles from './styles.module.css'

export type IndexContentPresenterProps = {
  onClickQuiz: () => void
  onClickAnswers: () => void
}

export const IndexContentPresenter: FC<IndexContentPresenterProps> = ({
  onClickAnswers,
  onClickQuiz,
}) => {
  return (
    <section className={styles.wrap}>
      <Button label="回答する" onClick={onClickQuiz} />
      <Button label="答えを見る" onClick={onClickAnswers} />
    </section>
  )
}
