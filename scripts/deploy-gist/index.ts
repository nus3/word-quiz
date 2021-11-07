import { Octokit } from 'octokit'

import words from '../../words.json'

const GIST_ID = '8107d42ebf5205864f8825774f2acd95'
const GIST_NAME = 'words.json'

const { NUS3_GIST_TOKEN } = process.env

const main = async () => {
  try {
    const client = new Octokit({
      auth: NUS3_GIST_TOKEN,
    })
    await client.rest.gists.update({
      gist_id: GIST_ID,
      headers: { accept: 'application/vnd.github.v3+json' },
      files: {
        [`${GIST_NAME}`]: {
          content: JSON.stringify(words),
        },
      },
    })

    console.info('Completed update words')
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main()
