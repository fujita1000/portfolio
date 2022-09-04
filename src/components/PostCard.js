import Link from 'next/link';
import Image from 'next/image';
import style from '../styles/postcard.module.scss';

const PostCard = ({ post }) => {
  return (
    <Link href={`/post/${post.slug}`}>
      <a>
        <div className={style.container}>
        <span>{post.frontMatter.title}</span>
        <div className={style.image}>
      <Image src={`/${post.frontMatter.image}`}
            width={1200}
            height={700}
            alt={post.frontMatter.title}
          />
          </div>
          <span className={style.description}>{post.frontMatter.description}</span><br/>
          <span>{post.frontMatter.date}</span>
          </div>
</a>
    </Link>
    
  );
};

export default PostCard ;