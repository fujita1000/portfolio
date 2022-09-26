import Image from 'next/image'

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'

import fs from 'fs';
import matter from 'gray-matter';
import { marked } from 'marked';
import { NextSeo } from 'next-seo';

import style from '../../styles/slug.module.scss';

export async function getStaticProps({ params }) {
  const file = fs.readFileSync(`posts/${params.slug}.md`, 'utf-8');
  const { data, content } = matter(file);
  return { props: { frontMatter: data, content } };
}

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ''),
    },
  }));
  console.log('paths:', paths);
  return {
    paths,
    fallback: false,
  };
}

const Post = ({ frontMatter, content }) => {
  useEffect(() => {
gsap.timeline({
    defaults: { ease: "power2.out", duration: 1 }, // timelineのプロパティ
  })
   gsap.set("#con", {
    x: -2000,
  }),
  gsap.to("#con",{
    opacity:1,
    x:0,
    duration:1.2
  })
    }, [])
  return (
    <>
     <NextSeo
        title={frontMatter.title}
        description={frontMatter.description}
        openGraph={{
          type: 'website',
          title: frontMatter.title,
          description: frontMatter.description,
          images: [
            {
              url: `https://portfolio-fujita.vercel.app/${frontMatter.image}`,
              width: 1200,
              height: 700,
              alt: frontMatter.title,
            },
          ],
        }}
      />
   
    <div className={style.container}>
      <div className={style.container2} id="con">
        <Image
          src={`/${frontMatter.image}`}
          width={1200}
          height={700}
          alt={frontMatter.title}
          className={style.slug_image}
        />
      <h1 className={style.slug_h1}>{frontMatter.title}</h1>
      <span className={style.slug_data}>{frontMatter.date}</span>
 <div className={style.slug_body} dangerouslySetInnerHTML={{ __html: marked(content) }}></div>

<div className={style.link}>
   <a href={frontMatter.link}>{frontMatter.link}</a>
</div>


<div  className={style.slug_image2}>
         <Image
          src={`/${frontMatter.image2}`}
          width={1200}
          height={700}
          alt={frontMatter.title}
        />  
</div>

<div  className={style.slug_image3}>
         <Image
          src={`/${frontMatter.image3}`}
          width={1200}
          height={700}
          alt={frontMatter.title}
        />  
</div>

<div  className={style.slug_image4}>
         <Image
          src={`/${frontMatter.image4}`}
          width={1200}
          height={700}
          alt={frontMatter.title}
        />  
</div>

<div className={style.link2}>
   <a href={frontMatter.link}>{frontMatter.link}</a>
</div>

    </div>
    </div> 
    </>
  );
};

export default Post;
