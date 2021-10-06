import { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useReducer } from 'react'

import { AnswerForm, AnswerFormValues } from 'components/AnswerForm'
import { Layout } from 'components/Layout'
import { Modal } from 'components/Modal'
import { ResultContent } from 'components/ResultContent'

import { QUIZ_COUNT, Words } from 'repositories/word'
import { WordRepoMockImpl } from 'repositories/wordMock'
import { initQuizState } from 'states/quiz'
import { QuizActionType } from 'states/quiz/action'
import { quizReducer } from 'states/quiz/reducer'

type QuizPageProps = {
  words: Words
}

const QuizPage: NextPage<QuizPageProps> = ({ words }) => {
  const [state, dispatch] = useReducer(quizReducer, initQuizState)

  const { push } = useRouter()

  useEffect(() => {
    dispatch({
      type: QuizActionType.InitialLoad,
      payload: { words: words.words },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = (values: AnswerFormValues) => {
    // TODO:(nus3) nullだったらbuttonをdisabledにする
    if (values.answer === '') return

    const currentQuiz = state.words[state.index]
    const collect = currentQuiz.answers.includes(values.answer)

    dispatch({
      type: QuizActionType.Answer,
      payload: { collect },
    })
  }

  const handleCloseModal = () => {
    if (state.results.length === QUIZ_COUNT) {
      dispatch({
        type: QuizActionType.Complete,
      })
      return
    }

    dispatch({
      type: QuizActionType.NextAnswer,
    })
  }

  const handleBack = () => {
    push('/')
  }

  const handleRetry = () => {
    dispatch({
      type: QuizActionType.Retry,
    })
  }

  return (
    <Layout>
      {state.isAnswer ? (
        <>
          <AnswerForm onSubmit={handleSubmit} word={state.word} />
          <Modal
            collect={state.collect}
            onClickClose={handleCloseModal}
            open={state.open}
          />
        </>
      ) : (
        <ResultContent
          onClickBack={handleBack}
          onClickRetry={handleRetry}
          results={state.results}
        />
      )}
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
