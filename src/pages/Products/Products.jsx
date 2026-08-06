import ProductCard from '../../components/ProductCard/ProductCard'

const Products = () => {
  const products = [
    { title: 'NexiDesk Pro', description: 'AI customer support' },
    { title: 'EdgeUI', description: 'Design system and UI kit' },
    { title: 'GameQ11', description: 'Realtime game backend' },
  ]

  return (
    <div className="container" style={{marginBottom: 199}}>
      <h1>Our Products</h1>
      <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:18, marginTop:18}}>
        {products.map((p) => (
          <ProductCard key={p.title} title={p.title} description={p.description} />
        ))}
      </div>
    </div>
  )
}

export default Products
