import { MDXRemote } from 'next-mdx-remote'
import PropTypes from 'prop-types'

import Header from 'components/Header'

import { getFileBySlug, getFiles } from '../../lib/mdx'

export default function Project({ source, frontmatter }) {
  const title = `${frontmatter.title} - Kev Farid`
  const description = frontmatter.desc
  const ogType = 'website'
  const ogImage = frontmatter.img

  return (
    <article className="padding-06rem">
      <Header
        title={title}
        description={description}
        ogType={ogType}
        ogImage={ogImage}
      />
      <MDXRemote {...source} />
    </article>
  )
}

export async function getStaticPaths() {
  const posts = await getFiles('projects')
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug('projects', params.slug)

  return {
    props: {
      source,
      frontmatter: {
        slug: params.slug,
        ...frontmatter,
      },
    },
  }
}

Project.propTypes = {
  source: PropTypes.object.isRequired,
  frontmatter: PropTypes.object.isRequired,
}
