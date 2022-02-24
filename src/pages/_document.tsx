import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  public render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=option"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=option"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#FFD369" />
          <link rel="manifest" href="/manifest.webmanifest" />
          <link rel="apple-touch-icon" href="/icon-192x192.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
