"use client";

import Image from "next/image";
import Navbar from "@/app/component/navbar";

export default function HasilPeriksaPage() {
    // Data pengguna untuk tabel
    const users = [
        {
            namaLengkap: "John Doe",
            gender: "Laki-laki",
            noTelp: "08123456789",
            tempatLahir: "Surabaya",
            tanggalLahir: "1990-05-15",
            alamatTinggal: "Jl. Mawar No. 10, Surabaya",
            appointment: {
                tanggal: "2025-05-01",
                waktu: "10:00 AM",
                dokter: "Dr. Andi"
            }
        },
        {
            namaLengkap: "Jane Smith",
            gender: "Perempuan",
            noTelp: "08212345678",
            tempatLahir: "Jakarta",
            tanggalLahir: "1995-08-20",
            alamatTinggal: "Jl. Melati No. 5, Jakarta",
            appointment: {
                tanggal: "2025-05-02",
                waktu: "02:00 PM",
                dokter: "Dr. Budi"
            }
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

            {/* Table */}
            <div className="h-screen w-screen mt-40 mx-32 overflow-hidden sm:rounded-lg">
                <div className="h-screen overflow-hidden">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4 ml-2">Jadwal Temu</h2>
                    <table className="w-2/3 text-sm text-left shadow-md rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Nama Lengkap</th>
                                <th scope="col" className="px-6 py-3">Gender</th>
                                <th scope="col" className="px-6 py-3">No. Telp</th>
                                <th scope="col" className="px-6 py-3">Tempat Lahir</th>
                                <th scope="col" className="px-6 py-3">Tanggal Lahir</th>
                                <th scope="col" className="px-6 py-3">Alamat Tinggal</th>
                                <th scope="col" className="px-6 py-3">Tanggal Appointment</th>
                                <th scope="col" className="px-6 py-3">Waktu Appointment</th>
                                <th scope="col" className="px-6 py-3">Dokter</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr
                                    key={index}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                >
                                    <td className="px-6 py-4">{user.namaLengkap}</td>
                                    <td className="px-6 py-4">{user.gender}</td>
                                    <td className="px-6 py-4">{user.noTelp}</td>
                                    <td className="px-6 py-4">{user.tempatLahir}</td>
                                    <td className="px-6 py-4">{user.tanggalLahir}</td>
                                    <td className="px-6 py-4">{user.alamatTinggal}</td>
                                    <td className="px-6 py-4">{user.appointment.tanggal}</td>
                                    <td className="px-6 py-4">{user.appointment.waktu}</td>
                                    <td className="px-6 py-4">{user.appointment.dokter}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
