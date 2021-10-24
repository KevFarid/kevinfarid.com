import { getAllFilesMetadata } from '../lib/mdx'

import Display from '../components/Display'
import Card from '../components/Card'

export default function Home({ posts, projects }) {
  return (
    <div>
      <Display />
      <div className="padding-06rem">
        <section>
          <h2>
            MIS <span className="text-primary-color">PROYECTOS</span>
          </h2>
          <div className="flexbox-space-around">
            {posts.map((post) => (
              <Card key={post.slug} {...post} type="projects" />
            ))}
          </div>
        </section>
        <section>
          <h2>
            MIS <span className="text-primary-color">ULTIMAS ENTRADAS</span>
          </h2>
          <div className="flexbox-space-around">
            {projects.map((project) => (
              <Card key={project.slug} {...project} type="projects" />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata('blog')
  const projects = await getAllFilesMetadata('projects')

  return {
    props: {
      posts: posts.slice(0, 3),
      projects: projects.slice(0, 3),
    },
  }
}
