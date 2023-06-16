import PostPreview from './post-preview'

import styles from './post-body.module.css'

export default function MoreStories({ posts }) {


  return (
    <>
    <section>
      <div className={`${styles.content} -mt-40`}>
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            date={node.date}
            slug={node.slug}
            content={node.content}
          />
        ))}
      </div>
    </section>


    </>
  )
}
