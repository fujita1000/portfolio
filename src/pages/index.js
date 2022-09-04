import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import style from '../styles/style.module.scss'
import { TbBrandJavascript } from "react-icons/tb"
import { AiOutlineHtml5 } from "react-icons/ai"
import { TbBrandCss3 } from "react-icons/tb"
import { DiReact } from "react-icons/di"
import { TbBrandNextjs } from "react-icons/tb"
import { DiJqueryLogo } from "react-icons/di"
import { TbBrandSass } from "react-icons/tb"
import { BsFillBootstrapFill } from "react-icons/bs"
import { SiAdobeillustrator } from "react-icons/si"
import { SiAdobephotoshop } from "react-icons/si"
import { SiAdobexd } from "react-icons/si"
import { SiAdobepremierepro } from "react-icons/si"
import { SiAdobedreamweaver } from "react-icons/si"

import fs from 'fs';
import matter from 'gray-matter';
import PostCard from '../components/PostCard';

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

      <section className={style.sec1} id="home">
        <h1>FUJITA NAO</h1>
        <h2>藤田 直生の就活用ポートフォリオです</h2>
      </section>

      <section className={style.sec2} id="about">
        <h2>ABOUT ME</h2>
        <div className={style.under_line}></div>
        <p className={style.sec2_p}>東北電子専門学校WEBクリエーター科でWeb制作の勉強をしております。<br/>
          jQueryとGSAPを用いたアニメーションが得意です。長所は新しいことが好きで、<br/>
          新しい技術に抵抗感なく適応できることです。</p>
        <div className={style.sec2_flex}>
          <Image src="/me.jpeg" alt="藤田の画像" width={150} height={190}></Image>
          <p>氏名 :<br/>所在地 :<br/>お問い合わせ :<br/>スキル :<br/> </p>
          <p>藤田 直生 Fujita Nao<br/>宮城県仙台市<br/>fujitanao.work@gmail.com<br/>Web制作におけるデザイン、HTML・CSS/SCSS・JSを用いたコーディング、
          <br/>スマートフォンサイトの作成。
          <br/>Excel PowerPoint Word を使った資料の作成。
          <br/>Adode Illustrator Photoshop XD premiumPro Dreamweaverこれらの活用。</p>
        </div>
      </section>

      <section className={style.sec3} id="work">
        <h2>WORK</h2>
        <div className={style.under_line}></div>
       {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
      </section>

      <section className={style.sec4} id="skill">
        <h2>SKILL</h2>
        <div className={style.under_line}></div>
        <div className={style.sec4_flex}>
        <h2>HTML<AiOutlineHtml5/></h2>
        <h2>CSS<TbBrandCss3/></h2>  
        <h2>SASS/SCSS<TbBrandSass/></h2>
        <h2>JAVASCRIPT<TbBrandJavascript/></h2>
        <h2>REACT<DiReact/></h2>
        <h2>NEXT.JS<TbBrandNextjs/></h2>
        <h2>JQUERY<DiJqueryLogo/></h2>
        <h2>BOOTSTRAP<BsFillBootstrapFill/></h2>
        <h2>ILULSTRATOR<SiAdobeillustrator/></h2>
        <h2>PHOTOSHOP<SiAdobephotoshop/></h2>
        <h2>XD<SiAdobexd/></h2>
        <h2>PREMIUMPRO<SiAdobepremierepro/></h2>
        <h2>DREAMWEAVER<SiAdobedreamweaver/></h2>  
        </div>
      </section>
     <Link href="contact">
    <section className={style.sec5}>
      <h2>CONTACT</h2>
    </section> 
     </Link>
</div>

    </div>
 </>
  )
}

export default Home