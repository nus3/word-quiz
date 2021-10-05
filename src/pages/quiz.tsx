import { NextPage, GetServerSideProps } from 'next'

import { AnswerForm, AnswerFormValues } from 'components/AnswerForm'
import { Layout } from 'components/Layout'

import { Words } from 'repositories/word'
import { WordRepoMockImpl } from 'repositories/wordMock'

type QuizPageProps = {
  words: Words
}

const QuizPage: NextPage<QuizPageProps> = ({ words }) => {
  console.log({ words })

  const handleSubmit = (values: AnswerFormValues) => {
    console.log({ values })
  }

  return (
    <Layout>
      <AnswerForm onSubmit={handleSubmit} word="as long as" />
    </Layout>
  )
}

export default QuizPage

export const getServerSideProps: GetServerSideProps<QuizPageProps> =
  async () => {
    const repo = new WordRepoMockImpl()
    const words = await repo.getRandomWords()

    return {
      props: {
        words,
      },
    }
  }
