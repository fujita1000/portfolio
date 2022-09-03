import Head from 'next/head'
import Link from 'next/link'
import style from '../styles/style.module.scss'

import fs from 'fs';
import matter from 'gray-matter';
import PostCard from './components/PostCard';

export const getStaticProps = () => {
  const files = fs.readdirSync('posts');
  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fileContent = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data } = matter(fileContent);
    return {
      frontMatter: data,
      slug,
    };
  });

  return {
    props: {
      posts,
    },
  };
};


   
const Home = ({posts}) => {   
    return (
    <>     
      <Head>
      <meta charset="utf-8" />
      <title>藤田 直生|NAO FUJITA</title>
      <meta name="description" content="23卒の就活性の藤田直生のポートフォリオです。GSAPとjQuaryを使ったアニメーションが得意です。採用よろしくお願いいたします。" />
      <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content="ポートフォリオ 藤田直生 このmetaタグSEOに影響しないゴミタグらしい" />
      <meta name="google" content="nositelinkssearchbox" />
      </Head>

<div className={style.container}>
<div className={style.container2}>

      <section className={style.sec1}>
        <h1>FUJITA NAO</h1>
        <h2>藤田 直生の就活用ポートフォリオです</h2>
      </section>

      <section className={style.sec2}>
        <h1>WORK</h1>
       {posts.map((post) => (
        <div key={post.slug}> 
        <PostCard key={post.slug} post={post} />
        </div>
      ))}
      </section>

      <section className={style.sec3}>
        <h1>Contact</h1>
        <h2>藤田 直生の就活用ポートフォリオです</h2>
      </section>

</div>

    </div>
 </>
  )
}

export default Home