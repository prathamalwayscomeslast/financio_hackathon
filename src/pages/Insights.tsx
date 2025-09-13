import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import Card from '../components/ui/Card';
import { InsightData } from '../types';

const Insights: React.FC = () => {
    const [insights, setInsights] = useState<InsightData | null>(null);

    useEffect(() => {
        // TODO: Replace with actual API calls
        setInsights({
            spendingTrends: [
                { category: 'Food', amount: 800, change: 5 },
                { category: 'Rent', amount: 1500, change: 0 },
                { category: 'Utilities', amount: 200, change: -3 },
                { category: 'Fun', amount: 300, change: 10 },
                { category: 'Transport', amount: 250, change: 2 }
            ],
            savingsForecasts: [
                { month: 'Jul', projected: 1000 },
                { month: 'Aug', projected: 1200 },
                { month: 'Sep', projected: 1100 },
                { month: 'Oct', projected: 1300 },
                { month: 'Nov', projected: 1400 },
                { month: 'Dec', projected: 1500 }
            ],
            investmentPerformance: {
                ytdPerformance: 8,
                allocation: {
                    stocks: 35,
                    bonds: 25,
                    realEstate: 20,
                    crypto: 20
                }
            }
        });
    }, []);

    if (!insights) return <div>Loading...</div>;

    const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444'];
    const pieData = Object.entries(insights.investmentPerformance.allocation).map(([key, value]) => ({
        name: key.charAt(0).toUpperCase() + key.slice(1),
        value
    }));

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <h1 className="text-2xl font-bold text-gray-900">Insights</h1>
                    <p className="text-gray-600">AI-powered insights to help you make smarter financial decisions.</p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Spending Trends */}
                <Card className="mb-8">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900">Monthly Spending by Category</h3>
                        <p className="text-sm text-gray-600">This Month: $2,450 <span className="text-green-600">↑ 5%</span></p>
                    </div>
                    <div className="p-6">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={insights.spendingTrends}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="category" />
                                <YAxis />
                                <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
                                <Bar dataKey="amount" fill="#10b981" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Savings Forecast */}
                    <Card>
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900">Projected Savings Growth</h3>
                            <p className="text-sm text-gray-600">Next 12 Months: $5,000 <span className="text-green-600">↑ 15%</span></p>
                        </div>
                        <div className="p-6">
                            <ResponsiveContainer width="100%" height={250}>
                                <LineChart data={insights.savingsForecasts}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip formatter={(value) => [`$${value}`, 'Projected']} />
                                    <Line type="monotone" dataKey="projected" stroke="#10b981" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>

                    {/* Investment Performance */}
                    <Card>
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900">Portfolio Performance</h3>
                            <p className="text-sm text-gray-600">Year to Date: +{insights.investmentPerformance.ytdPerformance}% <span className="text-green-600">↑ 2%</span></p>
                        </div>
                        <div className="p-6">
                            <ResponsiveContainer width="100%" height={250}>
                                <PieChart>
                                    <Pie
                                        data={pieData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {pieData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default Insights;
