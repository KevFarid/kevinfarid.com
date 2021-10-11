import Card from '../../components/Card'
import { getAllFilesMetadata } from '../../lib/mdx'

export default function Blog({posts}) {
  return (
    <div>
      <div className="padding-06rem">
        <h1>Blog</h1>
        <p>
          Este espacio está diseñado para contar y expresar experiencia a los largo de mi vida en el mundo de la tecnologia.
        </p>
        <div className="flexbox-space-around">
          {posts.map((post) => (
            <Card key={post.slug} {...post} type='blog'/>
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata('blog')
  return {
    props: { posts},
  }
}