import React from 'react';
import CONTACT from '../config/contact';

interface Props {
  whatsapp?: string;
  phone?: string;
  email?: string;
}

const ContactBar: React.FC<Props> = ({ whatsapp, phone, email }) => {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${whatsapp || CONTACT.whatsapp}`;
    window.open(url, '_blank');
  };
  const handleCall = () => {
    window.location.href = `tel:${phone || CONTACT.phone}`;
  };
  const handleEmail = () => {
    window.location.href = `mailto:${email || CONTACT.email}`;
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg py-4 px-4 md:px-8 flex justify-around">
      <button
        onClick={handleWhatsApp}
        className="bg-primary text-white px-4 py-2 rounded"
      >
        WhatsApp
      </button>
      <button
        onClick={handleCall}
        className="bg-secondary text-white px-4 py-2 rounded"
      >
        Call
      </button>
      <button
        onClick={handleEmail}
        className="border border-primary text-primary px-4 py-2 rounded"
      >
        Email
      </button>
    </div>
  );
};

export default ContactBar;