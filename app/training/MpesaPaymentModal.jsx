'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const COUNTRY_CODES = [
    { code: '+254', flag: '🇰🇪' },
    { code: '+256', flag: '🇺🇬' },
    { code: '+255', flag: '🇹🇿' },
];

export default function MpesaPaymentModal({ onClose, isOpen }) {
    const [mobileNumber, setMobileNumber] = useState('');
    const [countryCode, setCountryCode] = useState('+254');

    const handlePaymentSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch('/api/mpesa-payment', {
                method: 'POST',
                body: JSON.stringify({ mobileNumber, countryCode }),
                headers: { 'Content-Type': 'application/json' },
            });
            alert('Payment submitted successfully');
            onClose();
        } catch (error) {
            console.error('Payment submission failed:', error);
            alert('Payment submission failed. Please try again.');
        }
    };

    const handleMobileNumberChange = (e) => {
        const value = e.target.value;
        if (/^[0-9]{0,9}$/.test(value) && (value === '' || /^([1|5|7])\d{0,8}$/.test(value))) {
            setMobileNumber(value);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-md" role="dialog" aria-modal="true">
            <div className="bg-gradient-to-r from-gray-200 to-gray-300 rounded-3xl p-6 w-3/8">
                <div className="relative bg-gradient-to-b from-gray-800 via-primary to-gray-200 h-48 rounded-lg mb-8 p-6">
                    <div className="absolute top-0 left-0 m-5">
                        <img src="/mpesa-logo.png" className="h-10" />
                    </div>
                    <div className="absolute bottom-0 right-0 m-5">
                        <img src="/safaricom.png" className="h-10" />
                    </div>
                </div>
                <form onSubmit={handlePaymentSubmit}>
                    <div className="items-center mb-4">
                        <select
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                            className="border rounded p-2 h-11 bg-gray-200"
                            aria-label="Select country code"
                        >
                            {COUNTRY_CODES.map(({ code, flag }) => (
                                <option key={code} value={code}>
                                    {`${flag} ${code}`}
                                </option>
                            ))}
                        </select>
                        <input
                            type="tel"
                            value={mobileNumber}
                            onChange={handleMobileNumberChange}
                            placeholder="Mobile Number"
                            className="border rounded p-2 mt-2 bg-gray-200"
                            required
                            aria-label="Enter mobile number"
                        />
                    </div>
                    <div className="flex justify-center mt-16">
                        <button type="submit" className="bg-secondary text-white rounded-full py-2 px-5">
                            Confirm Payment
                        </button>
                    </div>
                </form>
                <button
                    onClick={onClose}
                    className="text-red-500 mt-4 w-full"
                    aria-label="Cancel payment"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}