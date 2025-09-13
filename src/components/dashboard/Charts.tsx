import React, { useEffect } from 'react';

declare global {
    interface Window {
        Chart: any;
    }
}

const Charts: React.FC = () => {
    useEffect(() => {
        // Load Chart.js
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
        script.onload = () => {
            initializeCharts();
        };
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    const initializeCharts = () => {
        const { Chart } = window;

        // Spending Chart
        const spendingCtx = (document.getElementById('spendingChart') as HTMLCanvasElement)?.getContext('2d');
        if (spendingCtx) {
            new Chart(spendingCtx, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Spending',
                        data: [1200, 1900, 1500, 1700, 1600, 2100],
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

        // Savings Chart
        const savingsCtx = (document.getElementById('savingsChart') as HTMLCanvasElement)?.getContext('2d');
        if (savingsCtx) {
            new Chart(savingsCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Savings',
                        data: [500, 600, 800, 750, 900, 1100],
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

        // Investment Chart
        const investmentCtx = (document.getElementById('investmentChart') as HTMLCanvasElement)?.getContext('2d');
        if (investmentCtx) {
            new Chart(investmentCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Portfolio Value',
                        data: [65000, 66000, 68000, 67500, 69000, 70000],
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

        // Allocation Pie Chart
        const allocationCtx = (document.getElementById('allocationPieChart') as HTMLCanvasElement)?.getContext('2d');
        if (allocationCtx) {
            new Chart(allocationCtx, {
                type: 'pie',
                data: {
                    labels: ['Stocks', 'Bonds', 'Real Estate', 'Crypto'],
                    datasets: [{
                        label: 'Allocation',
                        data: [35000, 20000, 10000, 5000],
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
