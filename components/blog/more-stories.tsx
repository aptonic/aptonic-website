import PostPreview from './post-preview'

import styles from './post-body.module.css'

export default function MoreStories({ posts }) {


  return (
    <>
    <section>
      <div className={`grid grid-cols-1 md:grid-cols-1 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32 ${styles.content}`}>
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            date={node.date}
            author={node.author}
            slug={node.slug}
            content={node.content}
          />
        ))}
      </div>
    </section>


    </>
  )
}
