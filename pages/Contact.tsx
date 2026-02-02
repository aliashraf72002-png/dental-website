
import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Twitter 
} from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-gray-50 py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a question or need to schedule a visit? Our friendly team is ready to help you with anything you need.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 space-y-4">
              <div className="w-12 h-12 bg-[#228B22]/10 rounded-2xl flex items-center justify-center text-[#228B22]">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold">Call Us Directly</h3>
              <p className="text-gray-500 text-sm">For bookings and inquiries</p>
              <a href={`tel:${CONTACT_INFO.phone}`} className="text-2xl font-bold text-[#228B22] block hover:underline">
                {CONTACT_INFO.phone}
              </a>
            </div>

            <div className="bg-[#228B22] p-8 rounded-[2.5rem] shadow-xl space-y-4 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-white">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-xl font-bold">WhatsApp Us</h3>
              <p className="text-white/80 text-sm">Instant support & quick questions</p>
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#228B22] px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
              >
                Open WhatsApp
              </a>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Our Location</h4>
                  <p className="text-sm text-gray-500">{CONTACT_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Working Hours</h4>
                  <ul className="text-sm text-gray-500 space-y-1">
                    {CONTACT_INFO.hours.map(h => (
                      <li key={h.day} className="flex justify-between w-48">
                        <span>{h.day}:</span>
                        <span className="font-medium text-gray-900">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Form & Map */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h3 className="text-3xl font-extrabold text-gray-900 mb-8">Send Us a Message</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Full Name</label>
                  <input type="text" className="w-full px-4 py-4 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-[#228B22] outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Email Address</label>
                  <input type="email" className="w-full px-4 py-4 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-[#228B22] outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-bold text-gray-700">Subject</label>
                  <input type="text" className="w-full px-4 py-4 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-[#228B22] outline-none transition-all" placeholder="Inquiry about Orthodontics" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-bold text-gray-700">Message</label>
                  <textarea className="w-full px-4 py-4 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-[#228B22] outline-none transition-all h-40" placeholder="How can we help you?"></textarea>
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="bg-[#228B22] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-[#1a6b1a] transition-all transform hover:-translate-y-1">
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Embedded Google Map Placeholder */}
            <div className="rounded-[2.5rem] overflow-hidden h-[400px] border-8 border-white shadow-xl bg-gray-100 relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10000!2d-122.40476!3d37.78193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzU0LjkiTiAxMjLCsDI0JzE3LjEiVw!5e0!3m2!1sen!2sus!4v1234567890" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Clinic Location"
              ></iframe>
              <div className="absolute top-6 left-6 bg-white px-6 py-4 rounded-2xl shadow-lg border border-gray-100 pointer-events-none group-hover:scale-105 transition-transform">
                <p className="font-bold text-[#228B22]">Emerald Dental Clinic</p>
                <p className="text-xs text-gray-500">Click to expand map</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
