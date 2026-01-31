import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { AnimateOnScroll } from '../hooks/useScrollAnimation.jsx';
import menuData from '../data/menu.json';

export default function Home() {
  const { t } = useTranslation();

  // Get featured dishes (chef's picks)
  const featuredDishes = menuData.items
    .filter(item => item.dietary.includes('chefsPick'))
    .slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center"
        style={{ height: '80vh', minHeight: '600px' }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} />
        </div>

        <div
          className="relative"
          style={{
            width: '100%',
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 1rem',
            textAlign: 'center'
          }}
        >
          <AnimateOnScroll animation="fadeUp" duration={0.8}>
            <h1
              className="font-heading font-bold text-white"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}
            >
              {t('home.hero_title')}
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeUp" duration={0.8} delay={0.2}>
            <p
              className="text-gray-200"
              style={{
                fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                marginBottom: '2rem',
                maxWidth: '42rem',
                marginLeft: 'auto',
                marginRight: 'auto',
                textAlign: 'center'
              }}
            >
              {t('home.hero_subtitle')}
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeUp" duration={0.8} delay={0.4}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <Button to="/reservations" size="lg">
                {t('home.reserve_button')}
              </Button>
              <Button to="/menu" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary">
                {t('home.view_menu')}
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="bg-white" style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <AnimateOnScroll animation="fadeUp">
            <h2
              className="font-heading font-bold text-secondary"
              style={{ fontSize: 'clamp(1.875rem, 4vw, 2.5rem)', textAlign: 'center', marginBottom: '3rem' }}
            >
              {t('home.featured_dishes')}
            </h2>
          </AnimateOnScroll>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}
          >
            {featuredDishes.map((dish, index) => (
              <AnimateOnScroll key={dish.id} animation="fadeUp" delay={index * 0.15}>
                <Card image={dish.image} imageAlt={dish.name}>
                  <h3 className="font-heading font-semibold text-secondary" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                    {dish.name}
                  </h3>
                  <p className="text-text-light" style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>
                    {dish.description}
                  </p>
                  <p className="text-primary font-semibold">${dish.price.toFixed(2)}</p>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll animation="fadeUp" delay={0.4}>
            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <Button to="/menu" variant="outline">
                {t('common.view_all')} {t('nav.menu')}
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Our Story Preview */}
      <section className="bg-background" style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              alignItems: 'center'
            }}
          >
            <AnimateOnScroll animation="fadeRight">
              <div>
                <h2
                  className="font-heading font-bold text-secondary"
                  style={{ fontSize: 'clamp(1.875rem, 4vw, 2.5rem)', marginBottom: '1.5rem' }}
                >
                  {t('home.our_story')}
                </h2>
                <p className="text-text-light" style={{ lineHeight: '1.75', marginBottom: '1.5rem' }}>
                  {t('about.our_story_text')}
                </p>
                <Button to="/about" variant="outline">
                  {t('common.learn_more')}
                </Button>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeLeft">
              <div style={{ borderRadius: '0.75rem', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop"
                  alt="Restaurant interior"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="bg-secondary" style={{ padding: '4rem 0', color: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '3rem'
            }}
          >
            {/* Hours */}
            <AnimateOnScroll animation="fadeUp">
              <div style={{ textAlign: 'center' }}>
                <h2
                  className="font-heading font-bold"
                  style={{ fontSize: '1.875rem', marginBottom: '1.5rem', color: 'white' }}
                >
                  {t('home.hours_title')}
                </h2>
                <div style={{ color: '#d1d5db' }}>
                  <p style={{ marginBottom: '0.5rem' }}>{t('home.hours_weekday')}</p>
                  <p>{t('home.hours_weekend')}</p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Location */}
            <AnimateOnScroll animation="fadeUp" delay={0.15}>
              <div style={{ textAlign: 'center' }}>
                <h2
                  className="font-heading font-bold"
                  style={{ fontSize: '1.875rem', marginBottom: '1.5rem', color: 'white' }}
                >
                  {t('home.visit_us')}
                </h2>
                <div style={{ color: '#d1d5db', marginBottom: '1.5rem' }}>
                  <p>123 Restaurant Street</p>
                  <p>New York, NY 10001</p>
                  <p style={{ marginTop: '0.5rem' }}>(555) 123-4567</p>
                </div>
                <Button to="/contact" variant="accent">
                  {t('contact.get_directions')}
                </Button>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
