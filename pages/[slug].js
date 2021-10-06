import { getFileBySlug, getFiles } from '../lib/mdx'
import { MDXRemote } from "next-mdx-remote";

export default function Post({ source, frontmatter }) {
  return (
    <MDXRemote {...source}/>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles("blog");
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug("blog", params.slug);

  return {
    props: {
      source,
      frontmatter: {
        slug: params.slug,
        ...frontmatter,
      },
    },
  };
}