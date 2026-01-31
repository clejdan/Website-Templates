import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/ui/Button';
import { Input, Select, Textarea } from '../components/ui/Input';
import { AnimateOnScroll } from '../hooks/useScrollAnimation.jsx';

export default function Reservations() {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    partySize: '',
    name: '',
    email: '',
    phone: '',
    specialRequests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const timeSlots = [
    { value: '17:00', label: '5:00 PM' },
    { value: '17:30', label: '5:30 PM' },
    { value: '18:00', label: '6:00 PM' },
    { value: '18:30', label: '6:30 PM' },
    { value: '19:00', label: '7:00 PM' },
    { value: '19:30', label: '7:30 PM' },
    { value: '20:00', label: '8:00 PM' },
    { value: '20:30', label: '8:30 PM' },
    { value: '21:00', label: '9:00 PM' },
  ];

  const partySizes = Array.from({ length: 12 }, (_, i) => ({
    value: String(i + 1),
    label: `${i + 1} ${i === 0 ? t('reservations.guest') : t('reservations.guests')}`,
  }));

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  if (isSubmitted) {
    return (
      <div
        style={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 1rem',
        }}
      >
        <AnimateOnScroll animation="fadeUp">
          <div style={{ textAlign: 'center', maxWidth: '28rem' }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                margin: '0 auto 1.5rem',
                borderRadius: '50%',
                backgroundColor: 'rgba(22, 163, 74, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg
                style={{ width: '40px', height: '40px', color: '#16A34A' }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2
              className="font-heading"
              style={{
                fontSize: '1.875rem',
                fontWeight: 'bold',
                color: '#2C3E50',
                marginBottom: '1rem',
              }}
            >
              {t('reservations.confirmation_title')}
            </h2>
            <p style={{ color: '#666', marginBottom: '2rem' }}>
              {t('reservations.confirmation_text')}
            </p>
            <div
              style={{
                backgroundColor: '#F5F3EE',
                borderRadius: '0.75rem',
                padding: '1.5rem',
                textAlign: 'left',
                marginBottom: '2rem',
              }}
            >
              <h3 style={{ fontWeight: '600', color: '#2C3E50', marginBottom: '1rem' }}>
                Reservation Details
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
                <p><span style={{ color: '#999' }}>Name:</span> {formData.name}</p>
                <p><span style={{ color: '#999' }}>Date:</span> {formData.date}</p>
                <p><span style={{ color: '#999' }}>Time:</span> {timeSlots.find(t => t.value === formData.time)?.label}</p>
                <p><span style={{ color: '#999' }}>Party Size:</span> {formData.partySize} {formData.partySize === '1' ? 'guest' : 'guests'}</p>
              </div>
            </div>
            <Button to="/">Back to Home</Button>
          </div>
        </AnimateOnScroll>
      </div>
    );
  }

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
            backgroundImage: 'url(https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1920&h=600&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)' }} />
        </div>
        <div style={{ position: 'relative', textAlign: 'center', padding: '0 1rem' }}>
          <AnimateOnScroll animation="fadeUp">
            <h1
              className="font-heading"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '1rem',
              }}
            >
              {t('reservations.title')}
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)' }}>
              {t('reservations.subtitle')}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Reservation Form */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FAF9F6' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
            }}
          >
            {/* Form */}
            <div style={{ gridColumn: 'span 2' }}>
              <AnimateOnScroll animation="fadeRight">
                <form
                  onSubmit={handleSubmit}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '1rem',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                    padding: '2rem',
                  }}
                >
                  {/* Date, Time, Party Size Row */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                      gap: '1.5rem',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <Input
                      label={t('reservations.date')}
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={minDate}
                      required
                    />
                    <Select
                      label={t('reservations.time')}
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      options={timeSlots}
                      placeholder="Select time"
                      required
                    />
                    <Select
                      label={t('reservations.party_size')}
                      name="partySize"
                      value={formData.partySize}
                      onChange={handleChange}
                      options={partySizes}
                      placeholder="Select"
                      required
                    />
                  </div>

                  {/* Name, Email Row */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '1.5rem',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <Input
                      label={t('reservations.name')}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                    <Input
                      label={t('reservations.email')}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <Input
                      label={t('reservations.phone')}
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>

                  {/* Special Requests */}
                  <div style={{ marginBottom: '2rem' }}>
                    <Textarea
                      label={t('reservations.special_requests')}
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      placeholder={t('reservations.special_requests_placeholder')}
                      rows={3}
                    />
                  </div>

                  <Button type="submit" size="lg" fullWidth>
                    {t('reservations.submit')}
                  </Button>
                </form>
              </AnimateOnScroll>
            </div>

            {/* Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Hours */}
              <AnimateOnScroll animation="fadeLeft" delay={0.1}>
                <div
                  style={{
                    backgroundColor: '#F5F3EE',
                    borderRadius: '1rem',
                    padding: '1.5rem',
                  }}
                >
                  <h3
                    className="font-heading"
                    style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: '#2C3E50',
                      marginBottom: '1rem',
                    }}
                  >
                    {t('home.hours_title')}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: '#666' }}>
                    <p>{t('home.hours_weekday')}</p>
                    <p>{t('home.hours_weekend')}</p>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Large Party */}
              <AnimateOnScroll animation="fadeLeft" delay={0.2}>
                <div
                  style={{
                    backgroundColor: 'rgba(212, 175, 55, 0.1)',
                    borderRadius: '1rem',
                    padding: '1.5rem',
                  }}
                >
                  <h3
                    className="font-heading"
                    style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: '#2C3E50',
                      marginBottom: '0.5rem',
                    }}
                  >
                    10+ Guests?
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '1rem' }}>
                    {t('reservations.large_party')}
                  </p>
                  <a
                    href="tel:5551234567"
                    style={{
                      color: '#8B4513',
                      fontWeight: '600',
                      textDecoration: 'none',
                    }}
                  >
                    (555) 123-4567
                  </a>
                </div>
              </AnimateOnScroll>

              {/* Cancellation Policy */}
              <AnimateOnScroll animation="fadeLeft" delay={0.3}>
                <div
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '1rem',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                    padding: '1.5rem',
                  }}
                >
                  <h3
                    className="font-heading"
                    style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: '#2C3E50',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {t('reservations.cancellation_policy')}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#666' }}>
                    {t('reservations.cancellation_text')}
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
