"use client";

import Image from "next/image";
import Navbar from "@/app/component/navbar";
import React, { useState } from "react";
import { Pencil } from "lucide-react";

// Define Modal Props Type
interface ModalProps {
  show: boolean;
  onClose: () => void;
  onSave: (keterangan: string) => void;
  initialKeterangan: string;
}

// Modal component
const Modal = ({ show, onClose, onSave, initialKeterangan }: ModalProps) => {
  const [keterangan, setKeterangan] = useState(initialKeterangan);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h3 className="text-xl mb-4">Edit Keterangan</h3>
        <textarea
          value={keterangan}
          onChange={(e) => setKeterangan(e.target.value)}
          className="w-full h-32 p-2 border border-gray-300 rounded-lg"
          placeholder="Masukkan keterangan"
        />
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg mr-2"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(keterangan)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Analisis() {
  // Define state with proper types
  const [keteranganList, setKeteranganList] = useState<string[]>([
    "Pemeriksaan rutin untuk evaluasi kesehatan.",
    "Hasil pemeriksaan laboratorium.",
  ]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // Handle edit function with proper type
  const handleEdit = (index: number) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  // Handle save function with proper type
  const handleSave = (newKeterangan: string) => {
    if (currentIndex !== null) {
      const updatedKeteranganList = [...keteranganList];
      updatedKeteranganList[currentIndex] = newKeterangan;
      setKeteranganList(updatedKeteranganList);
      setShowModal(false);
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
      <div className="h-screen w-screen mt-36 mx-32 overflow-hidden sm:rounded-lg">
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
                  Jenis Pemeriksaan
                </th>
                <th scope="col" className="px-6 py-3">
                  Dokumen Pemeriksaan
                </th>
                <th scope="col" className="px-6 py-3">

                </th>
                <th scope="col" className="px-6 py-3">
                  Keterangan
                </th>
                <th scope="col" className="px-6 py-3">
                  Edit
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Pasien A
                </td>
                <td className="px-6 py-4">Dr. Andi Setiawan</td>
                <td className="px-6 py-4">25 November 2024</td>
                <td className="px-6 py-4">Pemeriksaan rutin</td>
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
                <td className="px-6 py-4">{keteranganList[0]}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleEdit(0)}
                    className="text-yellow-500 hover:text-yellow-400"
                  >
                    <Pencil size={20} />
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Pasien B
                </td>
                <td className="px-6 py-4">Dr. Lisa Putri</td>
                <td className="px-6 py-4">22 November 2024</td>
                <td className="px-6 py-4">Pemeriksaan laboratorium</td>
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
                    href="/path-to-dokumen.pdf"
                    download
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Unduh Dokumen
                  </a>
                </td>
                <td className="px-6 py-4">{keteranganList[1]}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleEdit(1)}
                    className="text-yellow-500 hover:text-yellow-400"
                  >
                    <Pencil size={20} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSave}
        initialKeterangan={keteranganList[currentIndex ?? 0]}
      />
    </>
  );
}
