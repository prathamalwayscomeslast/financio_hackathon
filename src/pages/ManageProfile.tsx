import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ManageProfile: React.FC = () => {
    const [toggles, setToggles] = useState({
        assets: true,
        liabilities: true,
        transactions: false,
        retirementBalance: false,
        creditScore: true,
        investments: false
    });

    const handleToggle = (key: keyof typeof toggles) => {
        setToggles(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleCancel = () => {
        // Reset to initial state or navigate back
        console.log('Cancel clicked');
    };

    const handleSaveChanges = () => {
        // Save the toggle states
        console.log('Save changes:', toggles);
    };

    return (
        <div
            className="relative flex h-auto min-h-screen w-full flex-col bg-white group/design-root overflow-x-hidden"
            style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
        >
            <div className="layout-container flex h-full grow flex-col">
                {/* Header */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f3f4] px-10 py-3">
                    <Link to="/app/dashboard">
                        <div className="flex items-center gap-4 text-gray-800">
                            <div className="size-6 text-[#13a4ec]">
                                <svg className="h-8 w-8 text-[var(--primary-color)]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
                                    <path clipRule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor" fillRule="evenodd"></path>
                                </svg>
                            </div>
                            <h2 className="text-gray-900 text-lg font-bold leading-tight tracking-[-0.015em]">Financio</h2>
                        </div>
                    </Link>
                    <nav className="flex items-center gap-6"></nav>
                    <div className="flex items-center gap-4">
                        <Link to="/app/profile">
                            <div
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCLH4pL0o-vvB6NF0emfn1yBO_00bt5t446EKjljpjx_xOQ4EhfMi1Y2KZBe1VmC8txkaHSnW4LmN_qgtgt6P_GSQVcZ4KDDSDBlKvuQgdKTAu7_56ALQ2qNvBgbMbAmnDaWeG7f8Twiaj9C66YNRBP1SWxsYzJ09WzvhSl0ARYRKRaeZHBX6jEoTwmoRDACDWNCuFWZH-EpumFIKKZQAuXPk86uXVzRnA7DBuLwvz6AhhXjsFTYxHrrx1HcEZcN61_9kf_RXQUva49")'}}
                            ></div>
                        </Link>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-1 bg-gray-50/50">
                    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
                        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                            {/* Header Section */}
                            <div className="border-b border-gray-200 p-6">
                                <h1 className="text-2xl font-bold tracking-tight text-gray-900">Manage Data Access</h1>
                                <p className="mt-2 text-sm text-gray-500">Control which financial data categories our application can access. Your privacy is important to us.</p>
                            </div>

                            {/* Toggle Sections */}
                            <div className="divide-y divide-gray-200">
                                {/* Assets */}
                                <div className="flex items-center justify-between gap-4 p-6">
                                    <div className="flex flex-col">
                                        <p className="text-base font-medium text-gray-900">Assets</p>
                                        <p className="text-sm text-gray-500">Access to your assets like bank accounts, properties, and other holdings.</p>
                                    </div>
                                    <label className="relative inline-flex cursor-pointer items-center">
                                        <input
                                            type="checkbox"
                                            className="peer sr-only"
                                            checked={toggles.assets}
                                            onChange={() => handleToggle('assets')}
                                        />
                                        <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#13a4ec] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
                                    </label>
                                </div>

                                {/* Liabilities */}
                                <div className="flex items-center justify-between gap-4 p-6">
                                    <div className="flex flex-col">
                                        <p className="text-base font-medium text-gray-900">Liabilities</p>
                                        <p className="text-sm text-gray-500">Access to your liabilities such as loans, credit card debts, and other obligations.</p>
                                    </div>
                                    <label className="relative inline-flex cursor-pointer items-center">
                                        <input
                                            type="checkbox"
                                            className="peer sr-only"
                                            checked={toggles.liabilities}
                                            onChange={() => handleToggle('liabilities')}
                                        />
                                        <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#13a4ec] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
                                    </label>
                                </div>

                                {/* Transactions */}
                                <div className="flex items-center justify-between gap-4 p-6">
                                    <div className="flex flex-col">
                                        <p className="text-base font-medium text-gray-900">Transactions</p>
                                        <p className="text-sm text-gray-500">Access to your transaction history, including deposits, withdrawals, and purchases.</p>
                                    </div>
                                    <label className="relative inline-flex cursor-pointer items-center">
                                        <input
                                            type="checkbox"
                                            className="peer sr-only"
                                            checked={toggles.transactions}
                                            onChange={() => handleToggle('transactions')}
                                        />
                                        <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#13a4ec] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
                                    </label>
                                </div>

                                {/* Retirement Balance */}
                                <div className="flex items-center justify-between gap-4 p-6">
                                    <div className="flex flex-col">
                                        <p className="text-base font-medium text-gray-900">Retirement Balance</p>
                                        <p className="text-sm text-gray-500">Access to your retirement savings balance, including contributions and returns.</p>
                                    </div>
                                    <label className="relative inline-flex cursor-pointer items-center">
                                        <input
                                            type="checkbox"
                                            className="peer sr-only"
                                            checked={toggles.retirementBalance}
                                            onChange={() => handleToggle('retirementBalance')}
                                        />
                                        <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#13a4ec] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
                                    </label>
                                </div>

                                {/* Credit Score */}
                                <div className="flex items-center justify-between gap-4 p-6">
                                    <div className="flex flex-col">
                                        <p className="text-base font-medium text-gray-900">Credit Score</p>
                                        <p className="text-sm text-gray-500">Access to your credit score and credit report details.</p>
                                    </div>
                                    <label className="relative inline-flex cursor-pointer items-center">
                                        <input
                                            type="checkbox"
                                            className="peer sr-only"
                                            checked={toggles.creditScore}
                                            onChange={() => handleToggle('creditScore')}
                                        />
                                        <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#13a4ec] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
                                    </label>
                                </div>

                                {/* Investments */}
                                <div className="flex items-center justify-between gap-4 p-6">
                                    <div className="flex flex-col">
                                        <p className="text-base font-medium text-gray-900">Investments</p>
                                        <p className="text-sm text-gray-500">Access to your investment portfolio, including stocks, bonds, and other investments.</p>
                                    </div>
                                    <label className="relative inline-flex cursor-pointer items-center">
                                        <input
                                            type="checkbox"
                                            className="peer sr-only"
                                            checked={toggles.investments}
                                            onChange={() => handleToggle('investments')}
                                        />
                                        <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#13a4ec] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
                                    </label>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center justify-end gap-3 bg-gray-50 p-6">
                                <button
                                    onClick={handleCancel}
                                    className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSaveChanges}
                                    className="inline-flex justify-center rounded-md border border-transparent bg-[#13a4ec] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ManageProfile;
