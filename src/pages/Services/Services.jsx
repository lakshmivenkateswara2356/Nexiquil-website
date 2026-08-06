import ServiceCard from '../../components/ServiceCard/ServiceCard'

const Services = () => {
  const services = [
    { title: 'Software Development', description: 'Custom web and mobile applications' },
    { title: 'AI Solutions', description: 'Machine learning models and automation' },
    { title: 'Cloud & DevOps', description: 'Infrastructure and deployment' },
  ]

  return (
    <div className="container" style={{marginBottom: 199}}>
      <h1>Our Services</h1>
      <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:18, marginTop:18}}>
        {services.map((s) => (
          <ServiceCard key={s.title} title={s.title} description={s.description} />
        ))}
      </div>
    </div>
  )
}

export default Services
