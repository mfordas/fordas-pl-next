import { useRouter } from "next/router";
import { BlogPostTemplate } from "../../components/blog/blogPost";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";

const BlogPostPage = ({ post }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <div>Loading..</div>;
  }

  if (router.isFallback) return <div>Load</div>;

  return <BlogPostTemplate post={post} />;
};

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "tags",
    "image",
    "short",
    "content",
  ]);

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default BlogPostPage;
