const BlogCard = ({ image, title, date }) => {
  return (
    <div className="card">
      <img src={image} alt={title} style={{height:140, width:'100%', objectFit:'cover', borderRadius:8}} />
      <h3 style={{marginTop:12}}>{title}</h3>
      <span style={{color:'#6b7280'}}>{date}</span>
    </div>
  )
}

export default BlogCard
