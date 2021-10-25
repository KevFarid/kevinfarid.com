import PropTypes from "prop-types";

import { getAllFilesMetadata } from '../../lib/mdx'

import Card from '../../components/Card'

import { constants } from '../../config/constants'
const lang = constants.language

export default function Blog({ posts }) {
  return (
    <div>
      <div className="padding-06rem">
        <h1>{lang.pages.blog.title}</h1>
        <p className='text-justify'>{lang.pages.blog.description}</p>
        <div className="flexbox-space-around">
          {posts.map((post) => (
            <Card key={post.slug} {...post} type="blog" />
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata('blog')
  return {
    props: { posts },
  }
}

Blog.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
}
