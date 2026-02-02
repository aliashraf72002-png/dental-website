
import React from 'react';
import { 
  Award, 
  GraduationCap, 
  HeartPulse, 
  Stethoscope,
  Smile,
  ShieldCheck,
  Languages
} from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Introduction */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">Meet Emerald Dental</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Since 2010, we have been setting the standard for dental excellence in the region. Our mission is to combine cutting-edge technology with compassionate, patient-centered care.
          </p>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 relative">
            <div className="absolute -inset-4 bg-[#228B22]/10 rounded-[3rem] blur-3xl"></div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71f1536783?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Dr. Sarah Emerald" 
                className="w-full h-auto"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50">
                <h3 className="text-2xl font-bold text-gray-900">Dr. Sarah Emerald</h3>
                <p className="text-[#228B22] font-semibold">Senior Cosmetic Dentist & Implantologist</p>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-[#228B22] font-bold tracking-widest uppercase text-sm">Lead Specialist</h2>
              <h3 className="text-4xl font-extrabold text-gray-900">The Heart Behind the Practice</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                With over 15 years of experience and specialized training in both the US and Europe, Dr. Emerald brings a wealth of international expertise to every patient. Her philosophy centers on "pain-free, fear-free" dentistry.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <GraduationCap />, title: "Education", text: "Doctor of Dental Medicine, NYU" },
                { icon: <Award />, title: "Certified", text: "American Board of Orthodontics" },
                { icon: <Languages />, title: "Bilingual", text: "Fluent in English & Arabic" },
                { icon: <ShieldCheck />, title: "Licensed", text: "Expert State Dental Council" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="text-[#228B22] mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#228B22]/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Core Principles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm text-center space-y-4">
              <div className="w-16 h-16 bg-[#228B22]/10 rounded-full flex items-center justify-center text-[#228B22] mx-auto mb-4">
                <HeartPulse size={32} />
              </div>
              <h4 className="text-xl font-bold">Patient Comfort</h4>
              <p className="text-gray-500">We go above and beyond to ensure you are relaxed and pain-free during every procedure.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm text-center space-y-4">
              <div className="w-16 h-16 bg-[#228B22]/10 rounded-full flex items-center justify-center text-[#228B22] mx-auto mb-4">
                <Stethoscope size={32} />
              </div>
              <h4 className="text-xl font-bold">Modern Tech</h4>
              <p className="text-gray-500">Using the latest in digital X-rays and 3D imaging for precise and efficient diagnostics.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm text-center space-y-4">
              <div className="w-16 h-16 bg-[#228B22]/10 rounded-full flex items-center justify-center text-[#228B22] mx-auto mb-4">
                <Smile size={32} />
              </div>
              <h4 className="text-xl font-bold">Total Integrity</h4>
              <p className="text-gray-500">We recommend only what is necessary, with complete transparency in pricing and plans.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
