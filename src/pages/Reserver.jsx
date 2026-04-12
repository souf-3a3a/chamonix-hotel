import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Reserver.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// API Configuration
const API_BASE = `${import.meta.env.VITE_API_URL}/api`;

async function apiFetch(path, opts = {}) {
  const headers = opts.headers || {};
  headers["Content-Type"] = headers["Content-Type"] || "application/json";
  
  const res = await fetch(`${API_BASE}${path}`, { ...opts, headers });
  const text = await res.text();
  let data = null;
  try { 
    data = text ? JSON.parse(text) : null; 
  } catch (e) { 
    data = text; 
  }
  
  if (!res.ok) throw { status: res.status, data, message: data?.message || `Request failed with status ${res.status}` };
  return data;
}

const Reserver = () => {
  const [selectedModal, setSelectedModal] = useState(null);
  const [selectedImages, setSelectedImages] = useState({});
  const [rooms, setRooms] = useState([]);
  const [availableRooms, setAvailableRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [dateError, setDateError] = useState('');

  // Calculate number of nights
  const calculateNights = () => {
    if (!checkInDate || !checkOutDate) return 0;
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const diffTime = Math.abs(checkOut - checkIn);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  // Load all rooms
  const loadRooms = async () => {
    setLoading(true);
    try {
      const data = await apiFetch('/rooms');
      setRooms(data);
      
      // Initialize selected images for each room
      const initialImages = {};
      data.forEach(room => {
        initialImages[room._id] = 0;
      });
      setSelectedImages(initialImages);
    } catch (error) {
      console.error('Failed to load rooms:', error);
      alert('Failed to load rooms. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Check room availability for selected dates
  const checkAvailability = async () => {
    if (!checkInDate || !checkOutDate) {
      setAvailableRooms([]);
      return;
    }

    if (new Date(checkInDate) >= new Date(checkOutDate)) {
      setDateError('Check-in date must be before check-out date');
      setAvailableRooms([]);
      return;
    }

    setDateError('');

    try {
      const data = await apiFetch(`/rooms/available?check_in=${checkInDate}&check_out=${checkOutDate}`);
      setAvailableRooms(data);
    } catch (error) {
      console.error('Failed to check availability:', error);
      setAvailableRooms([]);
    }
  };

  // Get room availability status
  const getRoomAvailability = (roomId) => {
    if (!checkInDate || !checkOutDate) return { available: true, count: 0 };
    
    const availableRoom = availableRooms.find(room => room._id === roomId);
    return {
      available: !!availableRoom,
      count: availableRoom?.available_count || 0
    };
  };

  useEffect(() => {
    loadRooms();
  }, []);

  useEffect(() => {
    if (checkInDate && checkOutDate) {
      checkAvailability();
    }
  }, [checkInDate, checkOutDate]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate room containers on scroll
    gsap.fromTo('.room-container', {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.first-section',
        start: 'top 80%',
        end: 'bottom 20%'
      }
    });

    // Animate hero content
    gsap.fromTo('.hero-content', {
      opacity: 0,
      y: 30
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5
    });

  }, [rooms]);

  const handleImageSelect = (roomId, imageIndex) => {
    setSelectedImages(prev => ({
      ...prev,
      [roomId]: imageIndex
    }));
  };

  const openModal = (room) => {
    setSelectedModal(room);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedModal(null);
    document.body.style.overflow = 'auto';
  };

  const handleBooking = (room) => {
    if (!checkInDate || !checkOutDate) {
      alert('Veuillez sélectionner les dates d\'arrivée et de départ');
      return;
    }

    const availability = getRoomAvailability(room._id);
    if (!availability.available) {
      alert('Cette chambre n\'est pas disponible pour les dates sélectionnées');
      return;
    }

    // Here you would typically redirect to booking form or handle booking process
    alert(`Réservation de ${room.name} du ${checkInDate} au ${checkOutDate}\nPrix total: ${(room.price_per_night * calculateNights()).toFixed(2)} MAD`);
  };

  // Get room images array
  const getRoomImages = (room) => {
    const images = [];
    if (room.main_image) {
      images.push({ src: room.main_image, alt: `${room.name} - Main view` });
    }
    if (room.images && room.images.length > 0) {
      room.images.forEach((img, index) => {
        images.push({ src: img, alt: `${room.name} - View ${index + 2}` });
      });
    }
    
    // Fallback if no images
    if (images.length === 0) {
      images.push({ src: 'https://via.placeholder.com/400x300?text=No+Image', alt: 'No image available' });
    }
    
    return images;
  };

  // Format price with currency
  const formatPrice = (price) => {
    return `${price.toFixed(0)} MAD`;
  };

  const RoomContainer = ({ room }) => {
    const images = getRoomImages(room);
    const nights = calculateNights();
    const totalPrice = nights > 0 ? room.price_per_night * nights : room.price_per_night;
    const availability = getRoomAvailability(room._id);
    
    return (
      <div className="room-container">
        <div className="room-left">
          <div className="room-gallery">
            <div className="main-image">
              <img 
                src={images[selectedImages[room._id] || 0].src} 
                alt={images[selectedImages[room._id] || 0].alt} 
                className="room-main-img"
              />
              {/* Availability indicator overlay */}
              <div className={`availability-badge ${availability.available ? 'available' : 'unavailable'}`}>
                {checkInDate && checkOutDate ? (
                  availability.available ? 
                    `✓ Disponible (${availability.count})` : 
                    '✗ Non disponible'
                ) : 'Sélectionner les dates'}
              </div>
            </div>
            <div className="room-thumbnails">
              {images.map((image, index) => (
                <img 
                  key={index}
                  src={image.src} 
                  alt={image.alt} 
                  className={`room-thumb ${(selectedImages[room._id] || 0) === index ? 'active' : ''}`}
                  onClick={() => handleImageSelect(room._id, index)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="room-right">
          <div className="room-info">
            <h3 className="room-title">{room.name}</h3>
            <h4 className="room-subtitle">
              {room.details?.beds || 'Lit confortable'} • {room.quantity || 1} chambre{room.quantity > 1 ? 's' : ''} disponible{room.quantity > 1 ? 's' : ''}
            </h4>
            <p className="room-description">{room.description || 'Chambre confortable avec toutes les commodités modernes.'}</p>
          </div>
          <div className="room-booking">
            <div className="price-section">
              <div className="total-price">{formatPrice(totalPrice)}</div>
              <div className="price-details">
                {nights > 0 ? (
                  `Total pour ${nights} nuit${nights > 1 ? 's' : ''}\n${formatPrice(room.price_per_night)} par nuit`
                ) : (
                  `${formatPrice(room.price_per_night)} par nuit`
                )}
              </div>
            </div>
            <div className="booking-buttons">
              <button className="details-btn" onClick={() => openModal(room)}>
                Plus de détails
              </button>
              <button 
                className={`book-btn ${!availability.available && checkInDate && checkOutDate ? 'disabled' : ''}`}
                onClick={() => handleBooking(room)}
                disabled={!availability.available && checkInDate && checkOutDate}
              >
                {!availability.available && checkInDate && checkOutDate ? 'Non disponible' : 'Réserver maintenant'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const RoomModal = ({ room, isOpen, onClose }) => {
    if (!isOpen || !room) return null;

    let images = [];
    let modalContent = null;

    try {
      images = getRoomImages(room);
      
      modalContent = (
        <div className="room-modal-body">
          <div className="modal-image-section">
            {images && images.length > 0 && images[0] && (
              <img 
                src={images[0].src} 
                alt={images[0].alt} 
                className="modal-main-image" 
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300?text=No+Image';
                }}
              />
            )}
          </div>
          
          <h4>Caractéristiques de la chambre</h4>
          <ul>
            <li>Prix par nuit: {formatPrice(room.price_per_night || 0)}</li>
            <li>Chambres disponibles: {room.quantity || 1}</li>
            {room.details && room.details.beds && (
              <li>Configuration: {room.details.beds}</li>
            )}
            {room.details && room.details.size && (
              <li>Superficie: {room.details.size}</li>
            )}
            {room.details && room.details.view && (
              <li>Vue: {room.details.view}</li>
            )}
          </ul>
          
          {room.details && room.details.amenities && typeof room.details.amenities === 'string' && (
            <>
              <h4>Équipements</h4>
              <ul>
                {room.details.amenities.split(',').map((amenity, index) => (
                  <li key={index}>{amenity.trim()}</li>
                ))}
              </ul>
            </>
          )}
          
          {room.description && (
            <>
              <h4>Description</h4>
              <p>{room.description}</p>
            </>
          )}
          
          <h4>Services inclus</h4>
          <ul>
            <li>WiFi gratuit</li>
            <li>Climatisation</li>
            <li>Service de ménage quotidien</li>
            <li>Accès aux installations de l'hôtel</li>
          </ul>
        </div>
      );
    } catch (error) {
      console.error('Error in RoomModal:', error);
      modalContent = (
        <div className="room-modal-body">
          <h4>Erreur lors du chargement des détails</h4>
          <p>Impossible de charger les détails de la chambre. Veuillez réessayer.</p>
        </div>
      );
    }

    return (
      <div className="room-modal" style={{ display: 'block' }} onClick={onClose}>
        <div className="room-modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="room-modal-header">
            <h3>{room.name || 'Chambre'} - Détails</h3>
            <button className="room-modal-close" onClick={onClose}>&times;</button>
          </div>
          {modalContent}
        </div>
      </div>
    );
  };

  // Get today's date for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="reservation">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1 style={{
            background: 'rgba(255,255,255,0.9)', 
            color: '#2F4F4F', 
            padding: '1rem 2rem', 
            borderRadius: '10px'
          }}>
            Réserver dès maintenant!
          </h1>
        </div>
      </section>

      {/* Date Selection Section */}
      <section className="date-selection-section" style={{ 
        padding: '2rem', 
        backgroundColor: '#f8f9fa', 
        margin: '2rem 0' 
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '2rem', 
            color: '#2F4F4F' 
          }}>
            Sélectionnez vos dates de séjour
          </h2>
          
          <div className="date-inputs" style={{ 
            display: 'flex', 
            gap: '2rem', 
            justifyContent: 'center',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}>
            <div className="date-input-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontWeight: 'bold', color: '#2F4F4F' }}>Date d'arrivée</label>
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                min={today}
                style={{
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: '2px solid #ddd',
                  fontSize: '1rem',
                  minWidth: '200px'
                }}
              />
            </div>
            
            <div className="date-input-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontWeight: 'bold', color: '#2F4F4F' }}>Date de départ</label>
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                min={checkInDate || today}
                style={{
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: '2px solid #ddd',
                  fontSize: '1rem',
                  minWidth: '200px'
                }}
              />
            </div>
            
            {calculateNights() > 0 && (
              <div className="nights-display" style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#e8f5e8',
                borderRadius: '8px',
                border: '2px solid #4CAF50',
                textAlign: 'center'
              }}>
                <strong style={{ color: '#2F4F4F' }}>
                  {calculateNights()} nuit{calculateNights() > 1 ? 's' : ''}
                </strong>
              </div>
            )}
          </div>
          
          {dateError && (
            <div style={{
              color: '#e74c3c',
              textAlign: 'center',
              marginTop: '1rem',
              padding: '0.5rem',
              backgroundColor: '#ffeaea',
              borderRadius: '4px',
              border: '1px solid #e74c3c'
            }}>
              {dateError}
            </div>
          )}
        </div>
      </section>

      {/* Rooms Section */}
      <div className="first-section">
        <div className="section-intro">
          {loading ? (
            <div style={{ 
              textAlign: 'center', 
              padding: '4rem',
              color: '#666'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                border: '4px solid #f3f3f3',
                borderTop: '4px solid #2F4F4F',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                margin: '0 auto 1rem'
              }}></div>
              Chargement des chambres...
            </div>
          ) : rooms.length === 0 ? (
            <div style={{ 
              textAlign: 'center', 
              padding: '4rem',
              color: '#666'
            }}>
              <h3>Aucune chambre disponible</h3>
              <p>Veuillez réessayer plus tard.</p>
            </div>
          ) : (
            rooms.map(room => (
              <RoomContainer key={room._id} room={room} />
            ))
          )}
        </div>
      </div>

      {/* Modal */}
      <RoomModal
        room={selectedModal}
        isOpen={!!selectedModal}
        onClose={closeModal}
      />
      
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .availability-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: bold;
          font-size: 0.875rem;
          backdrop-filter: blur(10px);
          z-index: 10;
        }
        
        .availability-badge.available {
          background: rgba(76, 175, 80, 0.9);
          color: white;
        }
        
        .availability-badge.unavailable {
          background: rgba(231, 76, 60, 0.9);
          color: white;
        }
        
        .book-btn.disabled {
          background-color: #ccc !important;
          cursor: not-allowed !important;
          opacity: 0.7;
        }
        
        .book-btn.disabled:hover {
          background-color: #ccc !important;
          transform: none !important;
        }
        
        .modal-main-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 1rem;
        }
        
        .main-image {
          position: relative;
        }
        
        .room-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        
        .room-modal-content {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          max-width: 600px;
          width: 90%;
          max-height: 80vh;
          overflow-y: auto;
          position: relative;
        }
        
        .room-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid #eee;
          padding-bottom: 1rem;
        }
        
        .room-modal-close {
          background: none;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          color: #666;
          padding: 0;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .room-modal-close:hover {
          color: #000;
        }
        
        .room-modal-body h4 {
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          color: #2F4F4F;
        }
        
        .room-modal-body ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .room-modal-body li {
          margin-bottom: 0.25rem;
        }
      `}</style>
    </div>
  );
};

export default Reserver;