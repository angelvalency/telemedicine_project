"use client";

import Image from "next/image";
import Navbar from "@/app/component/navbar";
import React, { useState } from "react";

export default function HasilPeriksaPage() {
    const [searchTerm, setSearchTerm] = useState(""); // State for search term

    // Data appointments untuk tabel
    const [appointments, setAppointments] = useState([
        {
            id: 1,
            pasien: "John Doe",
            dokter: "Dr. Smith",
            tanggal: "2024-12-01",
            tempat: "Klinik A",
            waktu: "10:00 AM",
            alasan: "Pemeriksaan Rutin",
            status: "Dijadwalkan",
        },
        {
            id: 2,
            pasien: "Jane Doe",
            dokter: "Dr. Harris",
            tanggal: "2024-12-05",
            tempat: "Klinik B",
            waktu: "11:00 AM",
            alasan: "Konsultasi Gizi",
            status: "Disetujui",
        },
        {
            id: 3,
            pasien: "Sam Smith",
            dokter: "Dr. Lee",
            tanggal: "2024-12-10",
            tempat: "Klinik C",
            waktu: "01:00 PM",
            alasan: "Konsultasi Umum",
            status: "Dijadwalkan",
        },
    ]);

    // Function to update appointment status
    const handleStatusChange = (id: number, newStatus: "Dijadwalkan" | "Disetujui" | "Ditolak") => {
        const updatedAppointments = appointments.map(appointment =>
            appointment.id === id ? { ...appointment, status: newStatus } : appointment
        );
        setAppointments(updatedAppointments);
    };

    // CRUD: Delete an appointment
    const handleDelete = (id: number) => {
        const updatedAppointments = appointments.filter(appointment => appointment.id !== id);
        setAppointments(updatedAppointments);
    };

    // Filter appointments based on doctor's name
    const filteredAppointments = appointments.filter(appointment =>
        appointment.dokter.toLowerCase().includes(searchTerm.toLowerCase())
    );

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

            <div className="grid grid-rows-2">
                <div className="ml-4 w-1/3 mt-52 relative">
                    {/* Search Bar */}
                    <form className="flex items-center max-w-sm mx-auto">
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                                </svg>
                            </div>
                            <input type="text" id="simple-search" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Search branch name..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            required />
                        </div>
                        <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-sky-300 rounded-lg hover:bg-sky-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </form>

                </div>


                {/* Table */}
                <div className="h-screen w-screen -mt-32 mx-32 overflow-hidden sm:rounded-lg">
                    <div className="h-screen overflow-hidden">
                        <table className="w-3/4 text-sm text-left shadow-md rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Nama Pasien</th>
                                    <th scope="col" className="px-6 py-3">Nama Dokter</th>
                                    <th scope="col" className="px-6 py-3">Tanggal</th>
                                    <th scope="col" className="px-6 py-3">Tempat</th>
                                    <th scope="col" className="px-6 py-3">Waktu</th>
                                    <th scope="col" className="px-6 py-3">Alasan</th>
                                    <th scope="col" className="px-6 py-3">Status</th>
                                    <th scope="col" className="px-6 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredAppointments.map((appointment) => (
                                    <tr
                                        key={appointment.id}
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
                                                    : appointment.status === "Disetujui"
                                                        ? "bg-blue-300 border border-blue-700"
                                                        : "bg-gray-300 border border-gray-700"
                                                    }`}
                                            >
                                                {appointment.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 flex gap-2">
                                            <button
                                                className="px-3 py-1 rounded-full bg-green-300 border border-green-700 text-white text-sm font-semibold"
                                                onClick={() =>
                                                    handleStatusChange(appointment.id, "Disetujui")
                                                }
                                            >
                                                Disetujui
                                            </button>
                                            <button
                                                className="px-3 py-1 rounded-full bg-red-300 border border-red-700 text-white text-sm font-semibold"
                                                onClick={() =>
                                                    handleStatusChange(appointment.id, "Ditolak")
                                                }
                                            >
                                                Ditolak
                                            </button>
                                            <button
                                                className="px-3 py-1 rounded-full bg-yellow-300 border border-yellow-700 text-white text-sm font-semibold"
                                                onClick={() =>
                                                    handleStatusChange(appointment.id, "Dijadwalkan")
                                                }
                                            >
                                                Dijadwalkan
                                            </button>
                                            <button
                                                className="px-3 py-1 rounded-full bg-gray-500 border border-gray-700 text-white text-sm font-semibold"
                                                onClick={() => handleDelete(appointment.id)}
                                            >
                                                Hapus
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        </>
    );
}
