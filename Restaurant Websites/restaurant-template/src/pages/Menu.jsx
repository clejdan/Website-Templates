import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MenuCategory from '../components/menu/MenuCategory';
import { DietaryKey } from '../components/menu/DietaryIcon';
import { AnimateOnScroll } from '../hooks/useScrollAnimation.jsx';
import menuData from '../data/menu.json';

export default function Menu() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const categories = menuData.categories.map(cat => ({
    ...cat,
    name: t(cat.nameKey),
  }));

  const scrollToCategory = (categoryId) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Category button component with hover state
  const CategoryButton = ({ category, isActive, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          padding: '0.5rem 1.25rem',
          borderRadius: '9999px',
          fontSize: '0.875rem',
          fontWeight: '500',
          whiteSpace: 'nowrap',
          transition: 'all 0.25s ease',
          backgroundColor: isActive ? '#8B4513' : (isHovered ? '#e5e5e5' : '#f5f5f5'),
          color: isActive ? 'white' : '#333',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {category.name}
      </button>
    );
  };

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=600&fit=crop)',
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
              {t('menu.title')}
            </h1>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div
        style={{
          position: 'sticky',
          top: '80px',
          zIndex: 40,
          backgroundColor: 'white',
          borderBottom: '1px solid #e5e5e5',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <nav
            style={{
              display: 'flex',
              overflowX: 'auto',
              padding: '1rem 0',
              gap: '0.5rem',
            }}
          >
            {categories.map((category) => (
              <CategoryButton
                key={category.id}
                category={category}
                isActive={activeCategory === category.id}
                onClick={() => scrollToCategory(category.id)}
              />
            ))}
          </nav>
        </div>
      </div>

      {/* Menu Content */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 1rem' }}>
        {/* Dietary Key */}
        <AnimateOnScroll animation="fadeUp">
          <div style={{ marginBottom: '3rem' }}>
            <DietaryKey />
          </div>
        </AnimateOnScroll>

        {/* Categories */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {categories.map((category, index) => {
            const items = menuData.items.filter(item => item.category === category.id);
            return (
              <AnimateOnScroll key={category.id} animation="fadeUp" delay={index * 0.1}>
                <MenuCategory
                  category={category}
                  items={items}
                />
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Download PDF */}
        <AnimateOnScroll animation="fadeUp">
          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <button
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#8B4513',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '500',
                transition: 'color 0.25s ease',
              }}
            >
              <svg style={{ width: '20px', height: '20px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t('menu.download_pdf')}
            </button>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
