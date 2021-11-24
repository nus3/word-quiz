import { Client } from '@notionhq/client'

const { NOTION_SECRETS, NOTION_DATABASE_ID } = process.env

type Property = {
  plain_text: string
}

const main = async () => {
  try {
    const notion = new Client({ auth: NOTION_SECRETS })
    const res = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
    })

    const properties = res.results.map((r) => r.properties)
    const values = properties.map((p) => {
      const means = p.mean['rich_text'] as Array<Property>
      const meanValues = means.map((m) => m.plain_text)

      const words = p.word['title'] as Array<Property>
      const wordValues = words.map((m) => m.plain_text)

      const mean = meanValues[0]
      const toMeans = mean.indexOf('、') ? mean.split('、') : [mean]

      return {
        word: wordValues[0],
        answers: toMeans,
      }
    })
    console.info(JSON.stringify(values, null, 2))
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main()
