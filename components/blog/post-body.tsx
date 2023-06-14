import styles from './post-body.module.css'

export default function PostBody({ content }) {
  return (
    <div className="font-light mb-20">
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
