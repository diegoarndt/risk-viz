import React from 'react';

const Header = () => {
  return (
    <header className='sticky top-0 bg-white shadow-md z-50'>
      <nav className='container mx-auto px-4 py-2 flex items-center justify-between'>
        <div>
          <a href='/' className='text-xl font-bold text-black'>
            Risk Viz
          </a>
        </div>
        <ul className='flex items-center'>
          <li className='ml-4'>
            <a href='/about' className='text-gray-600 hover:text-gray-800'>
              Map
            </a>
          </li>
          <li className='ml-4'>
            <a href='/contact' className='text-gray-600 hover:text-gray-800'>
              Data table
            </a>
          </li>
          <li className='ml-4'>
            <a href='/contact' className='text-gray-600 hover:text-gray-800'>
              Chart
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
