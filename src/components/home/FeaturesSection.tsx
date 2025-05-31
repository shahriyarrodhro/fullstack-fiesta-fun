
import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Calendar, Users, Trophy, MapPin, Clock, Star } from 'lucide-react';

const FeaturesSection = () => {
  const { language } = useApp();

  const content = {
    en: {
      title: 'Why Choose TurfMaster?',
      subtitle: 'Everything you need for the perfect sports experience',
      features: [
        {
          icon: MapPin,
          title: 'Find Nearby Turfs',
          description: 'Discover the best turfs in your area with real-time availability and ratings.'
        },
        {
          icon: Calendar,
          title: 'Easy Booking',
          description: 'Book your slots instantly with our smart booking system and secure payments.'
        },
        {
          icon: Users,
          title: 'Team Management',
          description: 'Create teams, invite players, and manage your squad with ease.'
        },
        {
          icon: Trophy,
          title: 'Join Tournaments',
          description: 'Participate in exciting tournaments and compete with the best teams.'
        },
        {
          icon: Clock,
          title: 'Real-time Updates',
          description: 'Get instant notifications for bookings, matches, and tournament updates.'
        },
        {
          icon: Star,
          title: 'Rating System',
          description: 'Rate and review turfs and players to build a trusted community.'
        }
      ]
    },
    bn: {
      title: 'কেন টার্ফমাস্টার বেছে নেবেন?',
      subtitle: 'নিখুঁত ক্রীড়া অভিজ্ঞতার জন্য আপনার প্রয়োজনীয় সবকিছু',
      features: [
        {
          icon: MapPin,
          title: 'কাছাকাছি টার্ফ খুঁজুন',
          description: 'রিয়েল-টাইম প্রাপ্যতা এবং রেটিং সহ আপনার এলাকার সেরা টার্ফগুলি আবিষ্কার করুন।'
        },
        {
          icon: Calendar,
          title: 'সহজ বুকিং',
          description: 'আমাদের স্মার্ট বুকিং সিস্টেম এবং নিরাপদ পেমেন্ট দিয়ে তাৎক্ষণিক স্লট বুক করুন।'
        },
        {
          icon: Users,
          title: 'দল ব্যবস্থাপনা',
          description: 'দল তৈরি করুন, খেলোয়াড়দের আমন্ত্রণ জানান এবং সহজেই আপনার স্কোয়াড পরিচালনা করুন।'
        },
        {
          icon: Trophy,
          title: 'টুর্নামেন্টে যোগ দিন',
          description: 'রোমাঞ্চকর টুর্নামেন্টে অংশগ্রহণ করুন এবং সেরা দলগুলোর সাথে প্রতিযোগিতা করুন।'
        },
        {
          icon: Clock,
          title: 'রিয়েল-টাইম আপডেট',
          description: 'বুকিং, ম্যাচ এবং টুর্নামেন্ট আপডেটের জন্য তাৎক্ষণিক বিজ্ঞপ্তি পান।'
        },
        {
          icon: Star,
          title: 'রেটিং সিস্টেম',
          description: 'একটি বিশ্বস্ত কমিউনিটি তৈরি করতে টার্ফ এবং খেলোয়াড়দের রেট এবং রিভিউ করুন।'
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair text-white mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group glass-card p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-gradient transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Background Decorations */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-lime-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-green-500/5 rounded-full blur-2xl"></div>
      </div>
    </section>
  );
};

export default FeaturesSection;
