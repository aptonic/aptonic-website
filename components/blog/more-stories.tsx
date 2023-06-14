import PostPreview from './post-preview'

import styles from './post-body.module.css'

export default function MoreStories({ posts }) {


  return (
    <>
    <section>
      <div className={`${styles.content}`}>
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
