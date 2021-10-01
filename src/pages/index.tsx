import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { IndexContent } from 'components/IndexContent'
import { Layout } from 'components/Layout'

const IndexPage: NextPage = () => {
  const { push } = useRouter()

  const handleQuiz = () => undefined
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
