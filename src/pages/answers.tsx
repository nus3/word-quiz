import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useQuery } from 'react-query'

import { AnswersContent } from 'components/AnswersContent'
import { Layout } from 'components/Layout'

import { Words } from 'repositories/word'

// type AnswersPageProps = {
//   words: Words
// }

const AnswersPage: NextPage = () => {
  const { data, isLoading } = useQuery<Words>('words', async () => {
    const res = await fetch('/api/words')
    const data = await res.json()
    return data
  })

  return (
    <>
      <NextSeo title="タンゴ一覧" />
      <Layout>{!isLoading && <AnswersContent words={data} />}</Layout>
    </>
  )
}

export default AnswersPage

// export const getServerSideProps: GetServerSideProps<AnswersPageProps> =
//   async () => {
//     const repo = new WordRepoImpl()
//     const words = await repo.getWords()

//     return {
//       props: {
//         words,
//         test: 'aa',
//       },
//     }
//   }
