import { getAllFilesMetadata } from '../lib/mdx'
import Link from 'next/link'

export default function lector({ posts }) {
  return (
    <div>
      {
        posts.map(post => (
          <Link key={post.slug} href={`/project/${post.slug}`}>
            <h1>{post.title}</h1>
          </Link>
        ))
      }
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata('projects')
  console.log(posts);
  return {
    props: { posts },
  }
}
