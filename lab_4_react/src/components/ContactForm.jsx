import React, { useState, useEffect } from 'react';

const ContactForm = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
                
                <button 
                    onClick={() => setIsOpen(false)}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
                >
                    &times;
                </button>

                <h2 className="text-xl font-bold mb-4 text-gray-800 text-center">
                    Зв'язатися зі мною
                </h2>

                <form 
                    action="https://formspree.io/f/xlgoavvl" 
                    method="POST"
                    className="flex flex-col gap-4"
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Ім'я:</label>
                        <input type="text" name="name" required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email:</label>
                        <input type="email" name="email" required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Телефон:</label>
                        <input type="tel" name="phone" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Повідомлення:</label>
                        <textarea name="message" rows="4" required className="mt-1 block w-full border border-gray-300 rounded-md p-2"></textarea>
                    </div>

                    <div className="flex gap-2 mt-2">
                        <button 
                            type="submit" 
                            className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Відправити
                        </button>
                        <button 
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition"
                        >
                            Закрити
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;