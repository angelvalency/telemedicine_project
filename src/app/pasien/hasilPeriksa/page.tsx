import Image from "next/image";
import Navbar from "@/app/component/navbar";
import React from "react";

export default function HasilPeriksaPage() {
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
                    className="w-24 bg-sky-300 shadow-xl shadow-sky-200 text-white py-3 rounded-xl hover:bg-sky-200 focus:outline-none"
                >
                    Login
                </button>
            </div>

            {/* Table */}
            <div className="h-screen w-screen mt-60 mx-32 overflow-hidden sm:rounded-lg">
                <div className="h-screen overflow-hidden">
                    <table className="w-3/4 text-sm text-left shadow-md rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Nama Pasien
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tanggal
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Dokumen Pemeriksaan
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
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
                                        Download
                                    </a>
                                </td>
                                <td className="px-6 py-4">
                                    Pemeriksaan rutin untuk evaluasi kesehatan.
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Dr. Lisa Putri
                                </td>
                                <td className="px-6 py-4">
                                    22 November 2024
                                </td>
                                <td className="px-6 py-4">
                                    <a href="/path-to-image-2.jpg" download>
                                        <Image
                                            src="/path-to-image-2.jpg"
                                            alt="Dokumen Pemeriksaan"
                                            width={50}
                                            height={50}
                                            className="cursor-pointer"
                                        />
                                    </a>
                                </td>
                                <td className="px-6 py-4">
                                    <a
                                        href="/path-to-dokumen-2.pdf"
                                        download
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Download
                                    </a>
                                </td>
                                <td className="px-6 py-4">
                                    Hasil pemeriksaan laboratorium.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
