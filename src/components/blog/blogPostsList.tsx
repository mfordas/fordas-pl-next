import React from "react";

import { BlogPostMiniature } from "./blogPostMiniature";

import styles from "./blogPostsList.module.scss";

const dateInMilisecondsCreation = (date) => {
  const arrayDate = date.split("-");
  const dateObject = new Date(arrayDate[0], arrayDate[1], arrayDate[2]);
  const dateInMiliseconds = dateObject.getTime();
  return dateInMiliseconds;
};

const sortPosts = (postsArray) => {
  const sortedArray = postsArray.sort(
    (firstPost, secondPost) =>
      dateInMilisecondsCreation(secondPost.date) -
      dateInMilisecondsCreation(firstPost.date)
  );
  return sortedArray;
};

interface Props {
  blogPosts: any[];
}

export const BlogPostsList: React.FC<Props> = ({ blogPosts }) => (
  <div className={styles.blogContainer}>
    <div className={styles.blogPostsContainer}>
      {blogPosts.length &&
        sortPosts(blogPosts).map((post) => {
          return <BlogPostMiniature key={post.id} post={post} />;
        })}
    </div>
  </div>
);
