import Image from "next/image";
import Link from "next/link";

import { Layout } from "../layout/layout";
import styles from "./blogPost.module.scss";

export const BlogPostTemplate = ({ post }) => {
  const { title, date, slug, author, image, tags, content } = post;

  return (
    <div className={styles.blogPostContainer}>
      <h2>{title}</h2>
      <h4>Dodane przez {author}</h4>
      <h5 className={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <Link key={index} href={`/tags/${tag}`}>
            <>#{tag}</>
          </Link>
        ))}
      </h5>
      <h6>{date}</h6>
      <div className={styles.imageContainer}>
        <Image
          alt="Main post image"
          src={`/images/${image}`}
          layout="fill"
          objectFit="contain"
          className={styles.image}
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <Link href={"/blog"}>Powrót</Link>
    </div>
  );
};
