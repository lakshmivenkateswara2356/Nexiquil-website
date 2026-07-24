
import './Hero.scss'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <span>Innovating Intelligence.</span>
        <h1>
          Building Tomorrow.
        </h1>
        <p>
          Nexiquill builds intelligent software, AI-powered solutions, and
          innovative products that empower businesses to transform and scale.
        </p>

        <div className="hero__buttons">
          <button type="button">Explore Products</button>
          <button type="button">Get in Touch</button>
        </div>

        <div className="hero__stats">
          <div>
            <strong>50+</strong>
            <span>Projects Delivered</span>
          </div>
          <div>
            <strong>25+</strong>
            <span>Expert Developers</span>
          </div>
          <div>
            <strong>20+</strong>
            <span>Happy Clients</span>
          </div>
          <div>
            <strong>5+</strong>
            <span>Countries Served</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
