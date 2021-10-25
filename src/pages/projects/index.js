import PropTypes from 'prop-types'

import { getAllFilesMetadata } from '../../lib/mdx'

import Card from '../../components/Card'

import { constants } from '../../config/constants'
const lang = constants.language

export default function Projects({ projects }) {
  return (
    <div className="padding-06rem">
      <h1>{lang.pages.projects.title}</h1>
      <p>{lang.pages.projects.description}</p>
      <div className="flexbox-space-around">
        {projects.map((project) => (
          <Card key={project.slug} {...project} type="projects" />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const projects = await getAllFilesMetadata('projects')
  return {
    props: { projects },
  }
}

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired
}
