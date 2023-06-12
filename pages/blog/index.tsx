import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../../components/blog/container'
import MoreStories from '../../components/blog/more-stories'
import HeroPost from '../../components/blog/hero-post'
import Intro from '../../components/blog/intro'
import Layout  from '@/components/blog/layout'

import { getAllPostsForHome } from '../../lib/api'
import { CMS_NAME } from '../../lib/constants'

export default function Index({ allPosts: { edges }, preview }) {

  return (
      <>
      <Head>
        <title>{`${CMS_NAME}`}</title>
      </Head>
      <Container>
        <Intro />
        {edges.length > 0 && <MoreStories posts={edges} />}
      </Container>
      </>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)
  
  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}
