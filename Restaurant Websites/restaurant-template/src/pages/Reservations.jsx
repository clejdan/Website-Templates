import { useState } from 'react';
import Button from '../components/ui/Button';
import { Input, Select, Textarea } from '../components/ui/Input';
import { AnimateOnScroll } from '../hooks/useScrollAnimation.jsx';
import reservationsContent from '../content/reservations.json';
import site from '../content/site.json';
import homeContent from '../content/home.json';

export default function Reservations() {
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

  const partySizes = Array.from({ length: reservationsContent.maxPartySize }, (_, i) => ({
    value: String(i + 1),
    label: `${i + 1} ${i === 0 ? reservationsContent.form.guestSingular : reservationsContent.form.guestPlural}`,
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
              {reservationsContent.confirmation.title}
            </h2>
            <p style={{ color: '#666', marginBottom: '2rem' }}>
              {reservationsContent.confirmation.text}
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
                {reservationsContent.confirmation.detailsTitle}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
                <p><span style={{ color: '#999' }}>Name:</span> {formData.name}</p>
                <p><span style={{ color: '#999' }}>Date:</span> {formData.date}</p>
                <p><span style={{ color: '#999' }}>Time:</span> {reservationsContent.timeSlots.find(t => t.value === formData.time)?.label}</p>
                <p><span style={{ color: '#999' }}>Party Size:</span> {formData.partySize} {formData.partySize === '1' ? reservationsContent.form.guestSingular : reservationsContent.form.guestPlural}</p>
              </div>
            </div>
            <Button to="/">{site.cta.backToHome}</Button>
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
            backgroundImage: `url(${reservationsContent.hero.image})`,
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
              {reservationsContent.hero.title}
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)' }}>
              {reservationsContent.hero.subtitle}
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
                      label={reservationsContent.form.dateLabel}
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={minDate}
                      required
                    />
                    <Select
                      label={reservationsContent.form.timeLabel}
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      options={reservationsContent.timeSlots}
                      placeholder={reservationsContent.form.timePlaceholder}
                      required
                    />
                    <Select
                      label={reservationsContent.form.partySizeLabel}
                      name="partySize"
                      value={formData.partySize}
                      onChange={handleChange}
                      options={partySizes}
                      placeholder={reservationsContent.form.partySizePlaceholder}
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
                      label={reservationsContent.form.nameLabel}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={reservationsContent.form.namePlaceholder}
                      required
                    />
                    <Input
                      label={reservationsContent.form.emailLabel}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={reservationsContent.form.emailPlaceholder}
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <Input
                      label={reservationsContent.form.phoneLabel}
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={reservationsContent.form.phonePlaceholder}
                      required
                    />
                  </div>

                  {/* Special Requests */}
                  <div style={{ marginBottom: '2rem' }}>
                    <Textarea
                      label={reservationsContent.form.specialRequestsLabel}
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      placeholder={reservationsContent.form.specialRequestsPlaceholder}
                      rows={3}
                    />
                  </div>

                  <Button type="submit" size="lg" fullWidth>
                    {reservationsContent.form.submitButton}
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
                    {homeContent.hours.title}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: '#666' }}>
                    <p>{site.hours.weekday}</p>
                    <p>{site.hours.weekend}</p>
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
                    {reservationsContent.largeParty.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '1rem' }}>
                    {reservationsContent.largeParty.text}
                  </p>
                  <a
                    href={`tel:${site.phoneRaw}`}
                    style={{
                      color: '#8B4513',
                      fontWeight: '600',
                      textDecoration: 'none',
                    }}
                  >
                    {site.phone}
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
                    {reservationsContent.cancellation.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#666' }}>
                    {reservationsContent.cancellation.text}
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
