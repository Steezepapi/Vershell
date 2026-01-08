export default function Services() {
  const services = [
    {
      title: "Strategy Consulting",
      description: "Develop winning strategies for sustainable growth"
    },
    {
      title: "Digital Transformation",
      description: "Modernize operations with cutting-edge technology"
    },
    {
      title: "Process Optimization",
      description: "Streamline workflows for maximum efficiency"
    },
    {
      title: "Market Analysis",
      description: "Data-driven insights for informed decisions"
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}