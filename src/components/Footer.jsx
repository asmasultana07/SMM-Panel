import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';

const socials = [
  { name: 'Facebook', icon: FaFacebookF, bg: '#1877F2' },
  { name: 'Instagram', icon: FaInstagram, bg: '#E1306C' },
  { name: 'X', icon: FaXTwitter, bg: '#1a1a1a' },
  { name: 'LinkedIn', icon: FaLinkedinIn, bg: '#0A66C2' },
  { name: 'YouTube', icon: FaYoutube, bg: '#FF0000' },
];

const quickLinks = ['Home', 'About Us', 'Services', 'FAQ'];

const companyLinks = ['Terms Of Services', 'Privacy Policy', 'Refund Policy', 'FAQs', 'Contact Us'];

const contactInfo = [
  { icon: FiMail, text: 'info@smmpanel.com' },
  { icon: FiPhone, text: '+880 1400715037' },
  { icon: FiMapPin, text: '4093 Overlook Drive, Richmond, IN 47374' },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0b0b0b] text-white w-full">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(ellipse_at_bottom,#F47B20_0%,#C4272E_35%,#3D1053_65%,transparent_75%)] opacity-40 blur-3xl" />
      {/* Star field */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[length:26px_26px] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xl font-bold">SMM Panel</h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              SMM PANEL is a leading and reliable social media marketing platform committed to providing fast, effective, and premium growth solutions across all popular social networks.
            </p>
            <div className="space-y-3">
              <h4 className="text-sm font-bold">Follow Us</h4>
              <div className="flex items-center gap-2">
                {socials.map(({ name, icon: Icon, bg }) => (
                  <a
                    key={name}
                    href="#"
                    aria-label={name}
                    className="w-8 h-8 rounded-md flex items-center justify-center text-white text-xs hover:opacity-80 transition-opacity"
                    style={{ backgroundColor: bg }}
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-sm font-bold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold">Contact Info</h4>
            <ul className="space-y-3">
              {contactInfo.map(({ icon: Icon, text }, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-md bg-[#F47B20] flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={12} className="text-white" />
                  </span>
                  <span className="text-sm text-gray-300 leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-center">
          <p className="text-xs text-gray-300">
            © 2026 HQ Promo. We are not affiliated with any social media platforms mentioned on this website. We only provide social media marketing services.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
