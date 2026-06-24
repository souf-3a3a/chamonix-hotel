import React from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h3>{t.footer.contactTitle}</h3>
          <p>
            {t.footer.address}<br/>
            {t.footer.phone}<br/>
            {t.footer.email}
          </p>
        </div>

        <div className="footer-section">
          <h3>{t.footer.amenitiesTitle}</h3>
          <ul>
            {t.footer.amenities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3>{t.footer.aboutTitle}</h3>
          <p>{t.footer.aboutText}</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t.footer.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;