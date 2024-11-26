"use client";

import Image from "next/image";
import Navbar from "@/app/component/navbar";
import React, { useState } from "react";
import { Pencil } from "lucide-react";

// Define Modal Props Type
interface ModalProps {
  show: boolean;
  onClose: () => void;
  onSave: (keterangan: string, tindakLanjut: string) => void;
  initialKeterangan: string;
  initialTindakLanjut: string;
}

// Modal component
const Modal = ({
  show,
  onClose,
  onSave,
  initialKeterangan,
  initialTindakLanjut,
}: ModalProps) => {
  const [keterangan, setKeterangan] = useState(initialKeterangan);
  const [tindakLanjut, setTindakLanjut] = useState(initialTindakLanjut);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white p-6 rounded-lg w-96">
        <h3 className="text-xl mb-4">Edit Keterangan dan Tindak Lanjut</h3>
        <textarea
          value={keterangan}
          onChange={(e) => setKeterangan(e.target.value)}
          className="w-full h-20 p-2 border border-gray-300 rounded-lg mb-4"
          placeholder="Masukkan keterangan"
        />
        <textarea
          value={tindakLanjut}
          onChange={(e) => setTindakLanjut(e.target.value)}
          className="w-full h-20 p-2 border border-gray-300 rounded-lg"
          placeholder="Masukkan tindak lanjut"
        />
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg mr-2"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(keterangan, tindakLanjut)}
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
  // State for keterangan and tindak lanjut
  const [keteranganList, setKeteranganList] = useState<string[]>([
    "Pemeriksaan rutin untuk evaluasi kesehatan.",
    "Hasil pemeriksaan laboratorium.",
  ]);
  const [tindakLanjutList, setTindakLanjutList] = useState<string[]>([
    "Tidak ada tindak lanjut diperlukan.",
    "Tindak lanjut dengan dokter spesialis.",
  ]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // Handle edit function
  const handleEdit = (index: number) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  // Handle save function
  const handleSave = (newKeterangan: string, newTindakLanjut: string) => {
    if (currentIndex !== null) {
      const updatedKeteranganList = [...keteranganList];
      const updatedTindakLanjutList = [...tindakLanjutList];

      updatedKeteranganList[currentIndex] = newKeterangan;
      updatedTindakLanjutList[currentIndex] = newTindakLanjut;

      setKeteranganList(updatedKeteranganList);
      setTindakLanjutList(updatedTindakLanjutList);
      setShowModal(false);
    }
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-full flex justify-left ml-20">
        <Image
          src="/assets/Telemedis_logo.svg"
          alt="Telemedis Logo"
          width={180}
          height={180}
          className="z-10"
        />
      </div>
      {/* Navbar */}
      <Navbar />

      {/* Table */}
      <div className="h-screen w-screen mt-36 mx-32 overflow-hidden sm:rounded-lg">
        <table className="w-3/4 text-sm text-left shadow-md rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">Nama Pasien</th>
              <th className="px-6 py-3">Tanggal</th>
              <th className="px-6 py-3">Keluhan</th>
              <th className="px-6 py-3">Keterangan</th>
              <th className="px-6 py-3">Tindak Lanjut</th>
              <th className="px-6 py-3">Edit</th>
            </tr>
          </thead>
          <tbody>
            {keteranganList.map((keterangan, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Pasien {String.fromCharCode(65 + index)}
                </td>
                <td className="px-6 py-4">25 November 2024</td>
                <td className="px-6 py-4">Keluhan {index + 1}</td>
                <td className="px-6 py-4">{keterangan}</td>
                <td className="px-6 py-4">{tindakLanjutList[index]}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-yellow-500 hover:text-yellow-400"
                  >
                    <Pencil size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSave}
        initialKeterangan={
          currentIndex !== null ? keteranganList[currentIndex] : ""
        }
        initialTindakLanjut={
          currentIndex !== null ? tindakLanjutList[currentIndex] : ""
        }
      />
    </>
  );
}
