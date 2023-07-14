import '@/styles/globals.css'
import '@/styles/App.css'
import Head from "next/head";
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>OPENCARD</title>
        <meta property="og:title" content="OPENCARD" key="title" />
        <link rel="shortcut icon" href="/openlogo.png" />

        {/* GTM CODES START */}
        <Script strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-XXXXXXX');`}}></Script>
        {/* GTM CODES END */}

      </Head>

      <>
        

        <Component {...pageProps} />
      </>
      
      
    </>
  
  )
}
