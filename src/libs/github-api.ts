import { Octokit } from 'octokit'

const gist_id = '8107d42ebf5205864f8825774f2acd95'
const gistName = 'words.json'

// HACK:(nus3) infra層のinterfaceを定義する

export const getGistContent = async (): Promise<string> => {
  const client = new Octokit()
  const res = await client.request('GET /gists/{gist_id}', {
    gist_id,
  })

  // HACK:(nus3) ちゃんとプロパティの存在確認した方が良さそう
  return res.data.files[gistName]?.content
}
