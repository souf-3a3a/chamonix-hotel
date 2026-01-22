import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Rooms = () => {
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
          <h2>Confort, charme et rapport qualité-prix pour tous les séjours</h2>
          <p>
            Que vous voyagiez seul, en couple, en famille ou entre amis, nous avons un 
            espace qui vous conviendra parfaitement. Chaque chambre comprend petit-déjeuner 
            quotidien, Wi-Fi gratuit et accès à notre restaurant et salon.
          </p>
        </div>
        
        {/* First subsection: Image on right, text on left */}
        <div className="section-content" id="first_sec">
          <div className="content-text">
            <h3>Chambre Single</h3>
            <p>
              Chambre Simple – Simple, confortable et abordable — idéale pour les voyageurs 
              d'affaires ou en solo.
            </p>
            <Link to="/reserver" className="book-now-btn">
              Réserver Maintenant
            </Link>
          </div>
          <div className="content-image">
            <img src="/assets/32.jpeg" alt="Chambre Single" />
          </div>
        </div>
        
        {/* Second subsection: Image on left, text on right */}
        <div className="section-content reverse">
          <div className="content-text">
            <h3>Chambre Double</h3>
            <p>
              Chambre Double – Parfaite pour les couples, avec plus d'espace et balcon en option.
            </p>
            <Link to="/reserver" className="book-now-btn">
              Réserver Maintenant
            </Link>
          </div>
          <div className="content-image">
            <img src="/assets/42.jpeg" alt="Chambre double" />
          </div>
        </div>
        
        {/* Third subsection: Image on right, text on left */}
        <div className="section-content">
          <div className="content-text">
            <h3>Suite</h3>
            <p>
              Suites – Plus d'espace et de confort, avec salons séparés et, pour certaines, 
              cheminées ou terrasses privées.
            </p>
            <Link to="/reserver" className="book-now-btn">
              Réserver Maintenant
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