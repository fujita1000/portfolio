import 'reset-css';
import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/layout'
import SEO from '../../next-seo.config';
import { DefaultSeo } from 'next-seo';



function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content="ポートフォリオ 藤田直生 このmetaタグSEOに影響しないゴミタグらしい" />
      <meta name="google" content="nositelinkssearchbox" />
      </Head>
      
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
    </>
  )

}

export default MyApp
