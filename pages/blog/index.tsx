import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../../components/blog/container'
import MoreStories from '../../components/blog/more-stories'
import HeroPost from '../../components/blog/hero-post'
import Intro from '../../components/blog/intro'
import Layout  from '@/components/blog/layout'
import { useState, useEffect } from "react";
import { paginate } from "../../helpers/paginate";
import Pagination from "../../components/blog/Pagination";

import { getAllPostsForHome } from '../../lib/api'
import { CMS_NAME } from '../../lib/constants'

export default function Index({ allPosts: { edges }, preview }) {

  const pageSize = 10;

  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  const paginatedPosts = paginate(edges, currentPage, pageSize);


  return (
      <>
      <Head>
        <title>{`${CMS_NAME}`}</title>
      </Head>
      <Container>
        {paginatedPosts.length > 0 && <MoreStories posts={paginatedPosts} />}
      </Container>
      <Pagination
      items={edges.length} // 100
      currentPage={currentPage} // 1
      pageSize={pageSize} // 10
      onPageChange={onPageChange}
    />
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
