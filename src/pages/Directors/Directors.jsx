import DirectorCard from '../../components/DirectorCard/DirectorCard'
import Vasuimg from "../../assets/images/vasu.jpeg"
import Nar from "../../assets/images/nar.jpeg"
import Lokesh from "../../assets/images/lokesh.jpeg"

const Directors = () => {
  const directors = [
    { image: Lokesh, name: 'Lokesh Yedida', role: 'Founder & CEO' },
    { image: Nar, name: 'Venkata Sai Krishna', role: 'Co-Founder & CTO' },
    { image: Vasuimg, name: 'Chandu Yedida', role: 'COO' },
  ]

  return (
    <div className="container" style={{marginBottom: 39}}>
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
