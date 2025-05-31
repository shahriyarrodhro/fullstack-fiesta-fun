
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Star, Clock } from 'lucide-react';

interface Turf {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  type: string;
  availability: 'available' | 'busy' | 'closed';
}

interface LiveSearchProps {
  placeholder?: string;
  onSelect?: (turf: Turf) => void;
}

const LiveSearch: React.FC<LiveSearchProps> = ({ 
  placeholder = "Search turfs, location...", 
  onSelect 
}) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<Turf[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Mock turf data - in real app this would come from your backend
  const mockTurfs: Turf[] = [
    {
      id: 1,
      name: 'Champions Arena',
      location: 'Dhanmondi, Dhaka',
      price: 2500,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
      type: 'Football',
      availability: 'available'
    },
    {
      id: 2,
      name: 'Victory Ground',
      location: 'Gulshan, Dhaka',
      price: 1800,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop',
      type: 'Football',
      availability: 'available'
    },
    {
      id: 3,
      name: 'Elite Sports Hub',
      location: 'Banani, Dhaka',
      price: 4500,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=400&h=300&fit=crop',
      type: 'Football',
      availability: 'busy'
    },
    {
      id: 4,
      name: 'Cricket Central',
      location: 'Uttara, Dhaka',
      price: 3200,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      type: 'Cricket',
      availability: 'available'
    },
    {
      id: 5,
      name: 'Basketball Court Pro',
      location: 'Mirpur, Dhaka',
      price: 2800,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop',
      type: 'Basketball',
      availability: 'available'
    }
  ];

  // Simulate API search with debouncing
  useEffect(() => {
    if (query.length === 0) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    if (query.length < 2) return;

    setIsLoading(true);
    
    const timer = setTimeout(() => {
      const filtered = mockTurfs.filter(turf =>
        turf.name.toLowerCase().includes(query.toLowerCase()) ||
        turf.location.toLowerCase().includes(query.toLowerCase()) ||
        turf.type.toLowerCase().includes(query.toLowerCase())
      );
      
      setResults(filtered);
      setIsOpen(true);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (turf: Turf) => {
    setQuery(turf.name);
    setIsOpen(false);
    
    if (onSelect) {
      onSelect(turf);
    } else {
      navigate(`/turf/${turf.id}`);
    }
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'available':
        return 'text-green-600 bg-green-100';
      case 'busy':
        return 'text-orange-600 bg-orange-100';
      case 'closed':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div ref={searchRef} className="relative w-full">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 h-12 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 bg-white"
          onFocus={() => query.length >= 2 && setIsOpen(true)}
        />
        {isLoading && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="w-4 h-4 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-xl mt-1 z-50 max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="p-2">
              {results.map((turf) => (
                <div
                  key={turf.id}
                  className="p-3 hover:bg-gray-50 cursor-pointer rounded-lg transition-colors group"
                  onClick={() => handleSelect(turf)}
                >
                  <div className="flex items-center gap-3">
                    <img 
                      src={turf.image} 
                      alt={turf.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-gray-900 truncate group-hover:text-green-600 transition-colors">
                          {turf.name}
                        </h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(turf.availability)}`}>
                          {turf.availability}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span className="truncate">{turf.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span>{turf.rating}</span>
                        </div>
                        <div className="font-medium text-green-600">
                          ৳{turf.price}/hr
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : query.length >= 2 ? (
            <div className="p-4 text-center text-gray-500">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>No turfs found for "{query}"</p>
              <p className="text-sm">Try searching for a different location or sport</p>
            </div>
          ) : null}
          
          {query.length >= 2 && results.length > 0 && (
            <div className="border-t border-gray-100 p-3">
              <button 
                className="w-full text-center text-green-600 hover:text-green-700 font-medium text-sm py-2 hover:bg-green-50 rounded-lg transition-colors"
                onClick={() => {
                  navigate(`/turfs?q=${query}`);
                  setIsOpen(false);
                }}
              >
                View all results for "{query}" →
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LiveSearch;
