export default function PostTitle({ children }) {
  return (
    <h1
      className="text-2xl mb-3 leading-snug font-display"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
