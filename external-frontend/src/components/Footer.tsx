import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-blue-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* navigation links */}
                    <div className="bg-gradient-to-r from-blue-400 to-blue-700 p-6 rounded-lg shadow-lg">
                        <h3 className="text-white font-semibold mb-4 text-sm">Quick Navigation</h3>
                        <ul className="space-y-2 justify-left text-sm text-gray-300">
                            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="/products" className="hover:text-white transition-colors">Products Introduction</a></li>
                            <li><a href="/services" className="hover:text-white transition-colors">Cooperation Cases</a></li>
                            <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    
                    {/* company information */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center mb-4">
                            <img className="h-6 w-auto" src="/smart-weave.png" alt="company logo" />
                            <span className="text-white text-lg font-bold ml-2">Company Name</span>
                        </div>
                        <p className="text-gray-300 text-sm mb-4">
                            Lightweight, AI-integrated business operation platform designed for modern teams. It intelligently connects customer inputs, sales workflows, and support ticketing with automated prompts and real-time data insights-all woven into one seamless system.
                        </p>
                    
                        {/* contact information */}
                        <div className="space-y-2 text-sm text-gray-300">
                            <div className="flex items-center">
                                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                <span>New Zealand, Auckland, xxx Street, xxx Building</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                                </svg>
                                <span>+64 123 1234 1234</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                <span>contact@company.com</span>
                            </div>
                        </div>
                    </div>

                    

                </div>
                {/* copyright */}
                <div className="border-t border-gray-600 mt-8 mb-2 pt-4 pd-4 text-center text-sm text-gray-400">
                    <p>&copy; 2025 Company Name. All rights reserved.</p>
                </div>          
            </div>
        </footer>
    );
};

export default Footer;