import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>
            Ifrane, Maroc<br/>
            Phone: +212 535 862 000<br/>
            Email: info@lechamonix.ma
          </p>
        </div>
        
        <div className="footer-section">
          <h3>Hotel Amenities</h3>
          <ul>
            <li>Service de chambre 24h/24</li>
            <li>WiFi gratuit</li>
            <li>Centre spa & bien-être</li>
            <li>Restaurant gastronomique</li>
            <li>Centre d'affaires</li>
            <li>Services de conciergerie</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>À propos du Chamonix</h3>
          <p>
            Découvrez l'essence de l'hospitalité marocaine au Chamonix. Notre engagement 
            envers l'excellence, l'attention aux détails et le service personnalisé créent 
            des expériences inoubliables pour les voyageurs exigeants à la recherche du 
            meilleur en matière d'hébergement et de commodités.
          </p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Le Chamonix Hotel. Tous droits réservés. | Politique de confidentialité | Conditions de service</p>
      </div>
    </footer>
  );
};

export default Footer;