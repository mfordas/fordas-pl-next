import Link from "next/link";
import Image from "next/image";

import styles from "./blogPostMiniature.module.scss";

export const BlogPostMiniature = ({ post }) => {
  const { slug, title, author, image, short } = post;
  return (
    <div className={styles.blogPostMiniatureContainer}>
      <Link as={`/blog/${slug}`} href={`blog/[slug]`}>
        <h3>{title}</h3>
      </Link>
      <small style={{ textAlign: "end" }}>
        Dodane przez <b>{author}</b>
      </small>
      <Link as={`/blog/${slug}`} href={`blog/[slug]`}>
        <div className={styles.imageContainer}>
          <Image
            src={`/images/${image}`}
            alt="post pic"
            layout="fill"
            className={styles.image}
          />
        </div>
      </Link>
      <Link as={`/blog/${slug}`} href={`blog/[slug]`}>
        {short}
      </Link>
      <br />
      <div style={{ textAlign: "end" }}>
        {post.tags.map((tag, index) => (
          <Link key={index} href={`/tags/${tag}/`}>{`#${tag} `}</Link>
        ))}
      </div>
      <br />
      <br />
      <Link as={`/blog/${slug}`} href={`blog/[slug]`}>
        Czytaj więcej
      </Link>
    </div>
  );
};
