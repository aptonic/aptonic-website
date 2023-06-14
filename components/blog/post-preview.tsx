import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  content,
  author,
  slug,
}) {
  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug font-display">
        <Link
          href={`/blog/${slug}`}
          className="!no-underline"
          dangerouslySetInnerHTML={{ __html: title }}
        ></Link>
      </h3>
      <div className="text-base mb-10">
        <Date dateString={date} />
      </div>
      <div
        className="text-lg leading-relaxed mb-4 font-light"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
