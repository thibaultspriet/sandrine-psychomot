import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com" /> 
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />
            <link rel="icon" type="image/png" sizes="32x32" href="/main/site_icon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/main/site_icon/favicon-16x16.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/main/site_icon/apple-touch-icon.png" />
            <link rel="manifest" href="/main/site_icon/site.webmanifest" />
            <link rel="mask-icon" href="/main/site_icon/safari-pinned-tab.svg"/>
            <meta name="theme-color" content="#ffffff" />
      
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
  