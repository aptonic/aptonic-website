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
        <meta name="description" content="Aptonic create awesome apps for the Mac. We make Dropzone, an app which makes it faster and easier to move and copy files, launch applications, upload to many different services, and more."></meta>
        <meta name="keywords" content="Macintosh,macOS,Mac,FTP,SFTP,Amazon S3,S3,Stash,Shorten URLs,Software,Dropzone,Dropzone 4,Productivity,Upload,Share,Drop Bar"></meta>
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
