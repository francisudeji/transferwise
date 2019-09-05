import Document, { Html, Main, NextScript } from 'next/document'
import Head from 'next/head'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en' style={{ height: '100%' }}>
        <body className='text-tw-blue' style={{ height: '100%' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
