
import React, { useState } from 'react';
import { Search, MapPin, Calendar, DollarSign } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';

interface TurfSearchProps {
  onSearch: (filters: any) => void;
}

const TurfSearch: React.FC<TurfSearchProps> = ({ onSearch }) => {
  const { language } = useApp();
  const [filters, setFilters] = useState({
    type: '',
    location: '',
    date: '',
    price: ''
  });

  const content = {
    en: {
      type: 'Type',
      location: 'Location',
      date: 'Date',
      price: 'Price',
      search: 'Search',
      selectType: 'Select sport type',
      selectLocation: 'Select location',
      selectDate: 'Select date',
      selectPrice: 'Select price range'
    },
    bn: {
      type: 'ধরন',
      location: 'অবস্থান',
      date: 'তারিখ',
      price: 'মূল্য',
      search: 'অনুসন্ধান',
      selectType: 'খেলার ধরন নির্বাচন করুন',
      selectLocation: 'অবস্থান নির্বাচন করুন',
      selectDate: 'তারিখ নির্বাচন করুন',
      selectPrice: 'মূল্যের পরিসর নির্বাচন করুন'
    }
  };

  const t = content[language];

  const handleSearch = () => {
    onSearch(filters);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        {/* Type */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.type}
          </label>
          <select 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value={filters.type}
            onChange={(e) => setFilters({...filters, type: e.target.value})}
          >
            <option value="all-types">{t.selectType}</option>
            <option value="football">Football</option>
            <option value="cricket">Cricket</option>
            <option value="basketball">Basketball</option>
            <option value="tennis">Tennis</option>
            <option value="badminton">Badminton</option>
          </select>
        </div>

        {/* Location */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.location}
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <select 
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={filters.location}
              onChange={(e) => setFilters({...filters, location: e.target.value})}
            >
              <option value="all-areas">{t.selectLocation}</option>
              <option value="gulshan">Gulshan</option>
              <option value="dhanmondi">Dhanmondi</option>
              <option value="uttara">Uttara</option>
              <option value="mirpur">Mirpur</option>
              <option value="banani">Banani</option>
              <option value="wari">Wari</option>
            </select>
          </div>
        </div>

        {/* Date */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.date}
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="date"
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={filters.date}
              onChange={(e) => setFilters({...filters, date: e.target.value})}
            />
          </div>
        </div>

        {/* Price */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.price}
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <select 
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={filters.price}
              onChange={(e) => setFilters({...filters, price: e.target.value})}
            >
              <option value="all-prices">{t.selectPrice}</option>
              <option value="0-50">$0 - $50</option>
              <option value="50-100">$50 - $100</option>
              <option value="100+">$100+</option>
            </select>
          </div>
        </div>
      </div>

      {/* Search Button */}
      <button 
        onClick={handleSearch}
        className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
      >
        <Search className="w-5 h-5" />
        {t.search}
      </button>
    </div>
  );
};

export default TurfSearch;
