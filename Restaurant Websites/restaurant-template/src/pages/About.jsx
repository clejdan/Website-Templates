import { AnimateOnScroll } from '../hooks/useScrollAnimation.jsx';
import aboutContent from '../content/about.json';

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          height: '350px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${aboutContent.hero.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)' }} />
        </div>
        <div style={{ position: 'relative', textAlign: 'center' }}>
          <AnimateOnScroll animation="fadeUp">
            <h1
              className="font-heading"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              {aboutContent.hero.title}
            </h1>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ padding: '5rem 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            <AnimateOnScroll animation="fadeRight">
              <div>
                <h2
                  className="font-heading"
                  style={{
                    fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
                    fontWeight: 'bold',
                    color: '#2C3E50',
                    marginBottom: '1.5rem',
                  }}
                >
                  {aboutContent.story.title}
                </h2>
                <div style={{ color: '#666', lineHeight: '1.8' }}>
                  {aboutContent.story.paragraphs.map((paragraph, index) => (
                    <p key={index} style={{ marginBottom: index < aboutContent.story.paragraphs.length - 1 ? '1rem' : 0 }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeLeft">
              <div style={{ borderRadius: '0.75rem', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                <img
                  src={aboutContent.story.image}
                  alt="Restaurant story"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Meet the Chef */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FAF9F6' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            <AnimateOnScroll animation="fadeRight">
              <div style={{ borderRadius: '0.75rem', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                <img
                  src={aboutContent.chef.image}
                  alt={aboutContent.chef.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeLeft">
              <div>
                <h2
                  className="font-heading"
                  style={{
                    fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
                    fontWeight: 'bold',
                    color: '#2C3E50',
                    marginBottom: '1.5rem',
                  }}
                >
                  {aboutContent.chef.title}
                </h2>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#8B4513', marginBottom: '1rem' }}>
                  {aboutContent.chef.name}
                </h3>
                <p style={{ color: '#666', lineHeight: '1.8' }}>
                  {aboutContent.chef.bio}
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section style={{ padding: '5rem 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <AnimateOnScroll animation="fadeUp">
            <h2
              className="font-heading"
              style={{
                fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
                fontWeight: 'bold',
                color: '#2C3E50',
                textAlign: 'center',
                marginBottom: '3rem',
              }}
            >
              {aboutContent.team.title}
            </h2>
          </AnimateOnScroll>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
            }}
          >
            {aboutContent.team.members.map((member, index) => (
              <AnimateOnScroll key={member.name} animation="fadeUp" delay={index * 0.15}>
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      width: '180px',
                      height: '180px',
                      margin: '0 auto 1rem',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                    }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <h3
                    className="font-heading"
                    style={{ fontSize: '1.25rem', fontWeight: '600', color: '#2C3E50' }}
                  >
                    {member.name}
                  </h3>
                  <p style={{ color: '#666', fontSize: '0.9rem' }}>{member.role}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section style={{ padding: '5rem 0', backgroundColor: '#2C3E50', color: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <AnimateOnScroll animation="fadeUp">
            <h2
              className="font-heading"
              style={{
                fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: '3rem',
                color: 'white',
              }}
            >
              {aboutContent.awards.title}
            </h2>
          </AnimateOnScroll>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
            }}
          >
            {aboutContent.awards.items.map((award, index) => (
              <AnimateOnScroll key={award.title} animation="fadeUp" delay={index * 0.15}>
                <div
                  style={{
                    textAlign: 'center',
                    padding: '2rem',
                    borderRadius: '0.75rem',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🏆</div>
                  <p style={{ color: '#D4AF37', fontWeight: '600' }}>{award.year}</p>
                  <h3
                    className="font-heading"
                    style={{ fontSize: '1.25rem', fontWeight: '600', marginTop: '0.5rem', color: 'white' }}
                  >
                    {award.title}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                    {award.source}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
