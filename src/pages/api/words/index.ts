import { NextApiHandler } from 'next'

import { WordRepoImpl, Words } from 'repositories/word'

const handler: NextApiHandler<Words> = async (_req, res) => {
  const repo = new WordRepoImpl()
  const words = await repo.getWords()

  res.status(200).json(words)
}

export default handler
