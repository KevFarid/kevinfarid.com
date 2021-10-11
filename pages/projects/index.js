import Card from '../../components/Card'
import { getAllFilesMetadata } from '../../lib/mdx'

export default function Projects({ posts }) {
  return (
    <div className="padding-06rem">
      <h1>¿Cuáles son mis proyectos?</h1>
      <p>
        Me encanta desarrollar, a cada momento investigo y estudio todo lo que me gusta. Cuando
        desarrollo algo me gusta mostrarlo a las demas personas y aqui podras ver mis proyectos más
        una historia de cómo se desarrollaron.
      </p>
      <div className='flexbox-space-around'>
        {posts.map((post) => (
          <Card key={post.slug} {...post} type='projects'/>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata('projects')
  return {
    props: { posts },
  }
}
