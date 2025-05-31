
export const mockTurfs = [
  {
    id: 1,
    name: 'Champions Arena',
    location: 'Dhanmondi, Dhaka',
    address: 'House 45, Road 27, Dhanmondi, Dhaka 1209',
    price: 2500,
    rating: 4.8,
    reviews: 127,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&h=600&fit=crop'
    ],
    type: 'football',
    amenities: ['Parking', 'Changing Room', 'Flood Lights', 'First Aid', 'Refreshments'],
    available: true,
    description: 'Professional football turf with premium facilities and equipment.',
    features: ['Natural Grass', '11v11 Football', 'Professional Lighting', 'Sound System'],
    timeSlots: [
      { time: '6:00 AM - 7:00 AM', available: true, price: 2000 },
      { time: '7:00 AM - 8:00 AM', available: false, price: 2500 },
      { time: '8:00 AM - 9:00 AM', available: true, price: 2500 },
      { time: '9:00 AM - 10:00 AM', available: true, price: 3000 },
      { time: '6:00 PM - 7:00 PM', available: true, price: 3500 },
      { time: '7:00 PM - 8:00 PM', available: false, price: 3500 },
      { time: '8:00 PM - 9:00 PM', available: true, price: 4000 }
    ],
    contact: {
      phone: '+880 171234567',
      email: 'champions@arena.com',
      manager: 'Mohammad Rahman'
    },
    rules: [
      'Proper sports attire required',
      'No smoking or alcohol',
      'Maximum 22 players',
      'Advance booking required',
      'Cancellation 24 hours prior'
    ]
  },
  {
    id: 2,
    name: 'Victory Ground',
    location: 'Gulshan, Dhaka',
    address: 'Plot 15, Road 11, Gulshan 1, Dhaka 1212',
    price: 1800,
    rating: 4.6,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop'
    ],
    type: 'cricket',
    amenities: ['Parking', 'Changing Room', 'Equipment Rental', 'Seating Area'],
    available: true,
    description: 'Modern cricket ground with professional facilities.',
    features: ['Synthetic Pitch', 'Net Practice', 'Professional Bowling Machine'],
    timeSlots: [
      { time: '6:00 AM - 8:00 AM', available: true, price: 1500 },
      { time: '8:00 AM - 10:00 AM', available: true, price: 1800 },
      { time: '4:00 PM - 6:00 PM', available: false, price: 2000 },
      { time: '6:00 PM - 8:00 PM', available: true, price: 2200 }
    ],
    contact: {
      phone: '+880 187654321',
      email: 'victory@ground.com',
      manager: 'Ahmed Ali'
    },
    rules: [
      'Cricket equipment available for rent',
      'Maximum 22 players',
      'No metal spikes allowed',
      'Advance booking required'
    ]
  },
  {
    id: 3,
    name: 'Elite Football Hub',
    location: 'Banani, Dhaka',
    address: 'Road 12, Block C, Banani, Dhaka 1213',
    price: 4500,
    rating: 4.9,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop'
    ],
    type: 'football',
    amenities: ['Parking', 'Changing Room', 'Flood Lights', 'Cafeteria', 'Medical Room', 'VIP Lounge'],
    available: true,
    description: 'Premium football facility with world-class amenities.',
    features: ['FIFA Standard Pitch', 'Professional Lighting', 'Video Analysis', 'Gym Access'],
    timeSlots: [
      { time: '6:00 AM - 7:00 AM', available: true, price: 3500 },
      { time: '7:00 AM - 8:00 AM', available: true, price: 4000 },
      { time: '8:00 AM - 9:00 AM', available: false, price: 4500 },
      { time: '6:00 PM - 7:00 PM', available: true, price: 5000 },
      { time: '7:00 PM - 8:00 PM', available: true, price: 5500 },
      { time: '8:00 PM - 9:00 PM', available: false, price: 6000 }
    ],
    contact: {
      phone: '+880 191234567',
      email: 'elite@footballhub.com',
      manager: 'Karim Hassan'
    },
    rules: [
      'Professional sports attire mandatory',
      'No outside food or drinks',
      'Maximum 22 players',
      'Advance booking required',
      'Professional referee available'
    ]
  }
];

export const mockTournaments = [
  {
    id: 1,
    name: 'Dhaka Premier League',
    sport: 'football',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
    startDate: '2024-02-15',
    endDate: '2024-03-20',
    registrationDeadline: '2024-02-10',
    location: 'Multiple Venues, Dhaka',
    entryFee: 5000,
    prizePool: 100000,
    maxTeams: 16,
    registeredTeams: 12,
    format: '11v11',
    description: 'The biggest football tournament in Dhaka featuring top teams.',
    rules: [
      'Each team must have 11 players minimum',
      'Maximum 18 players per squad',
      'Professional referee provided',
      'All matches recorded'
    ],
    contact: {
      organizer: 'Dhaka Sports Association',
      phone: '+880 171234567',
      email: 'info@dhakapremier.com'
    },
    status: 'open'
  },
  {
    id: 2,
    name: 'Cricket Championship 2024',
    sport: 'cricket',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop',
    startDate: '2024-03-01',
    endDate: '2024-04-15',
    registrationDeadline: '2024-02-25',
    location: 'Victory Ground, Gulshan',
    entryFee: 8000,
    prizePool: 150000,
    maxTeams: 12,
    registeredTeams: 8,
    format: 'T20',
    description: 'Professional T20 cricket tournament with cash prizes.',
    rules: [
      'T20 format (20 overs per innings)',
      'Maximum 15 players per squad',
      'Professional umpires provided',
      'Boundary rope and sight screens provided'
    ],
    contact: {
      organizer: 'Bangladesh Cricket Club',
      phone: '+880 187654321',
      email: 'cricket@championship.com'
    },
    status: 'open'
  },
  {
    id: 3,
    name: 'Basketball League',
    sport: 'basketball',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop',
    startDate: '2024-02-20',
    endDate: '2024-03-15',
    registrationDeadline: '2024-02-15',
    location: 'Sports Complex, Uttara',
    entryFee: 3000,
    prizePool: 50000,
    maxTeams: 8,
    registeredTeams: 6,
    format: '5v5',
    description: 'Fast-paced basketball tournament for amateur and professional teams.',
    rules: [
      '5 players per team on court',
      'Maximum 12 players per squad',
      'Professional referees',
      '4 quarters of 12 minutes each'
    ],
    contact: {
      organizer: 'Dhaka Basketball Association',
      phone: '+880 191234567',
      email: 'basketball@league.com'
    },
    status: 'open'
  }
];

export const mockBookings = [
  {
    id: 1,
    turfId: 1,
    turfName: 'Champions Arena',
    date: '2024-01-15',
    time: '6:00 PM - 7:00 PM',
    location: 'Dhanmondi, Dhaka',
    status: 'confirmed',
    price: 3500,
    paymentStatus: 'paid',
    players: 12,
    contact: '+880 171234567'
  },
  {
    id: 2,
    turfId: 2,
    turfName: 'Victory Ground',
    date: '2024-01-16',
    time: '4:00 PM - 6:00 PM',
    location: 'Gulshan, Dhaka',
    status: 'pending',
    price: 2000,
    paymentStatus: 'pending',
    players: 8,
    contact: '+880 187654321'
  }
];

export const mockTeams = [
  {
    id: 1,
    name: 'Thunder Bolts',
    sport: 'football',
    members: 15,
    captain: 'John Doe',
    wins: 12,
    losses: 3,
    draws: 2,
    avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop',
    description: 'Competitive football team looking for serious players.'
  },
  {
    id: 2,
    name: 'City Warriors',
    sport: 'cricket',
    members: 11,
    captain: 'Ahmed Ali',
    wins: 7,
    losses: 2,
    draws: 1,
    avatar: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop',
    description: 'Professional cricket team with experienced players.'
  }
];

export const mockMessages = [
  {
    id: 1,
    sender: 'Ahmed Ali',
    content: 'Looking for 2 more players for tomorrow\'s match',
    timestamp: '2024-01-15T10:30:00Z',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face'
  },
  {
    id: 2,
    sender: 'Football Club Admin',
    content: 'Tournament registration is now open!',
    timestamp: '2024-01-15T09:15:00Z',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=50&h=50&fit=crop&crop=face'
  }
];
