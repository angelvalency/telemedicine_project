"use client";

import Image from "next/image";
import Navbar from "@/app/component/navbar";
import React, { useState } from "react";
import { FilePlus } from "lucide-react";
import { X } from "lucide-react";

export default function HasilPeriksaPage() {
    const [dob, setDob] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <>
            {/* Wrapper Grid */}
            <div className="">
                {/* Logo */}
                <div className="absolute top-0 left-0 w-full flex justify-left ml-20">
                    <Image
                        src="/assets/Telemedis_logo.svg"
                        alt="Telemedis Logo"
                        width={180}
                        height={180}
                        className="z-10"
                    />
                </div>
            </div>
            {/* Navbar */}
            <Navbar />
            {/* Button */}
            <div className="absolute top-40 right-44">
                <button
                    type="button"
                    className="w-auto bg-sky-300 shadow-xl shadow-sky-200 text-white flex justify-center items-center gap-2 p-4 rounded-xl hover:bg-sky-200 focus:outline-none"
                    onClick={openModal}
                >
                    <FilePlus size={20} />
                    Upload Dokumen
                </button>
            </div>

            {/* Table */}
            <div className="h-screen w-screen mt-60 mx-32 overflow-hidden sm:rounded-lg">
                <div className="h-screen overflow-hidden">
                    <table className="w-3/4 text-sm text-left shadow-md rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Nama Dokter
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tanggal
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nama Pasien
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Dokumen Pemeriksaan
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Keterangan
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Dr. Andi Setiawan
                                </td>
                                <td className="px-6 py-4">
                                    25 November 2024
                                </td>
                                <td className="px-6 py-4">
                                    Nathasa
                                </td>
                                <td className="px-6 py-4">
                                    <a href="/path-to-image.jpg" download>
                                        <Image
                                            src="/path-to-image.jpg"
                                            alt="Dokumen Pemeriksaan"
                                            width={50}
                                            height={50}
                                            className="cursor-pointer"
                                        />
                                    </a>
                                </td>
                                <td className="px-6 py-4">
                                    <a
                                        href="/path-to-dokumen.pdf"
                                        download
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Unduh Dokumen
                                    </a>
                                </td>
                                <td className="px-6 py-4">
                                    Pemeriksaan rutin untuk evaluasi kesehatan.
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Dr. Andi Setiawan
                                </td>
                                <td className="px-6 py-4">
                                    25 November 2024
                                </td>
                                <td className="px-6 py-4">
                                    Nathasa
                                </td>
                                <td className="px-6 py-4">
                                    <a href="/path-to-image.jpg" download>
                                        <Image
                                            src="/path-to-image.jpg"
                                            alt="Dokumen Pemeriksaan"
                                            width={50}
                                            height={50}
                                            className="cursor-pointer"
                                        />
                                    </a>
                                </td>
                                <td className="px-6 py-4">
                                    <a
                                        href="/path-to-dokumen.pdf"
                                        download
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Unduh Dokumen
                                    </a>
                                </td>
                                <td className="px-6 py-4">
                                    Pemeriksaan rutin untuk evaluasi kesehatan.
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Modal */}
                    {isModalOpen && (
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                            <div className="bg-white p-8 rounded-lg shadow-lg w-1/3 relative">
                                {/* Close button (X) */}
                                <button
                                    onClick={closeModal}
                                    className="absolute top-8 right-8 text-gray-700 hover:text-gray-900 text-xl font-bold"
                                >
                                    <X size={20} />
                                </button>
                                <h2 className="text-xl font-semibold mb-4">Upload Dokumen</h2>
                                <form>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">Nama Dokter</label>
                                        <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="dob" className="block text-sm font-regular text-gray-700">Tanggal</label>
                                        <input
                                            type="date"
                                            id="dob"
                                            value={dob}
                                            onChange={(e) => setDob(e.target.value)}
                                            className="w-full mt-2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-100"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">Hasil Pemeriksaan</label>
                                        <input type="file" className="w-full p-2 border border-gray-300 rounded-md" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">Nama Dokter</label>
                                        <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">Password</label>
                                        <input type="password" className="w-full p-2 border border-gray-300 rounded-md" />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-sky-300 shadow-xl shadow-sky-200 text-white py-3 rounded-xl hover:bg-sky-200"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
