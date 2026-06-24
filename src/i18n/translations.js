// Centralized translations for the Le Chamonix website.
// Two languages are supported: French (fr) and English (en).
// `langLabel` shows the currently-active language in the navbar toggle.

export const translations = {
  fr: {
    langLabel: 'FR',

    nav: {
      home: 'Accueil',
      rooms: 'Chambres',
      restaurant: 'Bar & Restaurant',
      reserver: 'Réserver',
      contact: 'Contact',
      contactUs: 'Nous contacter',
      address: 'Ifrane, Maroc',
      phone: 'Téléphone : +212 535 862 000',
      email: 'Email : info@lechamonix.ma',
    },

    home: {
      introTitle: 'Charme intemporel, niché dans la Petite Suisse marocaine',
      introText:
        "Évadez-vous à Ifrane, où les paysages alpins rencontrent la chaleur marocaine. Depuis plus de 90 ans, notre hôtel historique accueille les voyageurs avec confort, saveurs locales et un cadre unique.",
      caption:
        "Depuis plus de 90 ans, notre hôtel familial fait partie du charme d'Ifrane. Réputé pour son accueil chaleureux et son emplacement privilégié près du centre, nous allions confort, tradition et ambiance accueillante pour les voyageurs du monde entier.",
      roomsTitle: 'Des chambres confortables pour tous les voyageurs',
      roomsText:
        "Trouvez votre refuge idéal, des chambres simples et abordables aux suites spacieuses offrant une vue sur les forêts de cèdres et le ciel montagneux. Chaque séjour inclut Wi-Fi gratuit, petit-déjeuner quotidien et chaleureuse hospitalité marocaine.",
      foodTitle: 'Saveurs du Maroc (et au-delà)',
      foodText:
        "Savourez des plats marocains traditionnels — tajines parfumés, pâtisseries fraîches et spécialités locales — ainsi qu'une cuisine internationale préparée avec une touche moderne. Commencez la journée avec un petit-déjeuner copieux et terminez-la par un dîner au coin du feu ou en terrasse estivale.",
      exploreTitle: 'Découvrez Ifrane et le Moyen Atlas',
      exploreText:
        "Partez à la découverte des forêts de cèdres, des lacs paisibles, du ski en hiver ou flânez dans les rues pittoresques d'Ifrane. Notre équipe peut vous aider à organiser des activités pour un séjour aussi relaxant — ou aventureux — que vous le souhaitez.",
      galleryTitle: 'Galerie',
    },

    rooms: {
      introTitle: 'Confort, charme et rapport qualité-prix pour tous les séjours',
      introText:
        "Que vous voyagiez seul, en couple, en famille ou entre amis, nous avons un espace qui vous conviendra parfaitement. Chaque chambre comprend petit-déjeuner quotidien, Wi-Fi gratuit et accès à notre restaurant et salon.",
      singleTitle: 'Chambre Single',
      singleText:
        "Chambre Simple – Simple, confortable et abordable — idéale pour les voyageurs d'affaires ou en solo.",
      doubleTitle: 'Chambre Double',
      doubleText:
        "Chambre Double – Parfaite pour les couples, avec plus d'espace et balcon en option.",
      suiteTitle: 'Suite',
      suiteText:
        "Suites – Plus d'espace et de confort, avec salons séparés et, pour certaines, cheminées ou terrasses privées.",
      bookNow: 'Réserver Maintenant',
    },

    resto: {
      introTitle: 'Saveurs locales, ambiance détendue',
      sectionTitle: 'Notre Bar et Restaurant',
      sectionText:
        "Notre hall d'accueil incarne parfaitement l'esprit du Chamonix Hotel : un mélange harmonieux entre l'architecture traditionnelle marocaine et le confort moderne. Les détails sculptés à la main, les couleurs pastel chaleureuses et l'éclairage tamisé créent une atmosphère accueillante qui annonce le début d'une expérience inoubliable. À quelques pas, notre bar convivial vous invite à savourer un café parfumé ou un cocktail rafraîchissant, prolongeant ainsi ce moment de détente dès votre arrivée. Ici commence votre voyage vers la sérénité.",
    },

    footer: {
      contactTitle: 'Coordonnées',
      address: 'Ifrane, Maroc',
      phone: 'Téléphone : +212 535 862 000',
      email: 'Email : info@lechamonix.ma',
      amenitiesTitle: "Services de l'hôtel",
      amenities: [
        'Service de chambre 24h/24',
        'WiFi gratuit',
        'Centre spa & bien-être',
        'Restaurant gastronomique',
        "Centre d'affaires",
        'Services de conciergerie',
      ],
      aboutTitle: 'À propos du Chamonix',
      aboutText:
        "Découvrez l'essence de l'hospitalité marocaine au Chamonix. Notre engagement envers l'excellence, l'attention aux détails et le service personnalisé créent des expériences inoubliables pour les voyageurs exigeants à la recherche du meilleur en matière d'hébergement et de commodités.",
      copyright:
        '© 2024 Le Chamonix Hotel. Tous droits réservés. | Politique de confidentialité | Conditions de service',
    },

    reserver: {
      heroTitle: 'Réserver dès maintenant !',
      selectDates: 'Sélectionnez vos dates de séjour',
      checkIn: "Date d'arrivée",
      checkOut: 'Date de départ',
      nights: (n) => `${n} nuit${n > 1 ? 's' : ''}`,
      dateError: "La date d'arrivée doit précéder la date de départ",
      loadingRooms: 'Chargement des chambres...',
      noRoomsTitle: 'Aucune chambre disponible',
      noRoomsText: 'Veuillez réessayer plus tard.',
      loadRoomsError: 'Échec du chargement des chambres. Veuillez réessayer.',
      available: (count) => `✓ Disponible (${count})`,
      unavailable: '✗ Non disponible',
      selectDatesBadge: 'Sélectionner les dates',
      defaultBeds: 'Lit confortable',
      roomsAvailable: (q) =>
        `${q} chambre${q > 1 ? 's' : ''} disponible${q > 1 ? 's' : ''}`,
      defaultDescription: 'Chambre confortable avec toutes les commodités modernes.',
      totalFor: (n) => `Total pour ${n} nuit${n > 1 ? 's' : ''}`,
      perNight: 'par nuit',
      moreDetails: 'Plus de détails',
      bookNow: 'Réserver maintenant',
      notAvailable: 'Non disponible',
      // Modal — room details
      detailsSuffix: 'Détails',
      defaultRoomName: 'Chambre',
      roomFeatures: 'Caractéristiques de la chambre',
      pricePerNight: 'Prix par nuit',
      availableRooms: 'Chambres disponibles',
      configuration: 'Configuration',
      size: 'Superficie',
      view: 'Vue',
      equipment: 'Équipements',
      description: 'Description',
      includedServices: 'Services inclus',
      includedList: [
        'WiFi gratuit',
        'Climatisation',
        'Service de ménage quotidien',
        "Accès aux installations de l'hôtel",
      ],
      detailsErrorTitle: 'Erreur lors du chargement des détails',
      detailsErrorText:
        'Impossible de charger les détails de la chambre. Veuillez réessayer.',
      // Booking form
      bookTitle: (name) => `Réserver - ${name}`,
      selectDatesAlert: "Veuillez sélectionner les dates d'arrivée et de départ",
      unavailableAlert: "Cette chambre n'est pas disponible pour les dates sélectionnées",
      bookingConfirmed: '✓ Réservation confirmée !',
      bookingConfirmedText: 'Vous recevrez une confirmation par email.',
      close: 'Fermer',
      from: 'Du',
      to: 'au',
      nightsShort: (n) => `${n} nuit(s)`,
      fullName: 'Nom complet *',
      emailLabel: 'Email *',
      phoneLabel: 'Téléphone',
      guests: 'Nombre de personnes',
      specialRequests: 'Demandes spéciales',
      bookingError: 'Erreur lors de la réservation',
      submitting: 'En cours...',
      confirm: (price) => `Confirmer — ${price} MAD`,
    },
  },

  en: {
    langLabel: 'EN',

    nav: {
      home: 'Home',
      rooms: 'Rooms',
      restaurant: 'Bar & Restaurant',
      reserver: 'Book',
      contact: 'Contact',
      contactUs: 'Contact Us',
      address: 'Ifrane, Morocco',
      phone: 'Phone: +212 535 862 000',
      email: 'Email: info@lechamonix.ma',
    },

    home: {
      introTitle: 'Timeless charm, nestled in the Moroccan Little Switzerland',
      introText:
        'Escape to Ifrane, where alpine landscapes meet Moroccan warmth. For over 90 years, our historic hotel has welcomed travelers with comfort, local flavors and a unique setting.',
      caption:
        "For over 90 years, our family-run hotel has been part of the charm of Ifrane. Renowned for its warm welcome and prime location near the center, we combine comfort, tradition and a welcoming atmosphere for travelers from around the world.",
      roomsTitle: 'Comfortable rooms for every traveler',
      roomsText:
        'Find your ideal retreat, from simple and affordable rooms to spacious suites with views over the cedar forests and the mountain sky. Every stay includes free Wi-Fi, daily breakfast and warm Moroccan hospitality.',
      foodTitle: 'Flavors of Morocco (and beyond)',
      foodText:
        'Savor traditional Moroccan dishes — fragrant tagines, fresh pastries and local specialties — as well as international cuisine prepared with a modern touch. Start the day with a hearty breakfast and end it with dinner by the fireside or on the summer terrace.',
      exploreTitle: 'Discover Ifrane and the Middle Atlas',
      exploreText:
        'Set off to explore the cedar forests, peaceful lakes, winter skiing, or stroll through the picturesque streets of Ifrane. Our team can help you arrange activities for a stay as relaxing — or adventurous — as you wish.',
      galleryTitle: 'Gallery',
    },

    rooms: {
      introTitle: 'Comfort, charm and value for every stay',
      introText:
        'Whether you travel solo, as a couple, with family or with friends, we have a space that suits you perfectly. Each room includes daily breakfast, free Wi-Fi and access to our restaurant and lounge.',
      singleTitle: 'Single Room',
      singleText:
        'Single Room – Simple, comfortable and affordable — ideal for business or solo travelers.',
      doubleTitle: 'Double Room',
      doubleText:
        'Double Room – Perfect for couples, with more space and an optional balcony.',
      suiteTitle: 'Suite',
      suiteText:
        'Suites – More space and comfort, with separate lounges and, for some, fireplaces or private terraces.',
      bookNow: 'Book Now',
    },

    resto: {
      introTitle: 'Local flavors, relaxed atmosphere',
      sectionTitle: 'Our Bar and Restaurant',
      sectionText:
        'Our reception hall perfectly embodies the spirit of the Chamonix Hotel: a harmonious blend of traditional Moroccan architecture and modern comfort. Hand-carved details, warm pastel colors and soft lighting create a welcoming atmosphere that marks the beginning of an unforgettable experience. Just steps away, our friendly bar invites you to enjoy a fragrant coffee or a refreshing cocktail, extending this moment of relaxation from the moment you arrive. Here begins your journey toward serenity.',
    },

    footer: {
      contactTitle: 'Contact Information',
      address: 'Ifrane, Morocco',
      phone: 'Phone: +212 535 862 000',
      email: 'Email: info@lechamonix.ma',
      amenitiesTitle: 'Hotel Amenities',
      amenities: [
        '24/7 room service',
        'Free WiFi',
        'Spa & wellness center',
        'Gourmet restaurant',
        'Business center',
        'Concierge services',
      ],
      aboutTitle: 'About Le Chamonix',
      aboutText:
        'Discover the essence of Moroccan hospitality at Le Chamonix. Our commitment to excellence, attention to detail and personalized service create unforgettable experiences for discerning travelers seeking the very best in accommodation and amenities.',
      copyright:
        '© 2024 Le Chamonix Hotel. All rights reserved. | Privacy Policy | Terms of Service',
    },

    reserver: {
      heroTitle: 'Book your stay now!',
      selectDates: 'Select your stay dates',
      checkIn: 'Check-in date',
      checkOut: 'Check-out date',
      nights: (n) => `${n} night${n > 1 ? 's' : ''}`,
      dateError: 'Check-in date must be before check-out date',
      loadingRooms: 'Loading rooms...',
      noRoomsTitle: 'No rooms available',
      noRoomsText: 'Please try again later.',
      loadRoomsError: 'Failed to load rooms. Please try again.',
      available: (count) => `✓ Available (${count})`,
      unavailable: '✗ Not available',
      selectDatesBadge: 'Select dates',
      defaultBeds: 'Comfortable bed',
      roomsAvailable: (q) => `${q} room${q > 1 ? 's' : ''} available`,
      defaultDescription: 'Comfortable room with all modern amenities.',
      totalFor: (n) => `Total for ${n} night${n > 1 ? 's' : ''}`,
      perNight: 'per night',
      moreDetails: 'More details',
      bookNow: 'Book now',
      notAvailable: 'Not available',
      detailsSuffix: 'Details',
      defaultRoomName: 'Room',
      roomFeatures: 'Room features',
      pricePerNight: 'Price per night',
      availableRooms: 'Available rooms',
      configuration: 'Configuration',
      size: 'Size',
      view: 'View',
      equipment: 'Amenities',
      description: 'Description',
      includedServices: 'Included services',
      includedList: [
        'Free WiFi',
        'Air conditioning',
        'Daily housekeeping',
        'Access to hotel facilities',
      ],
      detailsErrorTitle: 'Error loading details',
      detailsErrorText: 'Unable to load the room details. Please try again.',
      bookTitle: (name) => `Book - ${name}`,
      selectDatesAlert: 'Please select check-in and check-out dates',
      unavailableAlert: 'This room is not available for the selected dates',
      bookingConfirmed: '✓ Booking confirmed!',
      bookingConfirmedText: 'You will receive a confirmation by email.',
      close: 'Close',
      from: 'From',
      to: 'to',
      nightsShort: (n) => `${n} night(s)`,
      fullName: 'Full name *',
      emailLabel: 'Email *',
      phoneLabel: 'Phone',
      guests: 'Number of guests',
      specialRequests: 'Special requests',
      bookingError: 'Error during booking',
      submitting: 'Submitting...',
      confirm: (price) => `Confirm — ${price} MAD`,
    },
  },
};

// Shared currency formatter so the whole site stays in MAD.
export const formatMAD = (amount) => `${Number(amount || 0).toFixed(0)} MAD`;
