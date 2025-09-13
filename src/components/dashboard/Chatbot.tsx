import React, { useState } from 'react';

const Chatbot: React.FC = () => {
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);

    const toggleChatbot = () => {
        setIsChatbotOpen(!isChatbotOpen);
    };

    const closeChatbot = () => {
        setIsChatbotOpen(false);
    };

    const minimizeChatbot = () => {
        setIsMinimized(!isMinimized);
    };

    return (
        <>
            <div className="fixed bottom-5 right-5 z-50">
                <button
                    className="bg-[var(--primary-color)] text-white rounded-full p-4 shadow-lg hover:bg-[var(--primary-hover-color)] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-color)]"
                    onClick={toggleChatbot}
                >
                    <span className="material-symbols-outlined">smart_toy</span>
                </button>
            </div>
            <div className={`fixed bottom-20 right-5 z-40 bg-white rounded-xl shadow-2xl border border-[var(--border-color)] w-96 transition-all duration-300 ease-in-out transform ${
                isChatbotOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            } ${isMinimized ? 'h-16 overflow-hidden' : ''}`}>
                <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-[var(--border-color)] rounded-t-xl">
                    <h3 className="text-lg font-bold text-[var(--text-primary)] flex items-center">
                        <span className="material-symbols-outlined mr-2 text-[var(--primary-color)]">smart_toy</span>
                        AI Assistant
                    </h3>
                    <div>
                        <button
                            className="p-1 text-gray-500 hover:bg-gray-200 rounded-full focus:outline-none"
                            onClick={minimizeChatbot}
                        >
                            <span className="material-symbols-outlined">minimize</span>
                        </button>
                        <button
                            className="p-1 text-gray-500 hover:bg-gray-200 rounded-full focus:outline-none ml-2"
                            onClick={closeChatbot}
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>
                </div>
                <div className="p-4 h-96 overflow-y-auto">
                    <div className="flex items-start gap-3 mb-4">
                        <div className="bg-[var(--primary-color)] text-white p-2 rounded-full h-8 w-8 flex items-center justify-center">
                            <span className="material-symbols-outlined text-base">smart_toy</span>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                            <p className="text-sm">Hello! How can I help you with your finances today?</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 mb-4 justify-end">
                        <div className="bg-blue-100 text-blue-800 rounded-lg p-3 max-w-xs">
                            <p className="text-sm">What's my spending on groceries this month?</p>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-cover bg-center shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDzCICpzzQuGkY-v_bBsNKknsPgd7nZqLgkC7wpa4XHc5PksWOGRcx7jPVf70bUSgnhlyQx4TVCBJR5uGZGdj5r1qKXIB6wasNKqCpk3CE8ex71c-PB6JdrsA0lJD7ZAuaZuJ04Ai133rQ7aDY9P8h6jTwHzZZlnr-zFc7ul0lZfDZGGPYZrwC_IBLFcqUa37QK2_xfcHZ04R6lq3LXLdQuKL04nmDWvXc4xTSVTaS7ZCxe2btZyM94J3cYZxmwHViKJbgeIpm-hDBQ")'}}></div>
                    </div>
                </div>
                <div className="p-4 border-t border-[var(--border-color)]">
                    <div className="relative">
                        <input
                            className="w-full border-gray-300 rounded-full pl-4 pr-12 py-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
                            placeholder="Ask a question..."
                            type="text"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[var(--primary-color)] text-white rounded-full p-2 hover:bg-[var(--primary-hover-color)] transition-colors">
                            <span className="material-symbols-outlined">send</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Chatbot;
