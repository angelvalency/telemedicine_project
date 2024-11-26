"use client";

import Image from "next/image";
import Navbar from "@/app/component/navbar";
import React, { useState } from "react";
import { Pencil, X } from "lucide-react";

export default function HasilPeriksaPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setUploadedFile(file);
            closeModal();
        }
    };

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
                                    {uploadedFile ? (
                                        <a
                                            href={URL.createObjectURL(uploadedFile)}
                                            download={uploadedFile.name}
                                            className="text-blue-600 hover:underline"
                                        >
                                            {uploadedFile.name}
                                        </a>
                                    ) : (
                                        <button
                                            onClick={openModal}
                                            className="text-gray-600 hover:text-gray-900"
                                        >
                                            <Pencil size={20} />
                                        </button>
                                    )}
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
                                    <div className="flex items-center justify-center w-full my-4">
                                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                </svg>
                                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                            </div>
                                            <input id="dropzone-file" type="file" className="hidden" />
                                        </label>
                                    </div>

                                    <button
                                        type="button"
                                        className="w-full bg-sky-300 shadow-xl shadow-sky-200 text-white py-3 rounded-xl hover:bg-sky-200"
                                        onClick={closeModal}
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
