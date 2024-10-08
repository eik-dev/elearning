'use client';
import React, { useState } from 'react';
import Input from '../Input';
import Logo from './Logo';
import useUser from '@/app/lib/hooks/useUser';
import { load } from '@/app/lib/storage';

const LoginOverlay = ({ show, onClose, control }) => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useUser();

    const submit = (e) => {
        e.preventDefault();
        login(phone, password, (_) => {
            if (load('token') != null) {
                onClose(); // Close modal on successful login
                control(''); // Handle post-login logic
            }
        });
    };

    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="relative bg-white w-11/12 max-w-md p-6 rounded-lg shadow-lg">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
                >
                    {/* Close (X) Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <Logo />
                <h3 className="text-xl font-bold text-center mb-4">Login</h3>
                <form onSubmit={submit} className="flex flex-col items-center">
                    <Input
                        value={phone}
                        setValue={setPhone}
                        placeholder={'Enter Phone Number'}
                        type={'tel'}
                        name={'Phone Number'}
                    />
                    <Input
                        value={password}
                        setValue={setPassword}
                        placeholder={'Enter Password'}
                        type={'password'}
                        name={'Password'}
                    />
                    <button
                        type="button"
                        className="text-right text-xs text-primary-light font-semibold mt-2"
                    >
                        Forgot password?
                    </button>
                    <button
                        type="submit"
                        className="bg-primary-light font-semibold w-full rounded-lg py-2 my-4"
                    >
                        Continue
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginOverlay;
