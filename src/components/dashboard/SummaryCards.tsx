import React from 'react';

interface SummaryCard {
    title: string;
    value: string;
    icon?: string;
    change: string;
    changeType: 'positive' | 'negative';
    period: string;
}

const SummaryCards: React.FC = () => {
    const cards: SummaryCard[] = [
        {
            title: 'Total Assets',
            value: '$125,000',
            icon: 'trending_up',
            change: '+5%',
            changeType: 'positive',
            period: 'vs last month'
        },
        {
            title: 'Total Liabilities',
            value: '$35,000',
            icon: 'trending_down',
            change: '-2%',
            changeType: 'negative',
            period: 'vs last month'
        },
        {
            title: 'EPF Balance',
            value: '$20,000',
            change: '+3%',
            changeType: 'positive',
            period: 'this quarter'
        },
        {
            title: 'Credit Score',
            value: '750',
            change: '+1%',
            changeType: 'positive',
            period: 'since last check'
        },
        {
            title: 'Investment Portfolio',
            value: '$70,000',
            icon: 'show_chart',
            change: '+4%',
            changeType: 'positive',
            period: 'this month'
        }
    ];

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mb-8">
            {cards.map((card, index) => (
                <div key={index} className="summary-card">
                    <div>
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-[var(--text-secondary)]">{card.title}</p>
                            {card.icon && (
                                <span className={`material-symbols-outlined ${
                                    card.icon === 'trending_up' ? 'text-green-500' :
                                        card.icon === 'trending_down' ? 'text-red-500' : 'text-green-500'
                                }`}>
                                    {card.icon}
                                </span>
                            )}
                        </div>
                        <p className="text-3xl font-bold text-[var(--text-primary)] mt-2">{card.value}</p>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center text-sm">
                            <span className={`font-semibold flex items-center ${
                                card.changeType === 'positive' ? 'text-[var(--success-color)]' : 'text-[var(--danger-color)]'
                            }`}>
                                <span className="material-symbols-outlined text-base mr-1">
                                    {card.changeType === 'positive' ? 'arrow_upward' : 'arrow_downward'}
                                </span>
                                {card.change}
                            </span>
                            <span className="text-gray-500 ml-1">{card.period}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SummaryCards;
