export default function Team() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Strategy Director"
    },
    {
      name: "Michael Chen",
      role: "Digital Transformation Lead"
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Consultant"
    }
  ]

  return (
    <section id="team" className="team">
      <div className="container">
        <h2>Our Team</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-member">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}