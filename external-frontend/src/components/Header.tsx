import React from 'react';

const Header: React.FC = ()=>{
    return (
        <header className="bg-blue-800 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  {/* logo */}
                  <div className="flex items-center space-x-2">
                     <img className="h-12 w-auto" src="/smart-weave.png" alt="company logo" />
                     <span className='text-white text-xl font-bold '>Company Name</span>
                  </div>
                  {/* phone number */}
                  <div className='hidden md=flex items-center text-sm text-gray-600 '>
                    <svg className="h-8 w-auto mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                    </svg>
                    <span className='text-white'> +64 123 1234 1234</span>
                  </div>
                   {/* navigation */}
                   <nav className='hidden md:flex space-x-4'>
                       <a href="/" className='text-white hover:text-gray-400 px-3 py-2' >Home</a>
                       <a href="/about" className='text-white hover:text-gray-400 px-3 py-2'>About Us</a>
                       <a href="/products" className='text-white hover:text-gray-400 px-3 py-2'>Products Introduction</a>
                       <a href="/services" className='text-white hover:text-gray-400 px-3 py-2'>Cooperation Cases</a>
                       <a href="/contact" className='text-white hover:text-gray-400 px-3 py-2'>Contact</a>
                   </nav>

                    {/* menu button in the mobile view */}
                    <div className="md:hidden">
                       <button className="text-gray-700 hover:text-primary-600">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                          </svg>
                       </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;