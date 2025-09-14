import React, { useEffect, useState } from 'react';

declare global {
    interface Window {
        Chart: any;
    }
}

// 🎯 DEFINE PROPER TYPESCRIPT INTERFACES
interface ChartData {
    spending_chart: {
        labels: string[];
        data: number[];
    };
    savings_chart: {
        labels: string[];
        data: number[];
    };
    investment_chart: {
        labels: string[];
        data: number[];
    };
    allocation_chart: {
        labels: string[];
        data: number[];
    };
    period: string;
}

// 🔥 ACCEPT USERID AS PROP - COMPLETELY DYNAMIC!
interface ChartsProps {
    userId: string;
}

const Charts: React.FC<ChartsProps> = ({ userId }) => {
    // ✅ Properly typed useState
    const [chartsData, setChartsData] = useState<ChartData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    // 🔥 FETCH DATA DYNAMICALLY BASED ON PASSED USERID
    useEffect(() => {
        const fetchChartsData = async () => {
            if (!userId) return;

            try {
                setLoading(true);
                const response = await fetch(`/api/v1/dashboard/charts?user_id=${userId}&period=6months`);

                if (response.ok) {
                    const data: ChartData = await response.json();
                    setChartsData(data);
                } else {
                    console.error('Failed to fetch charts data');
                }
            } catch (error) {
                console.error('Error fetching charts data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchChartsData();
    }, [userId]); // ✅ Re-fetch when userId changes

    useEffect(() => {
        // Load Chart.js
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
        script.onload = () => {
            if (chartsData) {
                initializeCharts();
            }
        };
        document.head.appendChild(script);

        return () => {
            // Cleanup existing charts
            const chartIds = ['spendingChart', 'savingsChart', 'investmentChart', 'allocationPieChart'];
            chartIds.forEach(id => {
                const canvas = document.getElementById(id) as HTMLCanvasElement;
                if (canvas && window.Chart) {
                    const existingChart = window.Chart.getChart(canvas);
                    if (existingChart) {
                        existingChart.destroy();
                    }
                }
            });

            if (document.head.contains(script)) {
                document.head.removeChild(script);
            }
        };
    }, [chartsData]);

    const initializeCharts = () => {
        if (!window.Chart || !chartsData) return;

        const { Chart } = window;

        // Spending Chart - USE DYNAMIC DATA
        const spendingCtx = (document.getElementById('spendingChart') as HTMLCanvasElement)?.getContext('2d');
        if (spendingCtx) {
            new Chart(spendingCtx, {
                type: 'bar',
                data: {
                    labels: chartsData.spending_chart.labels,
                    datasets: [{
                        label: 'Spending',
                        data: chartsData.spending_chart.data,
                        backgroundColor: 'rgba(19, 164, 236, 0.2)',
                        borderColor: 'rgba(19, 164, 236, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }

        // Savings Chart - USE DYNAMIC DATA
        const savingsCtx = (document.getElementById('savingsChart') as HTMLCanvasElement)?.getContext('2d');
        if (savingsCtx) {
            new Chart(savingsCtx, {
                type: 'line',
                data: {
                    labels: chartsData.savings_chart.labels,
                    datasets: [{
                        label: 'Savings',
                        data: chartsData.savings_chart.data,
                        fill: false,
                        borderColor: 'rgb(7, 136, 54)',
                        tension: 0.1
                    }]
                },
                options: {
                    responsive: true
                }
            });
        }

        // Investment Chart - USE DYNAMIC DATA
        const investmentCtx = (document.getElementById('investmentChart') as HTMLCanvasElement)?.getContext('2d');
        if (investmentCtx) {
            new Chart(investmentCtx, {
                type: 'line',
                data: {
                    labels: chartsData.investment_chart.labels,
                    datasets: [{
                        label: 'Portfolio Value',
                        data: chartsData.investment_chart.data,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1,
                        fill: true,
                        backgroundColor: 'rgba(75, 192, 192, 0.1)'
                    }]
                },
                options: {
                    responsive: true
                }
            });
        }

        // Allocation Pie Chart - USE DYNAMIC DATA
        const allocationCtx = (document.getElementById('allocationPieChart') as HTMLCanvasElement)?.getContext('2d');
        if (allocationCtx) {
            new Chart(allocationCtx, {
                type: 'pie',
                data: {
                    labels: chartsData.allocation_chart.labels,
                    datasets: [{
                        label: 'Allocation',
                        data: chartsData.allocation_chart.data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.7)',
                            'rgba(54, 162, 235, 0.7)',
                            'rgba(255, 206, 86, 0.7)',
                            'rgba(75, 192, 192, 0.7)'
                        ],
                        hoverOffset: 4
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'right',
                        }
                    }
                }
            });
        }
    };

    // Loading state
    if (loading) {
        return (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="summary-card animate-pulse">
                        <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
                        <div className="h-64 bg-gray-100 rounded"></div>
                    </div>
                ))}
            </div>
        );
    }

    // No data state
    if (!chartsData) {
        return (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="summary-card col-span-full text-center py-12">
                    <p className="text-gray-500">No chart data available for this user!</p>
                </div>
            </div>
        );
    }

    // Keep your existing JSX exactly the same
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="summary-card col-span-1">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Spending Trends</h3>
                <canvas id="spendingChart"></canvas>
            </div>
            <div className="summary-card col-span-1">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Savings Forecast</h3>
                <canvas id="savingsChart"></canvas>
            </div>
            <div className="summary-card col-span-1 lg:col-span-2">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Investment Performance</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                        <canvas id="investmentChart"></canvas>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h4 className="font-semibold text-gray-700 mb-2">Portfolio Allocation</h4>
                        <canvas className="max-h-64" id="allocationPieChart"></canvas>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Charts;
