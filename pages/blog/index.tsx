import Blog from '@/components/blog/blog'
import { GetStaticProps } from 'next'
import { getAllPostsForHome } from '../../lib/api'

export default function Index({ posts }) {

  return (
      <Blog posts={posts.edges} page={1}></Blog>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const posts = await getAllPostsForHome(preview)
  
  return {
    props: {posts, preview },
  }
}
