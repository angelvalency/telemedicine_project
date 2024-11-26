"use client";

import Image from "next/image";
import Navbar from "@/app/component/navbar";
import React, { useState } from "react";
import { X } from "lucide-react";
import { AlarmClockPlus } from "lucide-react";
import { ChevronDown } from "lucide-react";

export default function HasilPeriksaPage() {
    const [doctorSchedule, setDoctorSchedule] = useState("");
    const [doctorName, setDoctorName] = useState("");
    const [doctorDropdownOpen, setDoctorDropdownOpen] = useState(false);
    const [jadwalDropdownOpen, setJadwalDropdownOpen] = useState(false);
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
            keluhan: "Pemeriksaan Rutin",
            status: "Dijadwalkan",
        },
        {
            pasien: "Jane Doe",
            dokter: "Dr. Harris",
            tanggal: "2024-12-05",
            tempat: "Klinik B",
            waktu: "11:00 AM",
            keluhan: "Konsultasi Gizi",
            status: "Disetujui",
        },
        {
            pasien: "Sam Smith",
            dokter: "Dr. Lee",
            tanggal: "2024-12-10",
            tempat: "Klinik C",
            waktu: "01:00 PM",
            keluhan: "Konsultasi Umum",
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
                                    Nama Dokter
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Hari
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Jam Kerja
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
                                    <td className="px-6 py-4">{appointment.dokter}</td>
                                    <td className="px-6 py-4">{appointment.tanggal}</td>
                                    <td className="px-6 py-4">{appointment.waktu}</td>
                                    <td className="px-6 py-4">{appointment.keluhan}</td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-sm font-sm ${appointment.status === "Dijadwalkan"
                                                ? "border border-yellow-200 bg-yellow-50 text-yellow-400 hover:bg-yellow-200"
                                                : appointment.status === "Disetujui"
                                                    ? "border border-blue-200 bg-blue-50 text-blue-400 hover:bg-blue-200"
                                                    : "border border-red-200 bg-red-50 text-red-400 hover:bg-red-200"
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
                            <header>
                                <p className="text-sm font-medium text-gray-700"></p>
                            </header>

                            {/* nama pasien
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Nama Pasien</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
                            </div> */}

                            {/* nama dokter */}
                            <div className="relative mb-4">
                                <label htmlFor="doctorName" className="block text-sm font-medium text-gray-700">
                                    Nama Dokter
                                    <ChevronDown size={20} className="absolute right-4 top-1/2 translate-y-auto text-gray-500" />
                                </label>
                                <button
                                    type="button"
                                    onClick={() => setDoctorDropdownOpen(!doctorDropdownOpen)}
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-xl text-left focus:outline-none focus:ring-2 focus:ring-cyan-100"
                                >
                                    {doctorName || "Select Doctor"}
                                </button>
                                {doctorDropdownOpen && (
                                    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow">
                                        <ul className="py-1 text-sm text-gray-700">
                                            {["Dr. Smith", "Dr. Johnson", "Dr. Williams"].map((option) => (
                                                <li key={option}>
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setDoctorName(option);
                                                            setDoctorDropdownOpen(false);
                                                        }}
                                                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                                    >
                                                        {option}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>


                            {/* tanggal temu */}
                            <div className="relative mb-4">
                                <label htmlFor="doctorSchedule" className="block text-sm font-medium text-gray-700">
                                    Jadwal Dokter
                                    <ChevronDown size={20} className="absolute right-4 top-1/2 translate-y-auto text-gray-500" />
                                </label>
                                <button
                                    type="button"
                                    onClick={() => setJadwalDropdownOpen(!jadwalDropdownOpen)}
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-xl text-left focus:outline-none focus:ring-2 focus:ring-cyan-100"
                                >
                                    {doctorSchedule || "Select Schedule"}
                                </button>
                                {jadwalDropdownOpen && (
                                    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow">
                                        <ul className="py-1 text-sm text-gray-700">
                                            {/* Array jadwal dokter */}
                                            {["2024-11-28", "2024-11-29", "2024-12-01"].map((date) => (
                                                <li key={date}>
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setDoctorSchedule(date); // Set jadwal dokter
                                                            setJadwalDropdownOpen(false); // Tutup dropdown
                                                        }}
                                                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                                    >
                                                        {date}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
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

