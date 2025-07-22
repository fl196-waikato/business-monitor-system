import React from 'react';

const Products: React.FC = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-blue-800 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        Comprehensive monitoring solutions tailored to your business needs
                    </p>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        
                        {/* Product 1 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                                <h3 className="text-2xl font-bold text-white">Enterprise Monitor Pro</h3>
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-semibold mb-3">Real-time System Monitoring</h4>
                                <p className="text-gray-600 mb-4">
                                    Monitor your entire infrastructure in real-time with advanced analytics 
                                    and intelligent alerting systems.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                    <li>• 24/7 system monitoring</li>
                                    <li>• Custom dashboard creation</li>
                                    <li>• Automated alert notifications</li>
                                    <li>• Performance analytics</li>
                                </ul>
                                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        {/* Product 2 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="h-48 bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                                <h3 className="text-2xl font-bold text-white">Data Analytics Suite</h3>
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-semibold mb-3">Advanced Data Analysis</h4>
                                <p className="text-gray-600 mb-4">
                                    Transform your monitoring data into actionable insights with our 
                                    powerful analytics platform.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                    <li>• Predictive analytics</li>
                                    <li>• Custom reporting tools</li>
                                    <li>• Machine learning insights</li>
                                    <li>• Data visualization</li>
                                </ul>
                                <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        {/* Product 3 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="h-48 bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                                <h3 className="text-2xl font-bold text-white">Security Shield</h3>
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-semibold mb-3">Comprehensive Security</h4>
                                <p className="text-gray-600 mb-4">
                                    Protect your systems with our advanced security monitoring and 
                                    threat detection capabilities.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                    <li>• Threat detection & prevention</li>
                                    <li>• Security compliance monitoring</li>
                                    <li>• Incident response automation</li>
                                    <li>• Vulnerability assessments</li>
                                </ul>
                                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        {/* Product 4 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="h-48 bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                                <h3 className="text-2xl font-bold text-white">Cloud Integration</h3>
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-semibold mb-3">Seamless Cloud Monitoring</h4>
                                <p className="text-gray-600 mb-4">
                                    Monitor your cloud infrastructure across multiple platforms with 
                                    unified visibility and control.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                    <li>• Multi-cloud support</li>
                                    <li>• Resource optimization</li>
                                    <li>• Cost monitoring</li>
                                    <li>• Auto-scaling alerts</li>
                                </ul>
                                <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;