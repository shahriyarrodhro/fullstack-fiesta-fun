
export const mockTurfs = [
  {
    id: 1,
    name: 'Manchester City Academy',
    location: 'Gulshan, Dhaka',
    city: 'Dhaka',
    price: 2500,
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop'
    ],
    type: 'Football',
    surface: 'Artificial Grass',
    size: '100x60m',
    capacity: 22,
    description: 'Premium football turf with FIFA standard artificial grass and modern facilities.',
    features: ['Floodlights', 'Parking', 'Changing Rooms', 'WiFi', 'Cafeteria'],
    contact: {
      phone: '+8801234567890',
      email: 'info@manchesteracademy.bd'
    },
    owner: 'Manchester Sports Ltd.',
    available: true,
    timeSlots: [
      { time: '6:00 AM - 8:00 AM', available: true },
      { time: '8:00 AM - 10:00 AM', available: true },
      { time: '10:00 AM - 12:00 PM', available: false },
      { time: '2:00 PM - 4:00 PM', available: true },
      { time: '4:00 PM - 6:00 PM', available: true },
      { time: '6:00 PM - 8:00 PM', available: true },
      { time: '8:00 PM - 10:00 PM', available: false }
    ]
  },
  {
    id: 2,
    name: 'Barcelona Academy',
    location: 'Dhanmondi, Dhaka',
    city: 'Dhaka',
    price: 3000,
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop'
    ],
    type: 'Football',
    surface: 'Natural Grass',
    size: '105x68m',
    capacity: 22,
    description: 'Professional football facility with natural grass and world-class amenities.',
    features: ['Premium Grass', 'Cafeteria', 'Equipment'],
    contact: {
      phone: '+8801234567891',
      email: 'info@barcelonaacademy.bd'
    },
    owner: 'Barcelona Sports BD',
    available: true,
    timeSlots: [
      { time: '6:00 AM - 8:00 AM', available: true },
      { time: '8:00 AM - 10:00 AM', available: false },
      { time: '10:00 AM - 12:00 PM', available: true },
      { time: '2:00 PM - 4:00 PM', available: true },
      { time: '4:00 PM - 6:00 PM', available: false },
      { time: '6:00 PM - 8:00 PM', available: true },
      { time: '8:00 PM - 10:00 PM', available: true }
    ]
  }
];

export const mockTournaments = [
  {
    id: 1,
    name: 'Dhaka Premier League 2024',
    sport: 'Football',
    startDate: '2024-02-15',
    endDate: '2024-03-15',
    location: 'Multiple Venues, Dhaka',
    city: 'Dhaka',
    prize: 50000,
    teams: 16,
    maxTeams: 16,
    status: 'open',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop',
    entryFee: 5000,
    organizer: 'Dhaka Sports Association',
    description: 'The biggest football tournament in Dhaka featuring top teams from across the city.',
    rules: [
      '11v11 format',
      'Professional referees',
      'FIFA standard rules apply',
      'Minimum 15 players per squad'
    ],
    registeredTeams: [
      { name: 'Thunder Bolts', captain: 'Ahmed Rahman', registrationDate: '2024-01-20' },
      { name: 'City Warriors', captain: 'Mohammad Ali', registrationDate: '2024-01-22' }
    ]
  },
  {
    id: 2,
    name: 'Cricket Champions Cup',
    sport: 'Cricket',
    startDate: '2024-03-01',
    endDate: '2024-03-20',
    location: 'Central Cricket Ground',
    city: 'Dhaka',
    prize: 75000,
    teams: 8,
    maxTeams: 12,
    status: 'upcoming',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
    entryFee: 8000,
    organizer: 'Cricket Federation',
    description: 'Premier cricket tournament featuring the best teams in Bangladesh.',
    rules: [
      'T20 format',
      'Maximum 16 players per squad',
      'ICC standard rules',
      'Professional umpires'
    ],
    registeredTeams: []
  }
];
