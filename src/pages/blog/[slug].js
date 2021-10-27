import PropTypes from 'prop-types'
import { MDXRemote } from 'next-mdx-remote'

import Header from 'components/Header'

import { getFileBySlug, getFiles } from '../../lib/mdx'

export default function Post({ source, frontmatter }) {
  const title = `${frontmatter.title} - Kev Farid`
  const description = frontmatter.desc
  const ogType = 'article'
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
  const posts = await getFiles('blog')
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
  const { source, frontmatter } = await getFileBySlug('blog', params.slug)

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

Post.propTypes = {
  source: PropTypes.object.isRequired,
  frontmatter: PropTypes.object.isRequired,
}
