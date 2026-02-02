
import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle2,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { SERVICES } from '../constants';

type BookingStep = 1 | 2 | 3 | 4;

const Booking: React.FC = () => {
  const [step, setStep] = useState<BookingStep>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    serviceId: '',
    date: '',
    time: '',
    fullName: '',
    phone: '',
    email: '',
    notes: ''
  });

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const handleNext = () => setStep((prev) => (prev + 1) as BookingStep);
  const handleBack = () => setStep((prev) => (prev - 1) as BookingStep);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    const webhookUrl = 'https://n8n.baselembaby.cloud/webhook-test/299e8139-8019-47ec-85a4-ae9f4cb54874';
    const selectedService = SERVICES.find(s => s.id === formData.serviceId);

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          serviceName: selectedService?.nameEn || 'N/A',
          serviceNameAr: selectedService?.nameAr || 'N/A',
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('We encountered an error processing your request. Please try again.');
      }

      setStep(4);
    } catch (error: any) {
      console.error('Booking submission error:', error);
      setSubmitError(error.message || 'Something went wrong. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStep1Valid = !!formData.serviceId;
  const isStep2Valid = !!formData.date && !!formData.time;
  const isStep3Valid = !!formData.fullName && !!formData.phone;

  const renderStep1 = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-2xl font-bold text-gray-900">Select Service</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SERVICES.map((service) => (
          <button
            key={service.id}
            onClick={() => setFormData({ ...formData, serviceId: service.id })}
            className={`p-6 rounded-2xl border-2 text-left transition-all ${
              formData.serviceId === service.id 
              ? 'border-[#228B22] bg-[#228B22]/5 shadow-md' 
              : 'border-gray-100 hover:border-gray-200'
            }`}
          >
            <p className="font-bold text-lg text-gray-900">{service.nameEn}</p>
            <p className="text-sm text-[#228B22]">{service.nameAr}</p>
          </button>
        ))}
      </div>
      <button 
        disabled={!isStep1Valid}
        onClick={handleNext}
        className="w-full bg-[#228B22] disabled:opacity-50 text-white py-4 rounded-xl font-bold text-lg mt-8 flex items-center justify-center space-x-2"
      >
        <span>Continue to Date & Time</span>
        <ChevronRight size={20} />
      </button>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-2xl font-bold text-gray-900">Choose Appointment Time</h2>
      <div className="space-y-4">
        <label className="block text-sm font-bold text-gray-700">Preferred Date</label>
        <div className="relative">
          <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="date"
            min={new Date().toISOString().split('T')[0]}
            className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-100 focus:border-[#228B22] outline-none transition-all"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
        </div>
      </div>
      <div className="space-y-4">
        <label className="block text-sm font-bold text-gray-700">Available Slots</label>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
          {timeSlots.map((slot) => (
            <button
              key={slot}
              onClick={() => setFormData({ ...formData, time: slot })}
              className={`py-3 rounded-lg text-sm font-bold transition-all ${
                formData.time === slot 
                ? 'bg-[#228B22] text-white shadow-lg' 
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>
      <div className="flex space-x-4 pt-8">
        <button onClick={handleBack} className="flex-1 bg-gray-100 text-gray-600 py-4 rounded-xl font-bold flex items-center justify-center space-x-2">
          <ChevronLeft size={20} />
          <span>Back</span>
        </button>
        <button 
          disabled={!isStep2Valid}
          onClick={handleNext}
          className="flex-[2] bg-[#228B22] disabled:opacity-50 text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2"
        >
          <span>Patient Information</span>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-2xl font-bold text-gray-900">Your Contact Details</h2>
      
      {submitError && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl flex items-start space-x-3 mb-4">
          <AlertCircle className="flex-shrink-0 mt-0.5" size={18} />
          <span className="text-sm">{submitError}</span>
        </div>
      )}

      <div className="space-y-4">
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            placeholder="Full Name"
            className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-100 focus:border-[#228B22] outline-none transition-all"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            disabled={isSubmitting}
          />
        </div>
        <div className="relative">
          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            placeholder="Phone Number"
            className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-100 focus:border-[#228B22] outline-none transition-all"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            disabled={isSubmitting}
          />
        </div>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            placeholder="Email Address (Optional)"
            className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-100 focus:border-[#228B22] outline-none transition-all"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            disabled={isSubmitting}
          />
        </div>
        <textarea 
          placeholder="Anything else we should know?"
          className="w-full px-4 py-4 rounded-xl border-2 border-gray-100 focus:border-[#228B22] outline-none transition-all h-32"
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          disabled={isSubmitting}
        />
      </div>
      <div className="flex space-x-4 pt-8">
        <button 
          onClick={handleBack} 
          disabled={isSubmitting}
          className="flex-1 bg-gray-100 text-gray-600 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-gray-200 transition-all disabled:opacity-50"
        >
          <ChevronLeft size={20} />
          <span>Back</span>
        </button>
        <button 
          disabled={!isStep3Valid || isSubmitting}
          onClick={handleSubmit}
          className="flex-[2] bg-[#228B22] disabled:opacity-50 text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 shadow-xl hover:bg-[#1a6b1a] transition-all"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              <span>Confirming...</span>
            </>
          ) : (
            <span>Confirm Booking</span>
          )}
        </button>
      </div>
    </div>
  );

  const renderSuccess = () => (
    <div className="text-center space-y-8 py-12 animate-in zoom-in-95 duration-500">
      <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 text-[#228B22] rounded-full">
        <CheckCircle2 size={64} />
      </div>
      <div className="space-y-4">
        <h2 className="text-3xl font-extrabold text-gray-900">Appointment Requested!</h2>
        <p className="text-gray-500 max-w-sm mx-auto">
          Thank you, <span className="font-bold">{formData.fullName}</span>. We've received your request for <strong>{SERVICES.find(s => s.id === formData.serviceId)?.nameEn}</strong> on <strong>{formData.date}</strong> at <strong>{formData.time}</strong>.
        </p>
      </div>
      <div className="bg-gray-50 p-6 rounded-2xl text-left max-w-sm mx-auto border border-gray-100">
        <h3 className="font-bold text-sm uppercase text-gray-400 mb-4 tracking-widest">Next Steps</h3>
        <ul className="space-y-3 text-sm text-gray-600">
          <li className="flex items-start space-x-2">
            <AlertCircle size={16} className="text-[#228B22] mt-0.5 flex-shrink-0" />
            <span>Check your phone for a confirmation SMS.</span>
          </li>
          <li className="flex items-start space-x-2">
            <AlertCircle size={16} className="text-[#228B22] mt-0.5 flex-shrink-0" />
            <span>Our receptionist will call to finalize the slot.</span>
          </li>
        </ul>
      </div>
      <button 
        onClick={() => window.location.href = '#/'}
        className="text-[#228B22] font-bold hover:underline"
      >
        Return to Home
      </button>
    </div>
  );

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 px-4 bg-gray-50">
      <div className="max-w-2xl w-full bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 relative overflow-hidden">
        {step < 4 && (
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[#228B22] font-bold">Step {step} of 3</span>
              <span className="text-gray-400 font-medium">
                {step === 1 ? 'Select Treatment' : step === 2 ? 'Choose Time' : 'Patient Details'}
              </span>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#228B22] transition-all duration-500" 
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
        {step === 4 && renderSuccess()}
      </div>
    </div>
  );
};

export default Booking;
