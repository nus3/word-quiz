import { FC } from 'react'

import { Button } from 'components/Button'

import styles from './styles.module.css'

export type ResultContentPresenterProps = {
  percent: number
  onClickBack: () => void
  onClickRetry: () => void
}

export const ResultContentPresenter: FC<ResultContentPresenterProps> = ({
  percent,
  onClickBack,
  onClickRetry,
}) => {
  return (
    <section className={styles.wrap}>
      <h2 className={styles.label}>正答率</h2>
      <p className={styles.percent}>
        {percent}
        <span className="text-primary text-4xl">%</span>
      </p>
      <div className={styles['btn-wrap']}>
        <Button onClick={onClickRetry} label="もう一度" />
        <Button onClick={onClickBack} label="TOPへ" />
      </div>
    </section>
  )
}
