import { getAllFilesMetadata } from '../../lib/mdx'

import Card from '../../components/Card'

import { constants } from '../../config/constants'
const lang = constants.language

export default function Projects({ posts }) {
  return (
    <div className="padding-06rem">
      <h1>{lang.pages.projects.title}</h1>
      <p>{lang.pages.projects.description}</p>
      <div className="flexbox-space-around">
        {posts.map((post) => (
          <Card key={post.slug} {...post} type="projects" />
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
