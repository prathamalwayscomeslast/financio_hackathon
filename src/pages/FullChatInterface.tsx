import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Message {
    sender: 'ai' | 'user';
    text: string;
    timestamp?: string;
}

const FullChatInterface: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            sender: 'ai',
            text: 'Hi Sarah, how can I help you today?'
        },
        {
            sender: 'user',
            text: 'What was my total spending last month?'
        },
        {
            sender: 'ai',
            text: 'Your total spending last month was $2,350. Would you like a breakdown by category?'
        }
    ]);

    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim()) return;

        const newMessage: Message = {
            sender: 'user',
            text: input.trim()
        };

        setMessages(prev => [...prev, newMessage]);
        setInput('');

        // Simulate AI response (replace with actual AI integration)
        setTimeout(() => {
            const aiResponse: Message = {
                sender: 'ai',
                text: 'I understand your question. Let me analyze your financial data and provide you with a detailed response.'
            };
            setMessages(prev => [...prev, aiResponse]);
        }, 1000);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div
            className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-gray-50"
            style={{ fontFamily: 'Manrope, sans-serif' }}
        >
            <div className="flex h-full grow flex-col">
                {/* Header */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 px-10 py-4 bg-white">
                    <Link to="/app/dashboard">
                        <div className="flex items-center gap-4 text-gray-800">
                            <svg className="h-8 w-8 text-[var(--primary-color)]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
                                <path clipRule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor" fillRule="evenodd"></path>
                            </svg>
                            <h2 className="text-gray-800 text-xl font-bold leading-tight tracking-[-0.015em]">Financio</h2>
                        </div>
                    </Link>
                    <div className="flex flex-1 justify-center gap-8">
                        <nav className="flex items-center gap-6"></nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="/app/profile">
                            <div
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAFClwHEm1LWClQJPmxElMqS4gQw-3d2CQWDFUIpVC8xMrTVIOzLST8p58YFAtEkHj8orgnuTRZBYSLIPJxqIoS-wcKSicLZa9lxI3vxFTT6Y1COrvO82F1wpfSHM_iQbdPVgUNErvPdP0aHC9h927H15SuzH6Yj1jqKBHMVnLwF4RCv-kcn5FVEPPGqwQjlGIvUSn6xO5dcBY86baVbttjVF34FAziWy8n8jRj-f7DjhZiicmL2A_y8XfXvwRJ4jpMr9Lvo2m_ZBgb")'}}
                            ></div>
                        </Link>
                    </div>
                </header>

                {/* Main Chat Interface */}
                <main className="flex-1 flex justify-center py-8 px-4">
                    <div className="w-full max-w-4xl flex flex-col h-full">
                        {/* Chat Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-4xl font-bold text-gray-800 tracking-tight">Chat with FinAI</h1>
                            <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
                                Ask me anything about your finances. I can help you understand your spending, track your progress towards goals, and suggest ways to improve your financial health.
                            </p>
                        </div>

                        {/* Chat Messages */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white rounded-lg shadow-sm">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`flex items-start gap-4 ${message.sender === 'user' ? 'justify-end' : ''}`}
                                >
                                    {message.sender === 'ai' && (
                                        <div
                                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 shrink-0"
                                            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA2sYKshmcIRpGkPlV1vFtezu_YsiMbtJohpPLFzcjTnQp2uG114KJBwMN46_eIjaX32TfVq4N8mrx0b3J59eodgfUa3TXTnoCwm5Ik-cgJX3YpCl7cBO1PrkBBT9mqPhaVDKT9tgntDzGtvCm52m1U6PgYxtO3i3HWfEhXr-4VczGZT06IhjxUjFUffi2FmvBvNl2obQ0J5TL4b6CUQymQP03kFFPaADb7C01CMKrsehMPDtxJ-12q4uaHK9q7GmVB-U3n_hHScTE6")'}}
                                        ></div>
                                    )}

                                    <div className={`flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'}`}>
                                        <p className="text-gray-500 text-sm font-medium mb-1">
                                            {message.sender === 'user' ? 'Sarah' : 'FinAdvisor'}
                                        </p>
                                        <div className={`rounded-lg px-4 py-3 shadow-sm max-w-md ${
                                            message.sender === 'user'
                                                ? 'bg-[var(--primary-color)] text-white rounded-tr-none'
                                                : 'bg-white rounded-tl-none text-gray-800 border'
                                        }`}>
                                            <p className="text-base" dangerouslySetInnerHTML={{
                                                __html: message.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                            }}></p>
                                        </div>
                                    </div>

                                    {message.sender === 'user' && (
                                        <div
                                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 shrink-0"
                                            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBUW21iJ1Z85tLkOUZQQx5dYfGe3qDKqN4ffXDXUMpsC4C-DjYiEuUHiMY5nbSchGawKeen7ownYJFcoI8HUZfSsX2fmkHuycmhlxw-xHPlaf5GBK2XumlJlt5A6yg5MtllV5JUmLqQDS_TJFTubHlXpTzoy4yP_qyiUqfIPbp37KP6vLrTMoilrN7eu1WP8NIhTRUPDc5s1ENTg_5ZBP_gp1DienOW9zQEq77jWFO7Fc7Vox8jUcIIlIgop8A5eN6SEz-c7o8wil6C")'}}
                                        ></div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Chat Input */}
                        <div className="mt-auto bg-white border-t border-gray-200 p-4 sticky bottom-0 rounded-b-lg">
                            <div className="relative">
                                <input
                                    className="w-full rounded-full border-gray-300 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition pl-5 pr-20 py-3 text-base"
                                    placeholder="Ask me anything..."
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-4 gap-2">
                                    <button className="text-gray-500 hover:text-[var(--primary-color)] transition-colors">
                                        <span className="material-symbols-outlined text-2xl">mic</span>
                                    </button>
                                    <button
                                        onClick={handleSend}
                                        className="bg-[var(--primary-color)] text-white rounded-full p-2 hover:bg-opacity-90 transition-colors"
                                    >
                                        <span className="material-symbols-outlined text-2xl">send</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default FullChatInterface;
