import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <header className="bg-white shadow-sm py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-bold text-green-600">
                            Financio
                        </h1>
                        <nav className="flex space-x-4">
                            <Link
                                to="/login"
                                className="text-green-600 font-semibold px-4 py-2 border border-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-colors duration-200"
                            >
                                Login
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-5xl font-bold text-gray-900 mb-6">
                        Take Control of Your Finances
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                        Financio helps you manage your money, track your spending, and achieve your financial goals with ease.
                    </p>

                    <Link
                        to="/app/dashboard"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 mb-16"
                    >
                        Get Started for Free
                    </Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Key Features
                        </h3>
                        <p className="text-lg text-gray-600">
                            Explore the powerful features that make Financio your ultimate financial companion.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            title="Smart Budgeting"
                            description="Create and manage budgets effortlessly to stay on top of your spending and savings."
                            icon="💰"
                        />
                        <FeatureCard
                            title="Investment Tracking"
                            description="Monitor your investments and portfolio performance in real-time with insightful analytics."
                            icon="📈"
                        />
                        <FeatureCard
                            title="Secure Transactions"
                            description="Enjoy bank-level security and encrypted transactions for complete peace of mind."
                            icon="🔒"
                        />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 bg-green-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                        About Us
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        At Financio, we're passionate about empowering individuals to achieve financial freedom.
                        Our team of experts is dedicated to providing innovative solutions and personalized support
                        to help you succeed on your financial journey.
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-4xl font-bold text-white mb-4">
                        Ready to Transform Your Financial Future?
                    </h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Join thousands of users who are already benefiting from Financio's powerful features.
                    </p>
                    <Link
                        to="/app/dashboard"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
                    >
                        Sign Up Now
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white py-8 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-600">
                        © 2025 Financio. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

// Feature Card Component
interface FeatureCardProps {
    title: string;
    description: string;
    icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow duration-200">
            <div className="text-4xl mb-4">{icon}</div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">{title}</h4>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
};

export default LandingPage;
