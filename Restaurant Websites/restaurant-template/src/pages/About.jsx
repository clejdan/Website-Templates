import { useTranslation } from 'react-i18next';
import { AnimateOnScroll } from '../hooks/useScrollAnimation.jsx';

export default function About() {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: 'Maria Rodriguez',
      role: 'Executive Chef',
      image: 'https://images.unsplash.com/photo-1583394293214-28ez19d336b7?w=300&h=400&fit=crop',
    },
    {
      name: 'James Chen',
      role: 'Sous Chef',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=300&h=400&fit=crop',
    },
    {
      name: 'Sarah Johnson',
      role: 'Pastry Chef',
      image: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=300&h=400&fit=crop',
    },
  ];

  const awards = [
    { year: '2024', title: 'Best Fine Dining', source: 'City Food Awards' },
    { year: '2023', title: 'Chef of the Year', source: 'Culinary Excellence' },
    { year: '2022', title: 'Top 50 Restaurants', source: 'Food & Wine Magazine' },
  ];

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
            backgroundImage: 'url(https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920&h=800&fit=crop)',
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
              {t('about.title')}
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
                  {t('about.our_story')}
                </h2>
                <div style={{ color: '#666', lineHeight: '1.8' }}>
                  <p style={{ marginBottom: '1rem' }}>{t('about.our_story_text')}</p>
                  <p>
                    Every dish we serve is crafted with care, using time-honored techniques
                    and the freshest ingredients from local farms and purveyors. We believe
                    that great food brings people together, and we're honored to be part of
                    your most memorable moments.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeLeft">
              <div style={{ borderRadius: '0.75rem', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                <img
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop"
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
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&h=600&fit=crop"
                  alt="Chef Maria Rodriguez"
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
                  {t('about.meet_the_chef')}
                </h2>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#8B4513', marginBottom: '1rem' }}>
                  Chef Maria Rodriguez
                </h3>
                <p style={{ color: '#666', lineHeight: '1.8' }}>
                  {t('about.chef_bio')}
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
              {t('about.our_team')}
            </h2>
          </AnimateOnScroll>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
            }}
          >
            {teamMembers.map((member, index) => (
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
              {t('about.awards')}
            </h2>
          </AnimateOnScroll>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
            }}
          >
            {awards.map((award, index) => (
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
