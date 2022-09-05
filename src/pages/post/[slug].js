import Image from 'next/image'

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
              url: `https://portfolio-fujita1000.vercel.app/${frontMatter.image}`,
              width: 1200,
              height: 700,
              alt: frontMatter.title,
            },
          ],
        }}
      />
   
    <div className={style.container}>
      <div className={style.container2}>
        <Image
          src={`/${frontMatter.image}`}
          width={1200}
          height={700}
          alt={frontMatter.title}
        />
      <h1 className="mt-12">{frontMatter.title}</h1>
      <span>{frontMatter.date}</span>
 <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
    </div>
    </div> 
    </>
  );
};

export default Post;
