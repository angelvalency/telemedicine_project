"use client";

import Image from "next/image";
import Navbar from "@/app/component/navbar";
import React, { useState } from "react";
import { X } from "lucide-react";
import { AlarmClockPlus } from "lucide-react";

export default function HasilPeriksaPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Data appointments untuk tabel
    const appointments = [
        {
            pasien: "John Doe",
            dokter: "Dr. Smith",
            tanggal: "2024-12-01",
            tempat: "Klinik A",
            waktu: "10:00 AM",
            alasan: "Pemeriksaan Rutin",
            status: "Dijadwalkan",
        },
        {
            pasien: "Jane Doe",
            dokter: "Dr. Harris",
            tanggal: "2024-12-05",
            tempat: "Klinik B",
            waktu: "11:00 AM",
            alasan: "Konsultasi Gizi",
            status: "Disetujui",
        },
        {
            pasien: "Sam Smith",
            dokter: "Dr. Lee",
            tanggal: "2024-12-10",
            tempat: "Klinik C",
            waktu: "01:00 PM",
            alasan: "Konsultasi Umum",
            status: "Dijadwalkan",
        },
    ];

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

            {/* Appointment Button */}
            <div className="absolute top-40 right-44">
                <button
                    type="button"
                    className="w-auto bg-sky-300 shadow-xl shadow-sky-200 text-white flex justify-center items-center gap-2 p-2 rounded-xl hover:bg-sky-200 focus:outline-none"
                    onClick={openModal}
                >
                    <AlarmClockPlus size={20} />
                    Appointment
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
                                    Nama Dokter
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tanggal
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tempat
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Waktu
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Keluhan
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((appointment, index) => (
                                <tr
                                    key={index}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                >
                                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                        {appointment.pasien}
                                    </td>
                                    <td className="px-6 py-4">{appointment.dokter}</td>
                                    <td className="px-6 py-4">{appointment.tanggal}</td>
                                    <td className="px-6 py-4">{appointment.tempat}</td>
                                    <td className="px-6 py-4">{appointment.waktu}</td>
                                    <td className="px-6 py-4">{appointment.alasan}</td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${appointment.status === "Dijadwalkan"
                                                    ? "bg-red-300 border border-red-700"
                                                    : "bg-blue-300 border border-blue-700"
                                                }`}
                                        >
                                            {appointment.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

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
                        <h2 className="text-xl font-semibold mb-4">Appointment</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Username</label>
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
        </>
    );
}

