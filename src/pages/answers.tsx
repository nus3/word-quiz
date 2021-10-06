import { GetServerSideProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'

import { AnswersContent } from 'components/AnswersContent'
import { Layout } from 'components/Layout'

import { WordRepoImpl, Words } from 'repositories/word'

type AnswersPageProps = {
  words: Words
}

const AnswersPage: NextPage<AnswersPageProps> = ({ words }) => {
  return (
    <>
      <NextSeo title="タンゴ一覧" />
      <Layout>
        <AnswersContent words={words} />
      </Layout>
    </>
  )
}

export default AnswersPage

export const getServerSideProps: GetServerSideProps<AnswersPageProps> =
  async () => {
    const repo = new WordRepoImpl()
    const words = await repo.getWords()

    return {
      props: {
        words,
        test: 'aa',
      },
    }
  }
