import { FC } from 'react'

import { Words } from 'repositories/word'

import styles from './styles.module.css'

export type AnswersContentPresenterProps = {
  words: Words
}

export const AnswersContentPresenter: FC<AnswersContentPresenterProps> = ({
  words,
}) => {
  return (
    <ul className={styles.wrap}>
      {/* TODO:(nus3) 無限スクロールの実装 */}
      {/* HACK:(nus3) wordsのobjectなおす */}
      {words.words.map((w) => (
        <li className={styles.item} key={w.word}>
          <p className={styles.word}>{w.word}</p>
          <p className={styles.answers}>{w.answers.join('、')}</p>
        </li>
      ))}
    </ul>
  )
}
