import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Hide sticky button on reservations page
  const showStickyButton = pathname !== '/reservations';

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-1 ${showStickyButton ? 'pb-20 md:pb-0' : ''}`}>
        {children}
      </main>
      <Footer />

      {/* Sticky Mobile Reservation Button */}
      {showStickyButton && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white to-transparent md:hidden z-50">
          <Link
            to="/reservations"
            className="flex items-center justify-center gap-2 w-full py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl shadow-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {t('home.reserve_button')}
          </Link>
        </div>
      )}
    </div>
  );
}
