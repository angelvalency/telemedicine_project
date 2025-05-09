"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Register() {
    const [fullName, setFullName] = useState('');
    const [birthPlace, setBirthPlace] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dob, setDob] = useState('');
    const [address, setAddress] = useState('');
    const [role, setRole] = useState('');
    const [jenisKelamin, setJenisKelamin] = useState('');
    const [genderDropdownOpen, setGenderDropdownOpen] = useState(false);
    const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleRegister = () => {
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        if (!fullName || !phoneNumber || !dob || !birthPlace || !jenisKelamin || !address || !role) {
            setError('Please fill in all fields.');
            return;
        }
        setError('');

        console.log('Registering with:', { fullName, birthPlace, phoneNumber, dob, jenisKelamin, address, role });

        router.push('/pasien/dashboard');
    };

    return (
        <div className="flex flex-col lg:flex-row items-center justify-between h-screen w-screen bg-white p-4">
            <img src="/assets/dokter_login.svg" alt="Illustration" className="w-[700px] h-[800px] mx-2" />

            <div className="flex-1 p-8 max-w-md mr-56">
                <h2 className="text-2xl font-semibold text-center mb-4 text-sky-300">Create Your Account</h2>
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        handleRegister();
                    }}
                >
                    {/* Informasi Dasar */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
                        {/* Nama Lengkap */}
                        <div className="mb-4">
                            <label htmlFor="fullName" className="block text-sm font-regular text-gray-700">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="w-full mt-2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-100"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        {/* Gender */}
                        <div className="mb-4 relative">
                            <label htmlFor="jenisKelamin" className="block text-sm font-regular text-gray-700">Gender</label>
                            <button
                                type="button"
                                onClick={() => {
                                    setGenderDropdownOpen(!genderDropdownOpen);
                                    setRoleDropdownOpen(false);
                                }}
                                className="w-full mt-2 p-3 border border-gray-300 rounded-xl bg-white flex justify-between items-center"
                            >
                                {jenisKelamin || "Select Gender"}
                                <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {genderDropdownOpen && (
                                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow">
                                    <ul className="py-1 text-sm text-gray-700">
                                        <li>
                                            <button
                                                type="button"
                                                onClick={() => { setJenisKelamin("Laki-laki"); setGenderDropdownOpen(false); }}
                                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                            >
                                                Laki-laki
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                onClick={() => { setJenisKelamin("Perempuan"); setGenderDropdownOpen(false); }}
                                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                            >
                                                Perempuan
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Role */}
                        <div className="mb-4 relative">
                            <label htmlFor="role" className="block text-sm font-regular text-gray-700">Role</label>
                            <button
                                type="button"
                                onClick={() => {
                                    setRoleDropdownOpen(!roleDropdownOpen);
                                    setGenderDropdownOpen(false);
                                }}
                                className="w-full mt-2 p-3 border border-gray-300 rounded-xl bg-white flex justify-between items-center"
                            >
                                {role || "Select Role"}
                                <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {roleDropdownOpen && (
                                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow">
                                    <ul className="py-1 text-sm text-gray-700">
                                        <li>
                                            <button
                                                type="button"
                                                onClick={() => { setRole("Patient"); setRoleDropdownOpen(false); }}
                                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                            >
                                                Patient
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                onClick={() => { setRole("Doctor"); setRoleDropdownOpen(false); }}
                                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                            >
                                                Doctor
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Nomor Telepon */}
                        <div className="mb-4">
                            <label htmlFor="phoneNumber" className="block text-sm font-regular text-gray-700">Phone Number</label>
                            <input
                                type="text"
                                id="phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="w-full mt-2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-100"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>

                        {/* Tempat Lahir */}
                        <div className="mb-4">
                            <label htmlFor="birthPlace" className="block text-sm font-regular text-gray-700">Place of Birth</label>
                            <input
                                type="text"
                                id="birthPlace"
                                value={birthPlace}
                                onChange={(e) => setBirthPlace(e.target.value)}
                                className="w-full mt-2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-100"
                                placeholder="Enter your place of birth"
                                required
                            />
                        </div>

                        {/* Tanggal Lahir */}
                        <div className="mb-4">
                            <label htmlFor="dob" className="block text-sm font-regular text-gray-700">Date of Birth</label>
                            <input
                                type="date"
                                id="dob"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                className="w-full mt-2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-100"
                                required
                            />
                        </div>
                    </div>

                    {/* Alamat */}
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-sm font-regular text-gray-700">Address</label>
                        <textarea
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full mt-2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-100"
                            placeholder="Enter your address"
                            required
                        />
                    </div>

                    {/* Password dan Konfirmasi */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                        <div className="mb-4">
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

                        <div className="mb-6">
                            <label htmlFor="confirmPassword" className="block text-sm font-regular text-gray-700">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full mt-2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-100"
                                placeholder="Confirm your password"
                                required
                            />
                        </div>
                    </div>

                    {/* Error Message */}
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                    {/* Tombol Register */}
                    <button
                        type="submit"
                        className="w-full bg-sky-300 shadow-xl shadow-sky-200 text-white py-3 rounded-xl hover:bg-sky-200 focus:outline-none"
                    >
                        Register
                    </button>
                </form>

                {/* Tautan ke Login */}
                <div className="text-center mt-4">
                    <p className="text-sm mt-8">Already have an account? <Link href="/auth/login" className="text-sky-300 hover:text-sky-500">Login here</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Register;
