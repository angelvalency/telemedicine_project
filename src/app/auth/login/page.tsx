"use client";

import { useState } from 'react';
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = () => {
        // Validasi nama
        if (name.trim() === '') {
            setError('Name cannot be empty.');
            return;
        }
        // Validasi nomor HP (minimal 10 digit)
        if (!/^\d{10,}$/.test(phone)) {
            setError('Please enter a valid phone number with at least 10 digits.');
            return;
        }
        // Validasi password (minimal 6 karakter)
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }
        // Jika semua validasi lolos
        setError('');
        console.log('Logging in with:', { name, phone, password });
        router.push('/pasien/dashboard');
    };

    return (
        <div className="flex flex-col lg:flex-row items-center justify-between h-screen w-screen bg-white p-4">
            <img src="/assets/dokter_login.svg" alt="Doctor Illustration" className="w-[700px] h-[800px] mx-2" />

            <div className="flex-1 p-8 max-w-md mr-56">
                <h2 className="text-3xl font-semibold text-center mb-4 text-sky-300">Login to Your Account</h2>
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        handleLogin();
                    }}
                >
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-regular text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full mt-2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-100"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-regular text-gray-700">Phone Number</label>
                        <input
                            type="text"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full mt-2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-100"
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-regular text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full mt-2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-100"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-sky-300 shadow-xl shadow-sky-200 text-white py-3 rounded-xl hover:bg-sky-200 focus:outline-none"
                    >
                        Login
                    </button>
                    <div className="text-center mt-4">
                        <p className="text-sm text-gray-600 mt-10">
                            Don't have an account?{' '}
                            <Link href="/auth/register" className="text-sky-300 hover:text-sky-500">Register here</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;