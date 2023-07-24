import '@/styles/globals.css'
import '@/styles/App.css'
import Head from "next/head";
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Open Рассрочка - покупайте десятки тысяч товаров в беспроцентную рассрочку!</title>
        <meta property="og:title" content="Open Рассрочка - покупайте десятки тысяч товаров в беспроцентную рассрочку!" key="title" />
        <link rel="shortcut icon" href="/openlogo.png" />
        <meta name="description" content="Open Рассрочка - покупайте десятки тысяч товаров в беспроцентную рассрочку!"/>
        <meta property="og:description" content="Open Рассрочка - покупайте десятки тысяч товаров в беспроцентную рассрочку!" />

        {/* Google Tag Manager */}
        
        <Script strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PN2KQX9');`}}></Script>

      </Head>

      <>
        

        <Component {...pageProps} />
      </>
      
      
    </>
  
  )
}
