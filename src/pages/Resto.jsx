import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Resto = () => {
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
          <h2>Saveurs locales, ambiance détendue</h2>
          <p></p>
        </div>
        
        {/* Single subsection with image and caption */}
        <div className="section-content" id="featured_section">
          <div className="content-text">
            <h3>Notre Bar et Restaurant</h3>
            <p>
              Notre hall d'accueil incarne parfaitement l'esprit du Serenity Hotel : un mélange 
              harmonieux entre l'architecture traditionnelle marocaine et le confort moderne. 
              Les détails sculptés à la main, les couleurs pastel chaleureuses et l'éclairage 
              tamisé créent une atmosphère accueillante qui annonce le début d'une expérience 
              inoubliable. À quelques pas, notre bar convivial vous invite à savourer un café 
              parfumé ou un cocktail rafraîchissant, prolongeant ainsi ce moment de détente dès 
              votre arrivée. Ici commence votre voyage vers la sérénité.
            </p>
          </div>
          <div className="content-image">
            <img src="/assets/como5.jpg" alt="Bar et Restaurant" />
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-section" id="gallery">
        <div className="gallery-grid">
          <div className="gallery-item">
             <div className="gallery-item">
            <img src="/assets/1.jpeg" />
            <div className="gallery-caption"></div>
             <div className="gallery-item">
            <img src="/assets/2.jpeg" />
            <div className="gallery-caption"></div>
          </div>
          </div>
            <img src="/assets/35.jpeg" />
            <div className="gallery-caption"></div>
          </div>
             <div className="gallery-item">
            <img src="/assets/36.jpeg" />
            <div className="gallery-caption"></div>
          </div>
                   <div className="gallery-item">
            <img src="/assets/6.jpeg" />
            <div className="gallery-caption"></div>
          </div>
                   <div className="gallery-item">
            <img src="/assets/4.jpeg" />
            <div className="gallery-caption"></div>
          </div>
                <div className="gallery-item">
            <img src="/assets/24.jpeg" />
            <div className="gallery-caption"></div>
          </div>
                <div className="gallery-item">
            <img src="/assets/13.jpeg" />
            <div className="gallery-caption"></div>
          </div>
           <div className="gallery-item">
            <img src="/assets/14.jpeg" />
            <div className="gallery-caption"></div>
          </div>
           <div className="gallery-item">
            <img src="/assets/18.jpeg" />
            <div className="gallery-caption"></div>
          </div>
     <div className="gallery-item">
            <img src="/assets/16.jpeg" />
            <div className="gallery-caption"></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Resto;