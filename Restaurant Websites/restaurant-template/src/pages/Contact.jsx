import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/ui/Button';
import { Input, Textarea } from '../components/ui/Input';
import { AnimateOnScroll } from '../hooks/useScrollAnimation.jsx';

export default function Contact() {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  // Contact info item with hover effect
  const ContactItem = ({ icon, title, children, href }) => {
    const [isHovered, setIsHovered] = useState(false);

    const content = (
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'flex-start',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          style={{
            flexShrink: 0,
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: isHovered ? 'rgba(139, 69, 19, 0.15)' : 'rgba(139, 69, 19, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.25s ease',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        >
          <svg
            style={{ width: '24px', height: '24px', color: '#8B4513' }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
          </svg>
        </div>
        <div>
          <h3 style={{ fontWeight: '600', color: '#2C3E50', marginBottom: '0.25rem' }}>{title}</h3>
          <div style={{ color: href ? '#8B4513' : '#666' }}>{children}</div>
        </div>
      </div>
    );

    if (href) {
      return (
        <a href={href} style={{ textDecoration: 'none', display: 'block' }}>
          {content}
        </a>
      );
    }

    return content;
  };

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          height: '320px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&h=600&fit=crop)',
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
              {t('contact.title')}
            </h1>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Contact Content */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FAF9F6' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
            }}
          >
            {/* Contact Info */}
            <div>
              <AnimateOnScroll animation="fadeRight">
                <h2
                  className="font-heading"
                  style={{
                    fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
                    fontWeight: 'bold',
                    color: '#2C3E50',
                    marginBottom: '2rem',
                  }}
                >
                  {t('contact.get_in_touch')}
                </h2>
              </AnimateOnScroll>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {/* Address */}
                <AnimateOnScroll animation="fadeRight" delay={0.1}>
                  <ContactItem
                    icon="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    title={t('contact.address')}
                  >
                    <p style={{ whiteSpace: 'pre-line' }}>{t('contact.address_value')}</p>
                  </ContactItem>
                </AnimateOnScroll>

                {/* Phone */}
                <AnimateOnScroll animation="fadeRight" delay={0.2}>
                  <ContactItem
                    icon="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    title={t('contact.phone')}
                    href="tel:5551234567"
                  >
                    {t('contact.phone_value')}
                  </ContactItem>
                </AnimateOnScroll>

                {/* Email */}
                <AnimateOnScroll animation="fadeRight" delay={0.3}>
                  <ContactItem
                    icon="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    title={t('contact.email')}
                    href="mailto:hello@restaurant.com"
                  >
                    {t('contact.email_value')}
                  </ContactItem>
                </AnimateOnScroll>

                {/* Parking */}
                <AnimateOnScroll animation="fadeRight" delay={0.4}>
                  <ContactItem
                    icon="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    title={t('contact.parking')}
                  >
                    <p>{t('contact.parking_text')}</p>
                  </ContactItem>
                </AnimateOnScroll>
              </div>

              {/* Map Placeholder */}
              <AnimateOnScroll animation="fadeUp" delay={0.5}>
                <div
                  style={{
                    marginTop: '2.5rem',
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                    height: '256px',
                    backgroundColor: '#e5e5e5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{ textAlign: 'center', color: '#999' }}>
                    <svg
                      style={{ width: '48px', height: '48px', margin: '0 auto 0.5rem' }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                    <p>Map Placeholder</p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: '#8B4513',
                        fontSize: '0.875rem',
                        marginTop: '0.5rem',
                        display: 'inline-block',
                        textDecoration: 'none',
                      }}
                    >
                      {t('contact.get_directions')} →
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Contact Form */}
            <div>
              <AnimateOnScroll animation="fadeLeft">
                <h2
                  className="font-heading"
                  style={{
                    fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
                    fontWeight: 'bold',
                    color: '#2C3E50',
                    marginBottom: '2rem',
                  }}
                >
                  {t('contact.send_message')}
                </h2>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fadeLeft" delay={0.2}>
                {isSubmitted ? (
                  <div
                    style={{
                      backgroundColor: 'rgba(22, 163, 74, 0.1)',
                      borderRadius: '1rem',
                      padding: '2rem',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        margin: '0 auto 1rem',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(22, 163, 74, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg
                        style={{ width: '32px', height: '32px', color: '#16A34A' }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3
                      className="font-heading"
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: '600',
                        color: '#2C3E50',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {t('contact.message_sent')}
                    </h3>
                    <p style={{ color: '#666' }}>
                      {t('contact.message_sent_text')}
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '1rem',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                      padding: '2rem',
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      <Input
                        label={t('contact.your_name')}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                      <Input
                        label={t('contact.your_email')}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                      <Textarea
                        label={t('contact.message')}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t('contact.message_placeholder')}
                        rows={5}
                        required
                      />
                      <Button type="submit" size="lg" fullWidth>
                        {t('contact.send')}
                      </Button>
                    </div>
                  </form>
                )}
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
