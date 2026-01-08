export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Transform Your Business</h1>
        <p>Strategic consulting solutions that drive growth and innovation</p>
        <button className="cta-btn" onClick={scrollToContact}>
          Get Started
        </button>
      </div>
    </section>
  )
}