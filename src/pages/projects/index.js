import PropTypes from 'prop-types'

import { getAllFilesMetadata } from '../../lib/mdx'

import Card from '../../components/Card'
import Header from 'components/Header'

import { constants } from '../../config/constants'
const lang = constants.language

export default function Projects({ projects }) {
  const title = `${lang.pages.projects.title} - Kev Farid`
  const description = lang.pages.projects.description
  const ogType = 'website'
  const ogImage = constants.imgs.ogImage


  return (
    <div className="padding-06rem">
      <Header
        title={title}
        description={description}
        ogType={ogType}
        ogImage={ogImage}
      />
      <h1>{lang.pages.projects.title}</h1>
      <p className="text-justify">{lang.pages.projects.description}</p>
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
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
}
