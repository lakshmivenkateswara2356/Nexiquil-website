import BlogCard from '../../components/BlogCard/BlogCard'

const Blog = () => {
  const posts = [
    { image: '/images/blog1.jpg', title: 'The Future of AI in Business', date: 'May 12, 2026' },
    { image: '/images/blog2.jpg', title: 'Web Development Trends', date: 'Apr 20, 2026' },
  ]

  return (
    <div className="container">
      <h1>Blog</h1>
      <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:18, marginTop:18}}>
        {posts.map((p) => (
          <BlogCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  )
}

export default Blog
