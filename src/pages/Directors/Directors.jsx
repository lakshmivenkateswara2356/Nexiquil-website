import DirectorCard from '../../components/DirectorCard/DirectorCard'

const Directors = () => {
  const directors = [
    { image: '/images/team1.jpg', name: 'Lokesh Yedida', role: 'Founder & CEO' },
    { image: '/images/team2.jpg', name: 'Venkata Sai Krishna', role: 'Co-Founder & CTO' },
    { image: '/images/team3.jpg', name: 'Chandu Yedida', role: 'COO' },
  ]

  return (
    <div className="container">
      <h1>Our Directors</h1>
      <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:18, marginTop:18}}>
        {directors.map((d) => (
          <DirectorCard key={d.name} {...d} />
        ))}
      </div>
    </div>
  )
}

export default Directors
