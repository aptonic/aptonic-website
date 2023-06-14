import Head from "next/head";
import Container from "../../components/blog/container";
import MoreStories from "../../components/blog/more-stories";
import { paginate } from "../../helpers/paginate";
import Pagination from "../../components/blog/Pagination";
import { CMS_NAME } from "../../lib/constants";

export default function Blog({ posts, page }) {
  const pageSize = 10;

  const paginatedPosts = paginate(posts, page, pageSize);

  return (
    <>
      <Head>
        <title>{`${CMS_NAME}`}</title>
      </Head>
      <Container>
        {paginatedPosts.length > 0 && <MoreStories posts={paginatedPosts} />}
      </Container>
      <Pagination
        items={posts.length}
        currentPage={page}
        pageSize={pageSize}
      />
    </>
  );
}
