import { GetServerSideProps, NextPage } from 'next'

import { AnswersContent } from 'components/AnswersContent'
import { Layout } from 'components/Layout'

import { Words } from 'repositories/word'
import { WordRepoMockImpl } from 'repositories/wordMock'

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
    const repo = new WordRepoMockImpl()
    const words = await repo.getWords()

    return {
      props: {
        words,
        test: 'aa',
      },
    }
  }
