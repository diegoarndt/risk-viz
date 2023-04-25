import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-100'>
      <div className='container mx-auto px-4 py-2 text-center'>
        <p className='text-gray-600'>
          &copy; {new Date().getFullYear()} Handcrafted by Diego Arndt
        </p>
      </div>
    </footer>
  );
};

export default Footer;
