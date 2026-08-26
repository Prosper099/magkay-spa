import React, { useState, useEffect } from 'react';
import { 
  Calendar, Clock, Phone, MapPin, Check, Plus, Trash2, Send, 
  CheckCircle2, User, Home, Building2, AlertCircle, 
  Copy, Flower2, ExternalLink, Sparkles
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SPA_INFO, SPA_SERVICES } from '../data/spaData';
import { BookingFormData } from '../types';
import { generateBookingWhatsAppUrl } from '../utils/whatsapp';

interface BookingSectionProps {
  initialServiceId?: string | null;
  onClearInitialService?: () => void;
  onOpenWhatsAppModalWithMsg?: (msg: string) => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ 
  initialServiceId, 
  onClearInitialService,
  onOpenWhatsAppModalWithMsg
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [serviceType, setServiceType] = useState<'in-spa' | 'home-service'>('in-spa');
  const [homeAddress, setHomeAddress] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('10:00 AM');
  const [preferredPhone] = useState<string>(SPA_INFO.phonePrimary);
  const [additionalNotes, setAdditionalNotes] = useState('');

  // Booking Confirmation State
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [confirmedBookingId, setConfirmedBookingId] = useState<string>('');
  const [validationError, setValidationError] = useState<string>('');
  const [copiedId, setCopiedId] = useState(false);

  // Load initial service if passed from another section
  useEffect(() => {
    if (initialServiceId) {
      if (!selectedServices.includes(initialServiceId)) {
        setSelectedServices(prev => [...prev, initialServiceId]);
      }
      const el = document.getElementById('booking');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [initialServiceId]);

  // Set default date to tomorrow if not set
  useEffect(() => {
    if (!appointmentDate) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setAppointmentDate(tomorrow.toISOString().split('T')[0]);
    }
  }, [appointmentDate]);

  // Calculations
  const selectedServiceObjects = SPA_SERVICES.filter(s => selectedServices.includes(s.id));
  const totalPrice = selectedServiceObjects.reduce((sum, s) => sum + s.priceNaira, 0);
  const totalDuration = selectedServiceObjects.reduce((sum, s) => sum + s.durationMinutes, 0);

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter(sId => sId !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const removeService = (id: string) => {
    setSelectedServices(selectedServices.filter(sId => sId !== id));
  };

  // Build the form data payload
  const currentBookingData: BookingFormData = {
    fullName,
    phoneNumber,
    whatsappNumber: whatsappNumber || phoneNumber,
    serviceType,
    homeAddress,
    selectedServices,
    appointmentDate,
    appointmentTime,
    preferredPhone,
    additionalNotes,
  };

  // Validate form
  const validateForm = (): boolean => {
    if (!fullName.trim()) {
      setValidationError('Please enter your full name');
      return false;
    }
    if (!phoneNumber.trim() || phoneNumber.length < 9) {
      setValidationError('Please enter a valid phone number');
      return false;
    }
    if (selectedServices.length === 0) {
      setValidationError('Please select at least one treatment or service');
      return false;
    }
    if (!appointmentDate) {
      setValidationError('Please select your preferred appointment date');
      return false;
    }
    if (serviceType === 'home-service' && !homeAddress.trim()) {
      setValidationError('Please enter your residence / hotel address for VIP Home Service');
      return false;
    }
    setValidationError('');
    return true;
  };

  // Handle WhatsApp Direct Booking
  const handleWhatsAppBooking = () => {
    if (!validateForm()) return;

    const refId = `MK-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmedBookingId(refId);
    setBookingConfirmed(true);

    const treatmentsText = selectedServiceObjects
      .map(s => `• ${s.name} (₦${s.priceNaira.toLocaleString()})`)
      .join('\n');

    const msg = `🌸 *MAGKAY SPA APPOINTMENT RESERVATION* 🌸\n*Booking ID:* ${refId}\n\n*Client Name:* ${fullName}\n*Phone:* ${phoneNumber}\n*Type:* ${serviceType === 'in-spa' ? 'In-Spa (KM 5 LASU-Isheri Road)' : `VIP Home Service: ${homeAddress}`}\n*Date:* ${appointmentDate}\n*Time Slot:* ${appointmentTime}\n\n*Selected Treatments:*\n${treatmentsText}\n\n*Estimated Total:* ₦${totalPrice.toLocaleString()}\n*Estimated Duration:* ${totalDuration} mins\n*Notes:* ${additionalNotes || 'None'}\n\nPlease confirm my slot!`;

    if (onOpenWhatsAppModalWithMsg) {
      onOpenWhatsAppModalWithMsg(msg);
    } else {
      const waUrl = generateBookingWhatsAppUrl(currentBookingData, SPA_SERVICES);
      window.open(waUrl, '_blank');
    }
  };

  // Handle Online Booking Reservation / Direct Inquiry
  const handleDirectReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const refId = `MK-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmedBookingId(refId);
    setValidationError('');
    setBookingConfirmed(true);
  };

  const copyBookingReference = () => {
    navigator.clipboard.writeText(confirmedBookingId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2500);
  };

  const resetForm = () => {
    setSelectedServices([]);
    setFullName('');
    setPhoneNumber('');
    setWhatsappNumber('');
    setHomeAddress('');
    setAdditionalNotes('');
    setBookingConfirmed(false);
    setConfirmedBookingId('');
    if (onClearInitialService) onClearInitialService();
  };

  return (
    <section id="booking" className="py-16 lg:py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DE1B76]/15 border border-[#DE1B76]/30 text-[#FF4B99] text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm">
            <Calendar className="w-3.5 h-3.5 text-[#DE1B76]" />
            <span>Fast-Track Appointment Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-white">
            Reserve Your <span className="not-italic font-bold font-sans text-[#DE1B76]">MagKay Session</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-400">
            Book directly through our official Setmore scheduling portal or customize your package below for instant WhatsApp confirmation.
          </p>

          {/* Prominent Official Setmore Online Booking Portal Card */}
          <div className="pt-3 max-w-2xl mx-auto">
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-[#171722] via-[#221626] to-[#171722] border-2 border-[#DE1B76]/40 shadow-xl shadow-[#DE1B76]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#DE1B76]/20 text-[#FF4B99] text-[10px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  <span>Official Online Booking Portal</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  MagKay Spa on Setmore
                </h3>
                <p className="text-xs text-stone-300">
                  Pick your date, choose your specialist, and confirm real-time availability in seconds.
                </p>
              </div>

              <a
                id="setmore-direct-booking-btn"
                href={SPA_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#DE1B76] hover:bg-[#c41566] active:scale-95 text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#DE1B76]/30 hover:scale-105 transition-all duration-300 shrink-0 cursor-pointer group"
              >
                <span>Book on Setmore</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* If booking is confirmed, display confirmation pass */}
        {bookingConfirmed ? (
          <div className="max-w-2xl mx-auto bg-[#14141A] rounded-3xl p-6 sm:p-8 border border-stone-800 shadow-2xl space-y-6 text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-emerald-950 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-inner border border-emerald-700/50">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#DE1B76]">Appointment Reserved</span>
              <h3 className="text-2xl sm:text-3xl font-serif italic text-white">
                We're Getting Ready for You!
              </h3>
              <p className="text-sm text-stone-300 max-w-md mx-auto">
                Your booking details have been prepared. Our booking desk on {preferredPhone} is awaiting your session.
              </p>
            </div>

            {/* Reference Badge */}
            <div className="bg-[#1C1C24] p-4 rounded-2xl border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
              <div className="text-left">
                <div className="text-[11px] text-stone-400 font-semibold uppercase tracking-wider">Booking Reference</div>
                <div className="text-lg font-bold font-mono text-[#FF4B99]">{confirmedBookingId}</div>
              </div>
              <button
                onClick={copyBookingReference}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 bg-stone-900 rounded-full border border-stone-700 hover:bg-stone-800 text-stone-200 transition-colors shadow-xs cursor-pointer"
              >
                {copiedId ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedId ? 'Copied Reference!' : 'Copy Code'}</span>
              </button>
            </div>

            {/* Summary Details Grid */}
            <div className="text-left bg-[#1C1C24] p-5 rounded-2xl border border-stone-800 text-xs space-y-2 text-stone-300">
              <div className="flex justify-between py-1 border-b border-stone-800">
                <span className="font-medium text-stone-400">Client:</span>
                <span className="font-bold text-white">{fullName}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-800">
                <span className="font-medium text-stone-400">Date & Time:</span>
                <span className="font-bold text-white">{appointmentDate} at {appointmentTime}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-800">
                <span className="font-medium text-stone-400">Location:</span>
                <span className="font-bold text-white">
                  {serviceType === 'in-spa' ? 'KM 5, Ipaye Bus Stop, LASU-Isheri Rd' : `VIP Home Service (${homeAddress})`}
                </span>
              </div>
              <div className="py-1">
                <span className="font-medium text-stone-400 block mb-1">Treatments:</span>
                <ul className="space-y-1 pl-2">
                  {selectedServiceObjects.map(s => (
                    <li key={s.id} className="flex justify-between font-semibold">
                      <span>• {s.name}</span>
                      <span className="text-[#FF4B99]">₦{s.priceNaira.toLocaleString()}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between pt-2 border-t border-stone-800 text-sm font-bold text-white">
                <span>Estimated Subtotal:</span>
                <span className="text-[#FF4B99]">₦{totalPrice.toLocaleString()}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={handleWhatsAppBooking}
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg hover:bg-[#20ba59] transition-all cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Confirm on WhatsApp</span>
              </button>

              <button
                onClick={resetForm}
                className="inline-flex items-center gap-1 text-xs text-stone-400 underline hover:text-white py-2 px-3 cursor-pointer"
              >
                Book Another Appointment
              </button>
            </div>
          </div>
        ) : (
          /* Main Interactive Booking Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Step 1 & 2 Service Selector & Preferences */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Card 1: Service Location Type */}
              <div className="bg-[#14141A] p-5 sm:p-7 rounded-3xl border border-stone-800 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base sm:text-lg text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#DE1B76] text-white text-xs font-bold flex items-center justify-center">1</span>
                    <span>Choose Service Location</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setServiceType('in-spa')}
                    className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between hover:scale-[1.02] active:scale-98 ${
                      serviceType === 'in-spa'
                        ? 'border-[#DE1B76] bg-[#1E151E] ring-1 ring-[#DE1B76]/50 shadow-md shadow-[#DE1B76]/20'
                        : 'border-stone-800 hover:border-[#DE1B76]/50 hover:bg-[#1C1C26] bg-[#191922]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Building2 className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${serviceType === 'in-spa' ? 'text-[#DE1B76]' : 'text-stone-500'}`} />
                      {serviceType === 'in-spa' && <Check className="w-4 h-4 text-[#DE1B76]" />}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">In-Spa Experience</div>
                      <div className="text-xs text-stone-400 mt-0.5">KM 5, Ipaye Bus Stop, LASU-Isheri Road</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setServiceType('home-service')}
                    className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between hover:scale-[1.02] active:scale-98 ${
                      serviceType === 'home-service'
                        ? 'border-[#DE1B76] bg-[#1E151E] ring-1 ring-[#DE1B76]/50 shadow-md shadow-[#DE1B76]/20'
                        : 'border-stone-800 hover:border-[#DE1B76]/50 hover:bg-[#1C1C26] bg-[#191922]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Home className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${serviceType === 'home-service' ? 'text-[#DE1B76]' : 'text-stone-500'}`} />
                      {serviceType === 'home-service' && <Check className="w-4 h-4 text-[#DE1B76]" />}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">VIP Home Service</div>
                      <div className="text-xs text-stone-400 mt-0.5">We come to your doorstep in Lagos</div>
                    </div>
                  </button>
                </div>

                {serviceType === 'home-service' && (
                  <div className="pt-2 animate-in fade-in duration-200">
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Your Residence / Hotel / Event Address in Lagos *
                    </label>
                    <input
                      type="text"
                      value={homeAddress}
                      onChange={(e) => setHomeAddress(e.target.value)}
                      placeholder="e.g. 14 Festac Extension, or Apartment in Igando / Ikeja"
                      className="w-full px-4 py-3 rounded-xl border border-stone-800 bg-stone-900 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#DE1B76]"
                    />
                  </div>
                )}
              </div>

              {/* Card 2: Select Treatments */}
              <div className="bg-[#14141A] p-5 sm:p-7 rounded-3xl border border-stone-800 shadow-xl space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="font-bold text-base sm:text-lg text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#DE1B76] text-white text-xs font-bold flex items-center justify-center">2</span>
                    <span>Select Treatments & Services</span>
                  </h3>
                  <span className="text-xs font-semibold text-[#FF4B99] bg-[#DE1B76]/15 px-2.5 py-1 rounded-full border border-[#DE1B76]/30">
                    {selectedServices.length} selected
                  </span>
                </div>

                {/* Service pills/cards selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-96 overflow-y-auto pr-1">
                  {SPA_SERVICES.map((service) => {
                    const isSelected = selectedServices.includes(service.id);
                    return (
                      <div
                        key={service.id}
                        onClick={() => toggleService(service.id)}
                        className={`p-3.5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex items-start justify-between gap-2 hover:scale-[1.02] active:scale-98 ${
                          isSelected
                            ? 'border-[#DE1B76] bg-[#1E151E] ring-1 ring-[#DE1B76]/40 shadow-sm shadow-[#DE1B76]/20'
                            : 'border-stone-800 hover:border-[#DE1B76]/50 hover:bg-[#1C1C26] bg-[#191922]'
                        }`}
                      >
                        <div className="space-y-1">
                          <span className="text-[10px] uppercase font-bold text-[#DE1B76] tracking-wider">
                            {service.categoryLabel}
                          </span>
                          <div className="font-bold text-xs sm:text-sm text-white leading-snug">
                            {service.name}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-stone-400 pt-0.5">
                            <span className="font-bold text-[#FF4B99]">₦{service.priceNaira.toLocaleString()}</span>
                            <span>•</span>
                            <span className="flex items-center gap-0.5">
                              <Clock className="w-3 h-3 text-stone-500" />
                              {service.durationMinutes}m
                            </span>
                          </div>
                        </div>

                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-1 transition-transform duration-300 ${
                          isSelected ? 'bg-[#DE1B76] text-white scale-110' : 'border border-stone-700 bg-stone-900'
                        }`}>
                          {isSelected ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3 text-stone-500" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Card 3: Date, Time & Phone Desk */}
              <div className="bg-[#14141A] p-5 sm:p-7 rounded-3xl border border-stone-800 shadow-xl space-y-4">
                <h3 className="font-bold text-base sm:text-lg text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#DE1B76] text-white text-xs font-bold flex items-center justify-center">3</span>
                  <span>Date, Time & Desk</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      value={appointmentDate}
                      onChange={(e) => setAppointmentDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-800 bg-stone-900 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#DE1B76]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Preferred Time Slot *
                    </label>
                    <select
                      value={appointmentTime}
                      onChange={(e) => setAppointmentTime(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-800 bg-stone-900 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#DE1B76]"
                    >
                      <option value="8:30 AM">8:30 AM (Morning Glow)</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="1:00 PM">1:00 PM (Afternoon Refresh)</option>
                      <option value="2:30 PM">2:30 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:30 PM">5:30 PM (Evening Relaxation)</option>
                      <option value="7:00 PM">7:00 PM (Night Therapy)</option>
                      <option value="8:00 PM">8:00 PM (Last Slot)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    MagKay Direct Booking Contacts
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-2.5 p-3 rounded-xl border border-stone-800 bg-stone-900 text-stone-300">
                      <Phone className="w-4 h-4 text-[#DE1B76] shrink-0" />
                      <div>
                        <div className="text-[10px] text-stone-400 font-semibold uppercase">Direct Voice Call</div>
                        <div className="font-bold text-white font-mono">{SPA_INFO.phoneCallFormatted}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 p-3 rounded-xl border border-stone-800 bg-stone-900 text-stone-300">
                      <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                      <div>
                        <div className="text-[10px] text-stone-400 font-semibold uppercase">Official WhatsApp</div>
                        <div className="font-bold text-white font-mono">{SPA_INFO.phoneWhatsAppFormatted}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Step 4 Client Details & Booking Cart Checkout */}
            <div className="lg:col-span-5 space-y-6 text-left">
              
              {/* Client Details Form */}
              <div className="bg-[#14141A] p-5 sm:p-7 rounded-3xl border border-stone-800 shadow-xl space-y-4">
                <h3 className="font-bold text-base sm:text-lg text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#DE1B76] text-white text-xs font-bold flex items-center justify-center">4</span>
                  <span>Your Contact Information</span>
                </h3>

                {validationError && (
                  <div className="p-3 bg-red-950/80 text-red-300 text-xs rounded-xl flex items-center gap-2 border border-red-800">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{validationError}</span>
                  </div>
                )}

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-stone-500 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Your Full Name"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-800 bg-stone-900 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#DE1B76]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1">
                        Phone Call Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-stone-500 absolute left-3.5 top-3" />
                        <input
                          type="tel"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="080 1234 5678"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-800 bg-stone-900 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#DE1B76]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1">
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        value={whatsappNumber}
                        onChange={(e) => setWhatsappNumber(e.target.value)}
                        placeholder="Same as call number"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-800 bg-stone-900 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#DE1B76]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Special Skin / Treatment Notes
                    </label>
                    <textarea
                      rows={2}
                      value={additionalNotes}
                      onChange={(e) => setAdditionalNotes(e.target.value)}
                      placeholder="Any specific requirements or skin details?"
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-800 bg-stone-900 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#DE1B76] resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Order Summary & Dispatch Box */}
              <div className="bg-[#171720] text-white p-5 sm:p-7 rounded-3xl border border-stone-800 shadow-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                  <span className="font-serif italic text-xl text-[#DE1B76]">Appointment Summary</span>
                  <span className="text-[11px] bg-black/60 text-stone-300 px-3 py-1 rounded-full font-mono border border-stone-800">
                    {serviceType === 'in-spa' ? 'KM 5 LASU Road' : 'VIP Home'}
                  </span>
                </div>

                {/* Selected Treatments List */}
                <div className="space-y-2 min-h-[80px]">
                  {selectedServiceObjects.length === 0 ? (
                    <div className="text-xs text-stone-400 italic text-center py-4">
                      No treatments selected yet. Pick from the left menu!
                    </div>
                  ) : (
                    selectedServiceObjects.map((s) => (
                      <div key={s.id} className="flex items-center justify-between text-xs py-1 text-stone-300 border-b border-stone-800/60">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => removeService(s.id)}
                            className="text-stone-500 hover:text-red-400 p-0.5"
                            title="Remove"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                          <span className="font-medium text-stone-200">{s.name}</span>
                        </div>
                        <span className="font-bold text-[#FF4B99]">₦{s.priceNaira.toLocaleString()}</span>
                      </div>
                    ))
                  )}
                </div>

                {/* Subtotal & Duration Breakdown */}
                <div className="pt-2 border-t border-stone-800 space-y-1.5 text-xs text-stone-300">
                  <div className="flex justify-between">
                    <span>Estimated Duration:</span>
                    <span className="font-semibold text-stone-100">{totalDuration} minutes</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-white pt-1">
                    <span>Total Estimate:</span>
                    <span className="text-[#FF4B99] font-serif text-xl">₦{totalPrice.toLocaleString()}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2.5 pt-2">
                  <button
                    type="button"
                    onClick={handleWhatsAppBooking}
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg hover:shadow-xl hover:shadow-[#25D366]/30 hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                    <span>Send Booking via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleDirectReservation}
                    className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 active:scale-95 text-stone-200 hover:text-white py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider border border-white/10 hover:border-white/20 hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#DE1B76] transition-transform duration-300 group-hover:scale-110" />
                    <span>Generate Booking Summary Pass</span>
                  </button>
                </div>

                <div className="text-[11px] text-stone-400 text-center pt-1">
                  🔒 No upfront card payment required online. Pay via Transfer or POS in-spa.
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
