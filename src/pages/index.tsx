import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { IndexContent } from 'components/IndexContent'
import { Layout } from 'components/Layout'

import { WordRepoMockImpl } from 'repositories/wordMock'

const IndexPage: NextPage = () => {
  const { push } = useRouter()

  const handleQuiz = async () => {
    const repo = new WordRepoMockImpl()
    const words = await repo.getWords()
    console.log(words)
  }
  const handleAnswers = () => {
    push('/answers')
  }

  return (
    <Layout>
      <IndexContent onClickAnswers={handleAnswers} onClickQuiz={handleQuiz} />
    </Layout>
  )
}

export default IndexPage
