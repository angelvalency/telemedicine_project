"use client";

import Image from "next/image";
import Navbar from "@/app/component/navbar";
import React, { useState } from "react";
import { X, UserRoundPlus, Pencil, Trash2 } from "lucide-react";

interface Appointment {
    id: string;
    dokter: string;
    hari: string;
    jamKerja: string;
}

export default function HasilPeriksaPage() {
    const [appointments, setAppointments] = useState<Appointment[]>([
        {
            id: '1',
            dokter: "Dr. Smith",
            hari: "Senin - Rabu",
            jamKerja: "10:00 AM - 5:00 PM",
        },
        {
            id: '2',
            dokter: "Dr. Jane",
            hari: "Kamis - Sabtu",
            jamKerja: "8:00 AM - 2:00 PM",
        },
    ]);

    const [currentAppointment, setCurrentAppointment] = useState<Partial<Appointment>>({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const openModal = (appointment?: Appointment) => {
        if (appointment) {
            setCurrentAppointment(appointment);
            setIsEditing(true);
        } else {
            setCurrentAppointment({});
            setIsEditing(false);
        }
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setCurrentAppointment({});
        setIsModalOpen(false);
        setIsEditing(false);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { dokter, hari, jamKerja } = currentAppointment;

        if (!dokter || !hari || !jamKerja) {
            alert("Semua field harus diisi!");
            return;
        }

        if (isEditing) {
            // Update existing appointment
            setAppointments(appointments.map(app =>
                app.id === currentAppointment.id ? currentAppointment as Appointment : app
            ));
        } else {
            // Add new appointment
            const newAppointment: Appointment = {
                id: String(Date.now()),
                dokter: dokter!,
                hari: hari!,
                jamKerja: jamKerja!
            };
            setAppointments([...appointments, newAppointment]);
        }

        closeModal();
    };

    const handleDelete = (id: string) => {
        if (window.confirm('Apakah Anda yakin ingin menghapus jadwal dokter ini?')) {
            setAppointments(appointments.filter(app => app.id !== id));
        }
    };

    return (
        <>
            {/* Logo */}
            <div className="relative">
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

            {/* Appointment Section */}
            <div className="w-screen mx-32 mt-28">
                <div className="w-3/4 flex justify-between items-center mb-6 gap-[800px]">
                    <h2 className="text-xl font-semibold text-gray-700">Data Dokter</h2>
                    <button
                        type="button"
                        className="w-auto bg-sky-300 shadow-xl shadow-sky-200 text-white flex justify-end items-ends gap-2 p-2 rounded-xl hover:bg-sky-200 focus:outline-none"
                        onClick={() => openModal()}
                    >
                        <UserRoundPlus size={20} />
                        Tambah Dokter
                    </button>
                </div>

                {/* Table */}
                <div className="w-full overflow-x-auto">
                    <table className="w-3/4 text-sm text-left shadow-md text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">Nama Dokter</th>
                                <th scope="col" className="px-6 py-3">Hari</th>
                                <th scope="col" className="px-6 py-3">Jam Kerja</th>
                                <th scope="col" className="px-6 py-3">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((appointment) => (
                                <tr
                                    key={appointment.id}
                                    className="bg-white border-b hover:bg-gray-50"
                                >
                                    <td className="px-6 py-4">{appointment.dokter}</td>
                                    <td className="px-6 py-4">{appointment.hari}</td>
                                    <td className="px-6 py-4">{appointment.jamKerja}</td>
                                    <td className="px-6 py-4 flex gap-2">
                                        <button
                                            onClick={() => openModal(appointment)}
                                            className="text-yellow-500 hover:text-yellow-700"
                                        >
                                            <Pencil size={20} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(appointment.id)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            <Trash2 size={20} />
                                        </button>
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
                        <button
                            onClick={closeModal}
                            className="absolute top-8 right-8 text-gray-700 hover:text-gray-900 text-xl font-bold"
                        >
                            <X size={20} />
                        </button>
                        <h2 className="text-xl font-semibold mb-4">
                            {isEditing ? 'Edit' : 'Tambah'} Data Dokter
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Nama Dokter</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    placeholder="Masukkan nama dokter"
                                    value={currentAppointment.dokter || ''}
                                    onChange={(e) => setCurrentAppointment({
                                        ...currentAppointment,
                                        dokter: e.target.value
                                    })}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Hari</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    placeholder="Masukkan hari (contoh: Senin)"
                                    value={currentAppointment.hari || ''}
                                    onChange={(e) => setCurrentAppointment({
                                        ...currentAppointment,
                                        hari: e.target.value
                                    })}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Jam Kerja</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    placeholder="Masukkan jam kerja (contoh: 10:00 - 17:00)"
                                    value={currentAppointment.jamKerja || ''}
                                    onChange={(e) => setCurrentAppointment({
                                        ...currentAppointment,
                                        jamKerja: e.target.value
                                    })}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-sky-300 shadow-xl shadow-sky-200 text-white py-3 rounded-xl hover:bg-sky-200"
                            >
                                {isEditing ? 'Update' : 'Submit'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}