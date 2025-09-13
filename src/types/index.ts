export interface User {
    id: string;
    name: string;
    email: string;
}

export interface FinancialData {
    assets: number;
    liabilities: number;
    epfBalance: number;
    creditScore: number;
    investments: number;
}

export interface Transaction {
    id: string;
    date: string;
    description: string;
    category: string;
    amount: number;
}

export interface DataPermission {
    category: 'assets' | 'liabilities' | 'transactions' | 'retirement' | 'credit' | 'investments';
    label: string;
    description: string;
    isEnabled: boolean;
}

export interface ChatMessage {
    id: string;
    message: string;
    isUser: boolean;
    timestamp: Date;
}

export interface InsightData {
    spendingTrends: SpendingTrend[];
    savingsForecasts: SavingsForecast[];
    investmentPerformance: InvestmentData;
}

export interface SpendingTrend {
    category: string;
    amount: number;
    change: number;
}

export interface SavingsForecast {
    month: string;
    projected: number;
}

export interface InvestmentData {
    ytdPerformance: number;
    allocation: {
        stocks: number;
        bonds: number;
        realEstate: number;
        crypto: number;
    };
}
