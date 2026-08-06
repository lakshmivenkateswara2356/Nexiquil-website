import Hero from '../../components/Hero/Hero'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import ProductCard from '../../components/ProductCard/ProductCard'
import DirectorCard from '../../components/DirectorCard/DirectorCard'
import '../../pages/Home/Home.scss'

import Vasuimg from "../../assets/images/vasu.jpeg"
import Nar from "../../assets/images/nar.jpeg"
import Lokesh from "../../assets/images/lokesh.jpeg"

const services = [
  { title: 'Software Development', description: 'Build intelligent applications with modern architecture.' },
  { title: 'AI & Machine Learning', description: 'Create predictive models and automation at scale.' },
  { title: 'Cloud Solutions', description: 'Design secure cloud infrastructure for growth.' },
  { title: 'Web Development', description: 'Launch fast, accessible websites and portals.' },
  { title: 'Mobile App Development', description: 'Bring native-quality mobile experiences to users.' },
  { title: 'UI/UX Design', description: 'Craft beautiful interfaces that increase engagement.' },
]

const products = [
  { title: 'NexiDesk Pro', description: 'AI-driven support to resolve customer queries faster.' },
  { title: 'EdgeUI', description: 'Flexible UI toolkit for rapid product development.' },
  { title: 'GameQ11', description: 'Scalable backend services for multiplayer apps.' },
  { title: 'WorkGrid', description: 'Unified workflows for modern distributed teams.' },
  { title: 'AQAI', description: 'Analytics and automation for smarter decisions.' },
  { title: 'More Coming Soon', description: 'We’re expanding our product family with new innovations.' },
]

const directors = [
  { image: Lokesh, name: 'Lokesh', role: 'Founder & CEO' },
  { image: Nar, name: 'Narayana Rao', role: 'Co-Founder & CTO' },
  { image:  Vasuimg, name: 'Vasu', role: 'COO' },
]

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        

        <section className="home-section">
          <div className="section-heading">
            <h2>Our Services</h2>
            <p>End-to-end technology services designed to help your business adapt, grow, and succeed.</p>
          </div>
          <div className="section-grid">
            {services.map((service) => (
              <ServiceCard key={service.title} title={service.title} description={service.description} />
            ))}
          </div>
        </section>

        <section className="home-section">
          <div className="section-heading">
            <h2>Our Products</h2>
            <p>Innovative products built to solve real-world problems and create new digital experiences.</p>
          </div>
          <div className="section-grid">
            {products.map((product) => (
              <ProductCard key={product.title} title={product.title} description={product.description} />
            ))}
          </div>
        </section>

        <section className="home-section">
          <div className="section-heading">
            <h2>Company Statistics</h2>
          </div>
          <div className="stats-grid">
            <div className="card"><h3>50+</h3><p>Projects Delivered</p></div>
            <div className="card"><h3>25+</h3><p>Expert Developers</p></div>
            <div className="card"><h3>20+</h3><p>Happy Clients</p></div>
            <div className="card"><h3>5+</h3><p>Countries Served</p></div>
          </div>
        </section>

        {/* <section className="home-section directors-wrapper">
          <div className="section-heading">
            <h2>Our Directors</h2>
            <p>Leadership with vision, technical expertise, and a focus on delivering measurable impact.</p>
          </div>
          <div className="directors-grid">
            {directors.map((director) => (
              <DirectorCard style={{ marginBottom: '1px',width: '100%' }} key={director.name} {...director} />
            ))}
          </div>
        </section> */}

        <section className="home-section cta-panel">
          <h2>Start your digital transformation journey today</h2>
          <p>Partner with Nexiquill to bring intelligent solutions, modern products, and scalable experiences to life.</p>
          <button type="button">Contact Us</button>
        </section>
      </div>
    </div>
  )
}

export default Home
