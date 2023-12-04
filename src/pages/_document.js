import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
       <Head>
          {/* Add the link tag for the favicon */}
          <link rel="icon" href="/favicon-cura.ico" />
          {/* Other meta tags, stylesheets, etc. */}
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
