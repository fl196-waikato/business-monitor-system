import React from 'react';

const About: React.FC = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-blue-800 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        Leading the future of enterprise monitoring solutions
                    </p>
                </div>
            </section>

            {/* Company Story */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                            <p className="text-lg text-gray-600 mb-4">
                                Founded in 2025, our company has been at the forefront of enterprise monitoring 
                                technology, providing innovative solutions to businesses worldwide.
                            </p>
                            <p className="text-lg text-gray-600 mb-4">
                                We believe in the power of real-time data and intelligent monitoring to 
                                transform how businesses operate and make decisions.
                            </p>
                            <p className="text-lg text-gray-600">
                                Today, we serve over 500+ companies globally, helping them achieve 
                                operational excellence through our cutting-edge monitoring platforms.
                            </p>
                        </div>
                        <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                            <span className="text-gray-500 text-lg">Company Image Placeholder</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="text-center p-8 bg-white rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-600">
                                To empower businesses with intelligent monitoring solutions that 
                                drive efficiency, prevent downtime, and enable data-driven decisions.
                            </p>
                        </div>
                        <div className="text-center p-8 bg-white rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-600">
                                To be the global leader in enterprise monitoring technology, 
                                setting new standards for reliability and innovation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="text-center">
                                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-gray-500">Photo</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Team Member {i}</h3>
                                <p className="text-gray-600">Position Title</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;