import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

import { IndexContent } from 'components/IndexContent'
import { Layout } from 'components/Layout'

const IndexPage: NextPage = () => {
  const { push } = useRouter()

  const handleQuiz = () => {
    push('/quiz')
  }
  const handleAnswers = () => {
    push('/answers')
  }

  return (
    <>
      <NextSeo title="TOPページ" />
      <Layout>
        <IndexContent onClickAnswers={handleAnswers} onClickQuiz={handleQuiz} />
      </Layout>
    </>
  )
}

export default IndexPage
