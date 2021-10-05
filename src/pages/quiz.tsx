import { NextPage, GetServerSideProps } from 'next'
import { useState } from 'react'

import { AnswerForm, AnswerFormValues } from 'components/AnswerForm'
import { Layout } from 'components/Layout'
import { Modal } from 'components/Modal'

import { Words } from 'repositories/word'
import { WordRepoMockImpl } from 'repositories/wordMock'

type QuizPageProps = {
  words: Words
}

const QuizPage: NextPage<QuizPageProps> = ({ words }) => {
  console.log({ words })

  const [collect, setCollect] = useState(false)
  const [open, setOpen] = useState(false)

  const handleSubmit = (values: AnswerFormValues) => {
    console.log({ values })
    setCollect(false)
    setOpen(true)
  }

  const handleCloseModal = () => {
    setOpen(false)
  }

  return (
    <Layout>
      <AnswerForm onSubmit={handleSubmit} word="as long as" />
      <Modal collect={collect} onClickClose={handleCloseModal} open={open} />
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
