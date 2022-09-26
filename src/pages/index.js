import Link from 'next/link'
import Image from 'next/image'
import style from '../styles/style.module.scss'

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'

import { TbBrandJavascript } from "react-icons/tb"
import { AiOutlineHtml5 } from "react-icons/ai"
import { TbBrandCss3 } from "react-icons/tb"
import { DiReact } from "react-icons/di"
import { TbBrandNextjs } from "react-icons/tb"
import { DiJqueryLogo } from "react-icons/di"
import { GiStrongMan } from "react-icons/gi"
import { TbBrandSass } from "react-icons/tb"
import { SiTailwindcss } from "react-icons/si"
import { GiBoxUnpacking } from "react-icons/gi"
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

    const sortedPosts = posts.sort((postA, postB) =>
    new Date(postA.frontMatter.date) > new Date(postB.frontMatter.date) ? -1 : 1
  );
  
  return {
    props: {
      posts,
      posts: sortedPosts,
    },
  };
};

   
const Home = ({posts}) => {   


useEffect(() => {
  if (process.browser) {
    gsap.registerPlugin(ScrollTrigger)
    sethome()
    setwork()

  }
}, [])
const sethome = () => {
gsap.timeline({
    defaults: { ease: "power2.out", duration: 1 }, // timelineのプロパティ
  })
   gsap.set("#home", {
    opacity: 0,
    x: -2000,
  }),
     gsap.set("#about", {
    opacity: 0,
    x: -2000,
  }),
   gsap.to("#home",{
       opacity: 1,
    x: 0,
    duration:1
     }),
        gsap.to("#about",{
       opacity: 1,
    x: 0,
    duration:1,
    delay:0.3
     })
}

const setwork = () => {
gsap.timeline({
    defaults: { ease: "power2.out", duration: 1 }, // timelineのプロパティ
    scrollTrigger: {
      trigger: "#work", // この要素と交差するとイベントが発火
    },
  })
   gsap.set("#work", {
    opacity: 0,
    x: -2000,
  }),
   gsap.to("#work",{
       opacity: 1,
    x: 0,
    duration:1.5
     })
}
    return (
    <>     
<div className={style.container}>
<div className={style.container2}>

      <section className={style.sec1} id="home">
        <h1 id='box'>FUJITA NAO</h1>
        <h2 id='box'>藤田 直生の就活用ポートフォリオです</h2>
      </section>

      <section className={style.sec2} id="about">
        <h2>ABOUT ME</h2>
        <div className={style.under_line}></div>
        <p className={style.sec2_p}>東北電子専門学校WEBクリエーター科でWeb制作の勉強をしております。<br/>
          jQueryかGSAPを用いたアニメーションが得意です。長所は新しいことが好きで、<br/>
          新しい技術に抵抗感なく適応できることです。このページはNext.jsで作りました。</p>
        <div className={style.sec2_flex}>
          <Image src="/me.jpeg" alt="藤田の画像" width={150} height={190} className={style.me_img}></Image>
          <div></div>
          <p className={style.sec2_p_box}>氏名:<br/><br/>所在地:<br/><br/>お問い合わせ:<br/><br/>スキル:<br/><br/> </p>
          <p className={style.sec2_p_box2}>藤田 直生 Fujita Nao<br/><br/>宮城県仙台市<br/><br/>fujitanao.work@gmail.com<br/><br/>Web制作におけるデザイン、HTML・CSS/SCSS・JSを用いたコーディング、スマートフォンサイトの作成。
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
        <h2>TAILWINDCSS<SiTailwindcss/></h2>
        <h2>JAVASCRIPT<TbBrandJavascript/></h2>
        <h2>REACT<DiReact/></h2>
        <h2>NEXT.JS<TbBrandNextjs/></h2>
        <h2>JQUERY<DiJqueryLogo/></h2>
        <h2>GSAP<GiStrongMan/></h2>
        <h2>PARCEL<GiBoxUnpacking/></h2>
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