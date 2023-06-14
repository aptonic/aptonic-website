import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllPostsForHome } from '@/lib/api'
import Blog from '@/components/blog/blog'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

export default function Index({ page, posts }) {
    const router = useRouter()

    if (!posts) {
      return <ErrorPage statusCode={404} />
    }``

    const pagesCount = Math.ceil(posts.edges.length / 10);
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

    if (!pages.includes(Number(router.query.page))) {
      return <ErrorPage statusCode={404} />
    }``

    return (
        <Blog posts={posts.edges} page={router.query.page} ></Blog>
    )
  }
  
  export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const posts = await getAllPostsForHome(preview)
    
    return {
      props: { posts, preview },
      revalidate: 10,
    }
  }
  
  export const getStaticPaths: GetStaticPaths = async () => {
    const allPosts = await getAllPostsForHome(false)
  
    const pagesCount = Math.ceil(allPosts.edges.length / 10);
    const pages = Array.from({ length: pagesCount }, (_, i) => `/blog/page/${i + 1}`);

    return {
      paths: pages || [],
      fallback: true,
    }
  }
  