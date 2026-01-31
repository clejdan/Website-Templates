import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';

// Custom NavLink with animated underline
function AnimatedNavLink({ to, children }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <NavLink to={to}>
      {({ isActive }) => {
        const linkStyle = {
          fontSize: '0.8rem',
          fontWeight: '500',
          textDecoration: 'none',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: isActive ? '#8B4513' : (isHovered ? '#8B4513' : '#666'),
          position: 'relative',
          paddingBottom: '4px',
          transition: 'color 0.25s ease',
          display: 'inline-block',
        };

        const underlineStyle = {
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          height: '2px',
          backgroundColor: '#8B4513',
          width: isHovered || isActive ? '100%' : '0%',
          transition: 'width 0.3s ease',
        };

        return (
          <span
            style={linkStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {children}
            <span style={underlineStyle} />
          </span>
        );
      }}
    </NavLink>
  );
}

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/menu', label: t('nav.menu') },
    { to: '/about', label: t('nav.about') },
    { to: '/reservations', label: t('nav.reservations') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsLangOpen(false);
  };

  return (
    <header style={{ backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
          {/* Logo */}
          <Link to="/" style={{ flexShrink: 0 }}>
            <span className="font-heading" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2C3E50' }}>
              Restaurant
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            {navLinks.map((link) => (
              <AnimatedNavLink key={link.to} to={link.to}>
                {link.label}
              </AnimatedNavLink>
            ))}
          </nav>

          {/* Right side: Language + CTA */}
          <div className="hidden md:flex" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            {/* Language Selector */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#666', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <span>{currentLang.flag}</span>
                <span>{currentLang.code.toUpperCase()}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full px-4 py-2 text-left text-sm flex items-center gap-2 hover:bg-background-alt ${
                        i18n.language === lang.code ? 'text-primary font-medium' : 'text-text'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Reserve Button */}
            <Button to="/reservations" size="sm">
              {t('home.reserve_button')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-text-light hover:text-primary hover:bg-background-alt transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-text hover:bg-background-alt'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Mobile Language Selector */}
            <div className="px-4 py-3 border-t border-gray-100 mt-2">
              <p className="text-sm text-text-muted mb-2">{t('nav.language')}</p>
              <div className="flex gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`px-3 py-2 rounded-lg text-sm flex items-center gap-1 ${
                      i18n.language === lang.code
                        ? 'bg-primary text-white'
                        : 'bg-background-alt text-text hover:bg-gray-200'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.code.toUpperCase()}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Reserve Button */}
            <div className="px-4 pt-2">
              <Button to="/reservations" fullWidth onClick={() => setIsMenuOpen(false)}>
                {t('home.reserve_button')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
