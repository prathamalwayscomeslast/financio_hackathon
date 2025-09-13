import React from 'react';
import { Link } from 'react-router-dom';

interface Transaction {
    date: string;
    name: string;
    category: string;
    amount: string;
}

const ViewAllTransactions: React.FC = () => {
    const transactions: Transaction[] = [
        { date: 'Jul 20, 2024', name: 'Grocery Store', category: 'Groceries', amount: '-$85.20' },
        { date: 'Jul 19, 2024', name: 'Online Retailer', category: 'Shopping', amount: '-$120.50' },
        { date: 'Jul 18, 2024', name: 'Coffee Shop', category: 'Dining', amount: '-$15.75' },
        { date: 'Jul 17, 2024', name: 'Gas Station', category: 'Transportation', amount: '-$45.00' },
        { date: 'Jul 16, 2024', name: 'Movie Theater', category: 'Entertainment', amount: '-$30.00' },
        { date: 'Jul 15, 2024', name: 'Bookstore', category: 'Shopping', amount: '-$60.00' },
        { date: 'Jul 14, 2024', name: 'Restaurant', category: 'Dining', amount: '-$75.00' },
        { date: 'Jul 13, 2024', name: 'Clothing Store', category: 'Shopping', amount: '-$150.00' },
        { date: 'Jul 12, 2024', name: 'Electronics Store', category: 'Shopping', amount: '-$200.00' },
        { date: 'Jul 11, 2024', name: 'Home Improvement Store', category: 'Home', amount: '-$100.00' }
    ];

    return (
        <div
            className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-slate-50"
            style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
        >
            <div className="layout-container flex h-full grow flex-col">
                {/* Header */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 px-10 py-4">
                    <Link to="/app/dashboard">
                        <div className="flex items-center gap-3 text-slate-900">
                            <svg className="h-8 w-8 text-[var(--primary-color)]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
                                <path clipRule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor" fillRule="evenodd"></path>
                            </svg>
                            <h2 className="text-xl font-bold tracking-tight">FinTrack</h2>
                        </div>
                    </Link>
                </header>

                {/* Main Content */}
                <main className="flex flex-1 justify-center px-6 py-8 sm:px-10 lg:px-16">
                    <div className="w-full max-w-6xl">
                        {/* Page Header */}
                        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                            <h1 className="text-3xl font-bold text-slate-900">All Transactions</h1>
                        </div>

                        {/* Transactions Table */}
                        <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
                            <table className="w-full table-auto">
                                <thead className="bg-slate-50 text-left text-sm font-semibold text-slate-600">
                                <tr>
                                    <th className="px-6 py-4">Date</th>
                                    <th className="px-6 py-4">Name</th>
                                    <th className="px-6 py-4">Category</th>
                                    <th className="px-6 py-4 text-right">Amount</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
                                {transactions.map((transaction, index) => (
                                    <tr key={index}>
                                        <td className="whitespace-nowrap px-6 py-4">{transaction.date}</td>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium text-slate-900">{transaction.name}</td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                                <span className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                                                    {transaction.category}
                                                </span>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 text-right font-medium text-red-600">{transaction.amount}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ViewAllTransactions;
