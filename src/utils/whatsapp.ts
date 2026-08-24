import { BookingFormData, SpaService, SkincareProduct } from '../types';
import { SPA_INFO, SPA_SERVICES } from '../data/spaData';

/**
 * Format a WhatsApp message for appointment booking
 */
export function generateBookingWhatsAppUrl(booking: BookingFormData, services: SpaService[]): string {
  const selectedServiceNames = booking.selectedServices
    .map(id => {
      const s = services.find(item => item.id === id);
      return s ? `• ${s.name} (₦${s.priceNaira.toLocaleString()} - ${s.durationMinutes} mins)` : '';
    })
    .filter(Boolean)
    .join('\n');

  const totalPrice = booking.selectedServices.reduce((sum, id) => {
    const s = services.find(item => item.id === id);
    return sum + (s ? s.priceNaira : 0);
  }, 0);

  const totalDuration = booking.selectedServices.reduce((sum, id) => {
    const s = services.find(item => item.id === id);
    return sum + (s ? s.durationMinutes : 0);
  }, 0);

  const phoneChoice = '2348091537732';

  const message = `✨ *MAGKAY SPA & SALON - APPOINTMENT BOOKING* ✨

Hello MagKay Spa Team! I would like to book an appointment.

👤 *Client Name:* ${booking.fullName}
📞 *Phone Number:* ${booking.phoneNumber}
💬 *WhatsApp Number:* ${booking.whatsappNumber}

🏢 *Service Location:* ${booking.serviceType === 'in-spa' ? 'In-Spa (KM 5, Ipaye Bus Stop, LASU-Isheri Road)' : `VIP Home Service\n📍 *Address:* ${booking.homeAddress || 'To be specified'}`}

📅 *Preferred Date:* ${booking.appointmentDate}
⏰ *Preferred Time:* ${booking.appointmentTime}

🧖‍♀️ *Selected Treatments:*
${selectedServiceNames || '• Not selected yet (please recommend)'}

💰 *Estimated Subtotal:* ₦${totalPrice.toLocaleString()}
⏱ *Estimated Duration:* approx. ${totalDuration} mins

📝 *Special Notes / Skin Requirements:*
${booking.additionalNotes ? booking.additionalNotes : 'None'}

Please confirm availability and booking details. Thank you!`;

  return `https://wa.me/${phoneChoice}?text=${encodeURIComponent(message)}`;
}

/**
 * Format a WhatsApp message for a single service inquiry
 */
export function generateServiceInquiryUrl(service: SpaService, phone: string = SPA_INFO.phonePrimary): string {
  const cleanPhone = phone.replace(/^0/, '234');
  const message = `Hello MagKay Spa! 🌸 
I would like to inquire about/book the *${service.name}* (₦${service.priceNaira.toLocaleString()} - ${service.durationMinutes} mins).

Can you please share available time slots at your KM 5 LASU-Isheri center or home service options? Thank you!`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Format a WhatsApp message for a skincare product order
 */
export function generateProductOrderUrl(product: SkincareProduct, quantity: number = 1, phone: string = SPA_INFO.phonePrimary): string {
  const cleanPhone = phone.replace(/^0/, '234');
  const totalPrice = product.priceNaira * quantity;
  const message = `Hello MagKay Skincare Team! ✨
I would like to order:
🛍️ *Product:* ${product.name} (${product.size})
📦 *Quantity:* ${quantity}
💰 *Total:* ₦${totalPrice.toLocaleString()}

Please confirm payment details and delivery/pickup at KM 5 Ipaye Bus Stop, LASU-Isheri Road. Thank you!`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Format general quick chat
 */
export function generateGeneralChatUrl(phone: string = SPA_INFO.phonePrimary, text: string = "Hello MagKay Spa! I would like to inquire about your services and available appointments."): string {
  const cleanPhone = phone.replace(/^0/, '234');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}
