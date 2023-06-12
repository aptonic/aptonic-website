export default function PostTitle({ children }) {
  return (
    <h1
      className="mt-20 text-6xl md:text-2xl lg:text-2xl font-bold tracking-tighter mb-12 mx-auto max-w-2xl"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
