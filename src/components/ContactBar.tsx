import React from 'react';
import { Phone, Mail } from 'lucide-react';
import CONTACT from '../config/contact';

interface Props {
  whatsapp?: string;
  phone?: string;
  email?: string;
}

const ContactBar: React.FC<Props> = ({ whatsapp, phone, email }) => {

  const wa = (whatsapp || CONTACT.whatsapp || '').replace(/[^0-9]/g, '');
  const ph = phone || CONTACT.phone;
  const em = email || CONTACT.email;

  return (

    /* Bottom-left small horizontal icons */
    <div className="fixed bottom-5 left-5 z-40 flex gap-2">

      {/* WhatsApp */}
      <button
        onClick={() => window.open(`https://wa.me/${wa}`, '_blank')}
        className="w-9 h-9 rounded-full shadow-md flex items-center justify-center hover:scale-105 transition"
        style={{ backgroundColor: '#25D366' }}
      >
        <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
          <path d="M20 3.5A10 10 0 004.3 17.7L3 21l3.4-1.3A10 10 0 1020 3.5zM12 20a8 8 0 01-4-1.1l-.3-.2-2.1.8.8-2.1-.2-.3A8 8 0 1112 20zm4.5-6.1c-.2-.1-1.3-.6-1.5-.7-.2-.1-.3-.1-.5.1s-.6.7-.7.8c-.1.1-.2.1-.4 0a6.6 6.6 0 01-2-1.2 7.4 7.4 0 01-1.4-1.7c-.1-.2 0-.3.1-.4l.3-.3c.1-.1.2-.2.3-.4.1-.1.1-.3 0-.4l-.7-1.6c-.2-.4-.3-.3-.5-.3h-.4c-.1 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.4.9 2.6c.1.2 1.6 2.5 3.9 3.5.5.2.9.3 1.2.4.5.2 1 .2 1.4.1.4-.1 1.3-.5 1.5-1 .2-.5.2-.9.1-1 0-.1-.2-.2-.4-.3z"/>
        </svg>
      </button>

      {/* Call */}
      <button
        onClick={() => window.location.href = `tel:${ph}`}
        className="w-9 h-9 rounded-full shadow-md flex items-center justify-center hover:scale-105 transition"
        style={{ backgroundColor: '#1877F2' }}
      >
        <Phone size={16} color="white" />
      </button>

      {/* Email */}
      <button
        onClick={() => window.location.href = `mailto:${em}`}
        className="w-9 h-9 rounded-full shadow-md flex items-center justify-center hover:scale-105 transition"
        style={{ backgroundColor: '#EA4335' }}
      >
        <Mail size={16} color="white" />
      </button>

    </div>

  );
};

export default ContactBar;