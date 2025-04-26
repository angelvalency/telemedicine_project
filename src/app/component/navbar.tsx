'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Home, LogIn, CalendarClock, FileScan, FileText, LogOut, User, Users } from 'lucide-react';

export default function Navbar() {
  // Dummy login user
  const [isLoggedIn, setIsLoggedIn] = useState(true); // ubah false kalau mau testing belum login
  const [role, setRole] = useState<'admin' | 'dokter' | 'pasien'>('admin'); // ubah role di sini

  return (
    <div className="w-12 my-auto ml-10 h-auto bg-white flex flex-col justify-between p-4 rounded-full shadow-xl overflow-hidden shadow-sky-100">
      <nav>
        <ul className="space-y-8">
          {/* Home selalu tampil */}
          <li>
            <Link href="/" className="flex justify-center items-center text-gray-600 hover:text-sky-500 transition-colors duration-200">
              <Home size={24} />
            </Link>
          </li>

          {/* Kalau belum login tampil login */}
          {!isLoggedIn && (
            <li>
              <Link href="/auth/login" className="flex justify-center items-center text-gray-600 hover:text-sky-500 transition-colors duration-200">
                <LogIn size={24} />
              </Link>
            </li>
          )}

          {/* Kalau sudah login tampil menu sesuai role */}
          {isLoggedIn && (
            <>
              {role === 'dokter' && (
                <>
                  <li>
                    <Link href="/dokter/jadwalTemu" className="flex justify-center items-center text-gray-600 hover:text-sky-500 transition-colors duration-200">
                      <CalendarClock size={24} />
                    </Link>
                  </li>
                  <li>
                    <Link href="/dokter/analisis" className="flex justify-center items-center text-gray-600 hover:text-sky-500 transition-colors duration-200">
                      <FileText size={24} />
                    </Link>
                  </li>
                </>
              )}

              {role === 'pasien' && (
                <>
                  <li>
                    <Link href="/pasien/appoitment" className="flex justify-center items-center text-gray-600 hover:text-sky-500 transition-colors duration-200">
                      <CalendarClock size={24} />
                    </Link>
                  </li>
                  <li>
                    <Link href="/pasien/hasilPeriksa" className="flex justify-center items-center text-gray-600 hover:text-sky-500 transition-colors duration-200">
                      <FileText size={24} />
                    </Link>
                  </li>
                </>
              )}

              {role === 'admin' && (
                <>
                  <li>
                    <Link href="/admin/dataDokter" className="flex justify-center items-center text-gray-600 hover:text-sky-500 transition-colors duration-200">
                      <User size={24} />
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/dataPasien" className="flex justify-center items-center text-gray-600 hover:text-sky-500 transition-colors duration-200">
                      <Users size={24} />
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/dataAppointment" className="flex justify-center items-center text-gray-600 hover:text-sky-500 transition-colors duration-200">
                      <CalendarClock size={24} />
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/filePasien" className="flex justify-center items-center text-gray-600 hover:text-sky-500 transition-colors duration-200">
                      <FileScan size={24} />
                    </Link>
                  </li>
                </>
              )}

              {/* Logout selalu tampil saat sudah login */}
              <li>
                <Link href="/auth/login" className="flex justify-center items-center text-gray-600 hover:text-sky-500 transition-colors duration-200">
                  <LogOut size={24} />
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
