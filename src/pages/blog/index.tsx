import { BlogPostsList } from "../../components/blog/blogPostsList";
import { getAllPosts } from "../../lib/api";

const BlogPage = ({ allPosts }) => {
  return <BlogPostsList blogPosts={allPosts} />;
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "tags",
    "image",
    "short",
  ]);

  return {
    props: { allPosts },
  };
};

export default BlogPage;
