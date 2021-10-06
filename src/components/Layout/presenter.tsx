import Link from 'next/link'
import { FC, ReactNode } from 'react'
import { BsSun } from 'react-icons/bs'
import { DiGithubBadge } from 'react-icons/di'

import styles from './styles.module.css'

export type LayoutPresenterProps = {
  children: ReactNode
  loading?: boolean
}

export const LayoutPresenter: FC<LayoutPresenterProps> = ({
  children,
  loading,
}) => {
  const githubUrl = 'https://github.com/nus3/word-quiz'

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" passHref>
          タンゴ
        </Link>
        <a href={githubUrl} target="_blank" rel="noreferrer noopener">
          <DiGithubBadge className="text-accentYellow text-6xl" />
        </a>
      </header>
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
          <a>
            <BsSun className={styles['footer-icon']} />
          </a>
        </Link>
      </footer>
    </div>
  )
}
