import { GetServerSideProps, NextPage } from 'next'

import { AnswersContent } from 'components/AnswersContent'
import { Layout } from 'components/Layout'

import { WordRepoImpl, Words } from 'repositories/word'

type AnswersPageProps = {
  words: Words
}

const AnswersPage: NextPage<AnswersPageProps> = ({ words }) => {
  return (
    <Layout>
      <AnswersContent words={words} />
    </Layout>
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
