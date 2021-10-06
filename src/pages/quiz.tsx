import { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useReducer } from 'react'

import { AnswerForm, AnswerFormValues } from 'components/AnswerForm'
import { Layout } from 'components/Layout'
import { Modal } from 'components/Modal'
import { ResultContent } from 'components/ResultContent'

import { QUIZ_COUNT, WordRepoImpl, Words } from 'repositories/word'
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
    // HACK:(nus3) nullだったらbuttonをdisabledにする
    if (values.answer === '') return

    // HACK:(nus3) findIndexでundefinedの場合のエラー処理する
    const currentQuiz = state.words[state.index]
    const collect = currentQuiz.answers.includes(values.answer)

    dispatch({
      type: QuizActionType.Answer,
      payload: { collect },
    })
  }

  const handleViewAnswer = () => {
    dispatch({
      type: QuizActionType.Answer,
      payload: { collect: false },
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
          <AnswerForm
            onSubmit={handleSubmit}
            word={state.word}
            onClickViewAnswer={handleViewAnswer}
          />
          <Modal
            collect={state.collect}
            onClickClose={handleCloseModal}
            open={state.open}
            answers={state.currentAnswers}
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
    const repo = new WordRepoImpl()
    const words = await repo.getRandomWords()

    return {
      props: {
        words,
      },
    }
  }
