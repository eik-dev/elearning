'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const COUNTRY_CODES = [
    { code: '+254', country: 'Kenya' },
    { code: '+256', country: 'Uganda' },
    { code: '+255', country: 'Tanzania' },
];

export default function MpesaPaymentModal({ onClose }) {
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

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" role="dialog" aria-modal="true">
            <div className="bg-white rounded-lg p-6 w-80">
                <h2 className="font-bold text-lg mb-4">M-Pesa Payment</h2>
                <div className="flex items-center mb-4">
                    <div className="relative w-10 h-10 mr-2">
                        <Image src="/mpesa-logo.png" alt="M-Pesa" layout="fill" objectFit="contain" />
                    </div>
                    <span className="font-semibold">Pay via M-Pesa</span>
                </div>
                <form onSubmit={handlePaymentSubmit}>
                    <div className="flex flex-col mb-4">
                        <select
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                            className="border rounded p-2"
                            aria-label="Select country code"
                        >
                            {COUNTRY_CODES.map(({ code, country }) => (
                                <option key={code} value={code}>{`${code} (${country})`}</option>
                            ))}
                        </select>
                        <input
                            type="tel"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            placeholder="Mobile Number"
                            className="border rounded p-2 mt-2"
                            required
                            aria-label="Enter mobile number"
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white rounded p-2 w-full">
                        Confirm Payment
                    </button>
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