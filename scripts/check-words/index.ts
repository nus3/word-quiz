import data from '../../words.json'

const checkWords = (words: string[]) => {
  const s = new Set(words)
  return s.size === words.length
}

const main = () => {
  try {
    const values = data.words.map((w) => w.word)

    if (!checkWords(values)) {
      console.error('Error!!重複してるwordがあるよ')
      process.exit(1)
    }
  } catch (error) {
    console.error(error)
  }
}

main()
