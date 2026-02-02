
import React from 'react';
import { Link } from 'react-router-dom';
// Added missing Phone import
import { ChevronRight, ArrowRight, Phone } from 'lucide-react';
import { SERVICES, ICON_MAP } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-gray-50 py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">Our Specializations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced dental solutions for every member of your family. We use the latest technology to ensure painless and effective treatments.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 bg-white rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="flex-1 relative">
                <div className="absolute -inset-4 bg-[#228B22]/10 rounded-[2rem] blur-2xl"></div>
                <img 
                  src={`https://images.unsplash.com/photo-${1600000000000 + (index * 1000000)}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`} 
                  alt={service.nameEn}
                  className="relative rounded-3xl w-full h-[300px] object-cover shadow-lg"
                />
              </div>
              <div className="flex-1 space-y-6">
                <div className="w-12 h-12 bg-[#228B22] text-white rounded-xl flex items-center justify-center shadow-lg">
                  {ICON_MAP[service.icon]}
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-extrabold text-gray-900">{service.nameEn}</h2>
                  <p className="text-[#228B22] font-bold text-xl">{service.nameAr}</p>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {service.description} This procedure is performed by our expert team using world-class equipment to ensure your absolute comfort and safety.
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <Link 
                    to="/book" 
                    className="bg-[#228B22] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#1a6b1a] transition-all flex items-center space-x-2"
                  >
                    <span>Book Now</span>
                    <ChevronRight size={18} />
                  </Link>
                  <button className="text-gray-500 font-semibold px-6 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all">
                    View Pricing
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">Need an Emergency Appointment?</h2>
            <p className="text-gray-400 max-w-xl mx-auto text-lg">
              We offer priority bookings for urgent dental care and trauma cases. Available 24/7 for our patients.
            </p>
            <div className="flex justify-center">
              <a 
                href="tel:+15550000000"
                className="bg-[#228B22] text-white px-10 py-5 rounded-2xl font-extrabold text-xl shadow-xl hover:scale-105 transition-transform flex items-center space-x-3"
              >
                <Phone size={24} />
                <span>Call Emergency Line</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
