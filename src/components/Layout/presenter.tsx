import Link from 'next/link'
import { FC, ReactNode } from 'react'
import { BsSun } from 'react-icons/bs'

import styles from './styles.module.css'

export type LayoutPresenterProps = {
  children: ReactNode
  loading?: boolean
}

export const LayoutPresenter: FC<LayoutPresenterProps> = ({
  children,
  loading,
}) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>Word Quiz</header>
      <main className={styles.main}>
        {/* TODO: loadingコンポーネント作る */}
        {loading ? (
          <section className={styles.loading}>loading中だよ</section>
        ) : (
          children
        )}
      </main>
      <footer className={styles.footer}>
        <Link href="/" passHref>
          <BsSun className={styles['footer-icon']} />
        </Link>
      </footer>
    </div>
  )
}