import React from 'react';

const Services: React.FC = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-blue-800 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Cooperation Cases</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        Successful partnerships and proven results across industries
                    </p>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
                        <p className="text-xl text-gray-600">
                            See how we've helped businesses achieve their monitoring goals
                        </p>
                    </div>

                    <div className="space-y-12">
                        {/* Case 1 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="md:flex">
                                <div className="md:w-1/3 bg-gray-200 h-64 md:h-auto flex items-center justify-center">
                                    <span className="text-gray-500 text-lg">Client Logo</span>
                                </div>
                                <div className="md:w-2/3 p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        Global E-commerce Platform
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Implemented comprehensive monitoring solution for a major e-commerce 
                                        platform serving millions of customers worldwide.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <h4 className="font-semibold text-blue-600">Challenge</h4>
                                            <p className="text-sm text-gray-600">
                                                Frequent downtime affecting sales
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-green-600">Result</h4>
                                            <p className="text-sm text-gray-600">
                                                99.9% uptime, 40% faster response
                                            </p>
                                        </div>
                                    </div>
                                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                        E-commerce
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Case 2 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="md:flex">
                                <div className="md:w-1/3 bg-gray-200 h-64 md:h-auto flex items-center justify-center">
                                    <span className="text-gray-500 text-lg">Client Logo</span>
                                </div>
                                <div className="md:w-2/3 p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        Financial Services Company
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Deployed advanced security monitoring and compliance tracking 
                                        for a leading financial institution.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <h4 className="font-semibold text-blue-600">Challenge</h4>
                                            <p className="text-sm text-gray-600">
                                                Complex compliance requirements
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-green-600">Result</h4>
                                            <p className="text-sm text-gray-600">
                                                100% compliance, 60% risk reduction
                                            </p>
                                        </div>
                                    </div>
                                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                        Financial Services
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Case 3 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="md:flex">
                                <div className="md:w-1/3 bg-gray-200 h-64 md:h-auto flex items-center justify-center">
                                    <span className="text-gray-500 text-lg">Client Logo</span>
                                </div>
                                <div className="md:w-2/3 p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        Healthcare Network
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Integrated monitoring solution across multiple healthcare facilities 
                                        to ensure critical system availability.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <h4 className="font-semibold text-blue-600">Challenge</h4>
                                            <p className="text-sm text-gray-600">
                                                Critical system reliability
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-green-600">Result</h4>
                                            <p className="text-sm text-gray-600">
                                                Zero critical incidents, 24/7 monitoring
                                            </p>
                                        </div>
                                    </div>
                                    <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                                        Healthcare
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics */}
            <section className="py-16 bg-blue-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">500+</div>
                            <div className="text-blue-200">Satisfied Clients</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">99.9%</div>
                            <div className="text-blue-200">Average Uptime</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">24/7</div>
                            <div className="text-blue-200">Support Coverage</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">50+</div>
                            <div className="text-blue-200">Countries Served</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;