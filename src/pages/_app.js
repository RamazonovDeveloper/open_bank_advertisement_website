import '@/styles/globals.css'
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>OPENCARD</title>
        <meta property="og:title" content="OPENCARD" key="title" />
        <link rel="shortcut icon" href="/openlogo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  
  )
}
