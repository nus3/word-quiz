import { NextPage, GetServerSideProps } from 'next'

import { Layout } from 'components/Layout'

import { Words } from 'repositories/word'
import { WordRepoMockImpl } from 'repositories/wordMock'

type QuizPageProps = {
  words: Words
}

const QuizPage: NextPage<QuizPageProps> = ({ words }) => {
  console.log(words)
  return <Layout>回答画面だよ</Layout>
}

export default QuizPage

export const getServerSideProps: GetServerSideProps<QuizPageProps> =
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
