import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const footerLinks = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'How it Works', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    getHelp: [
      { name: 'Support Career', href: '#' },
      { name: '24h Service', href: '#' },
      { name: 'Quick Chat', href: '#' },
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Policy', href: '#' },
      { name: 'Business', href: '#' },
    ],
    contact: [
      { name: 'WhatsApp', href: '#' },
      { name: 'Support 24', href: '#' },
    ],
  };

  return (
    <footer className='bg-gray-100 pt-16 pb-8  px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          {/* Company Links */}
          <div>
            <h3 className='text-lg font-semibold text-gray-900 mb-4'>Company</h3>
            <ul className='space-y-3'>
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className='text-gray-600 hover:text-blue-600 transition-colors duration-200'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Help Links */}
          <div>
            <h3 className='text-lg font-semibold text-gray-900 mb-4'>Get Help</h3>
            <ul className='space-y-3'>
              {footerLinks.getHelp.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className='text-gray-600 hover:text-blue-600 transition-colors duration-200'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className='text-lg font-semibold text-gray-900 mb-4'>Support</h3>
            <ul className='space-y-3'>
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className='text-gray-600 hover:text-blue-600 transition-colors duration-200'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className='text-lg font-semibold text-gray-900 mb-4'>Contact</h3>
            <ul className='space-y-3'>
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className='text-gray-600 hover:text-blue-600 transition-colors duration-200'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className='mt-6 flex space-x-4'>
              <a href="#" className='text-gray-500 hover:text-blue-600'>
                <FaFacebook className='w-5 h-5' />
              </a>
              <a href="#" className='text-gray-500 hover:text-blue-600'>
                <FaTwitter className='w-5 h-5' />
              </a>
              <a href="#" className='text-gray-500 hover:text-blue-600'>
                <FaInstagram className='w-5 h-5' />
              </a>
              <a href="#" className='text-gray-500 hover:text-blue-600'>
                <FaLinkedin className='w-5 h-5' />
              </a>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-500 text-sm mb-4 md:mb-0'>
            © {new Date().getFullYear()} Md.Miskatul Masabi. All rights reserved.
          </p>
          <div className='flex space-x-6'>
            <a href="#" className='text-gray-500 hover:text-gray-700 text-sm'>
              Terms of Service
            </a>
            <a href="#" className='text-gray-500 hover:text-gray-700 text-sm'>
              Privacy Policy
            </a>
            <a href="#" className='text-gray-500 hover:text-gray-700 text-sm'>
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;