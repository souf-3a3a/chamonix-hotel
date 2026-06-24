import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../i18n/LanguageContext.jsx';

gsap.registerPlugin(ScrollTrigger);

const Rooms = () => {
  const { t } = useLanguage();
  useEffect(() => {
    // Gallery animations
    gsap.fromTo('.gallery-item', {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.gallery-grid',
        start: 'top 80%',
        end: 'bottom 20%'
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="hero" id="home" style={{
        background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/assets/chamo_edited.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="hero-content">
          <p></p>
        </div>
      </section>

      {/* First Section */}
      <div className="first-section">
        <div className="section-intro">
          <h2>{t.rooms.introTitle}</h2>
          <p>{t.rooms.introText}</p>
        </div>

        {/* First subsection: Image on right, text on left */}
        <div className="section-content" id="first_sec">
          <div className="content-text">
            <h3>{t.rooms.singleTitle}</h3>
            <p>{t.rooms.singleText}</p>
            <Link to="/reserver" className="book-now-btn">
              {t.rooms.bookNow}
            </Link>
          </div>
          <div className="content-image">
            <img src="/assets/32.jpeg" alt="Chambre Single" />
          </div>
        </div>

        {/* Second subsection: Image on left, text on right */}
        <div className="section-content reverse">
          <div className="content-text">
            <h3>{t.rooms.doubleTitle}</h3>
            <p>{t.rooms.doubleText}</p>
            <Link to="/reserver" className="book-now-btn">
              {t.rooms.bookNow}
            </Link>
          </div>
          <div className="content-image">
            <img src="/assets/42.jpeg" alt="Chambre double" />
          </div>
        </div>

        {/* Third subsection: Image on right, text on left */}
        <div className="section-content">
          <div className="content-text">
            <h3>{t.rooms.suiteTitle}</h3>
            <p>{t.rooms.suiteText}</p>
            <Link to="/reserver" className="book-now-btn">
              {t.rooms.bookNow}
            </Link>
          </div>
          <div className="content-image">
            <img src="/assets/suite_sejour.jpg" alt="Chambre Suite" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Rooms;