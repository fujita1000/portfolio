import Link from 'next/link';
import Image from 'next/image';

const PostCard = ({ post }) => {
  return (
    <Link href={`/post/${post.slug}`}>
      <a>
      <Image src={`/${post.frontMatter.image}`}
            width={1200}
            height={700}
            alt={post.frontMatter.title}
          />
          <span>{post.frontMatter.date}</span>
          <span>{post.frontMatter.title}</span>
</a>
    </Link>
    
  );
};

export default PostCard;