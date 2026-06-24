import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../i18n/LanguageContext.jsx';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const { t } = useLanguage();
  const [modalImage, setModalImage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // First section scroll up effect with background reveal
    ScrollTrigger.create({
      trigger: ".first-section",
      start: "bottom bottom",
      end: "bottom top",
      scrub: 1,
      onUpdate: self => {
        const progress = self.progress;
        gsap.set(".first-section", {
          yPercent: -100 * progress
        });
        gsap.set(".section-bg", {
          opacity: progress
        });
      }
    });

    // Horizontal scroll animation - only on desktop
    if (window.innerWidth > 768) {
      let horizontalWrapper = document.querySelector(".horizontal-wrapper");
      
      if (horizontalWrapper) {
        gsap.to(horizontalWrapper, {
          xPercent: -75,
          ease: "none",
          scrollTrigger: {
            trigger: ".horizontal-section",
            pin: true,
            scrub: 1,
            end: () => "+=" + (horizontalWrapper.offsetWidth - window.innerWidth)
          }
        });
      }
    }

    // Gallery floating animations
    gsap.utils.toArray(".gallery-item").forEach((item, index) => {
      // Initial animation on scroll
      gsap.fromTo(item, {
        opacity: 0,
        y: 100,
        rotation: Math.random() * 10 - 5
      }, {
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 1,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          end: "bottom 10%"
        }
      });

      // Floating effect
      gsap.to(item, {
        y: Math.random() * 20 - 10,
        rotation: Math.random() * 4 - 2,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: index * 0.2
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p></p>
        </div>
      </section>

      {/* Background for reveal effect */}
      <div className="section-bg"></div>

      {/* First Section */}
      <div className="first-section">
        <div className="section-intro">
          <h2>{t.home.introTitle}</h2>
          <p>{t.home.introText}</p>
        </div>

        <div className="section-content" id="first_sec">
          <div className="content-text">
            <p>{t.home.caption}</p>
          </div>
          <div className="content-image">
            <img src="/assets/glissa.jpg" alt="sejour" />
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Section */}
      <section className="horizontal-section">
        <div className="horizontal-wrapper">
          <div className="horizontal-item">
            <div className="item-image">
              <img src="/assets/30.jpeg" alt="Rooms" />
            </div>
            <div className="item-text">
              <h3>{t.home.roomsTitle}</h3>
              <p>{t.home.roomsText}</p>
            </div>
          </div>

          <div className="horizontal-item">
            <div className="item-image">
              <img src="/assets/epic_compo.jpg" alt="Restaurant" />
            </div>
            <div className="item-text">
              <h3>{t.home.foodTitle}</h3>
              <p>{t.home.foodText}</p>
            </div>
          </div>

          <div className="horizontal-item">
            <div className="item-image">
              <img src="/assets/ifrane.jpg" alt="Pool" />
            </div>
            <div className="item-text">
              <h3>{t.home.exploreTitle}</h3>
              <p>{t.home.exploreText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery">
        <h2>{t.home.galleryTitle}</h2>
        <div className="gallery-grid">
          {[20, 21, 22, 30, 44, 28,19,31,40].map((num) => (
            <div key={num} className="gallery-item">
              <img 
                src={`/assets/${num}.jpeg`} 
                alt={`Gallery ${num}`}
                onClick={() => openModal(`/assets/${num}.jpeg`)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <div 
        className="modal" 
        style={{ display: isModalOpen ? 'block' : 'none' }}
        onClick={(e) => e.target.classList.contains('modal') && closeModal()}
      >
        <span className="close" onClick={closeModal}>&times;</span>
        <div className="modal-content">
          <img src={modalImage} alt="Modal" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;