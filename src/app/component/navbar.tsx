import Link from 'next/link';
import { Home, LogIn } from 'lucide-react';
import { CalendarClock } from 'lucide-react';
import { FileScan } from 'lucide-react';
import { FileText } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { User } from 'lucide-react';
import { Users } from 'lucide-react';


export default function Navbar() {

  return (

    <div className="w-12 my-auto ml-10 h-auto bg-white flex flex-col justify-between p-4 rounded-full shadow-xl overflow-hidden shadow-sky-100">
      <nav>
        <ul className="space-y-8">
          {/* Home */}
          <li>
            <a
              href="/"
              className="flex justify-center items-center text-gray-600 hover:text-sky-500 transition-colors duration-200"
            >
              <Home size={24} />
            </a>
          </li>

          {/* Sign-in */}
          <li>
            <Link
              href="/auth/login"
              className="flex justify-center items-center text-gray-600 hover:text-sky-500 transition-colors duration-200"
            >
              <LogIn size={24} />
            </Link>
          </li>


          {/* dokter */}
          {/* calendar Dokter */}
          <li>
            <Link
              href="/dokter/jadwalTemu"
              className="flex justify-center items-center text-gray-600 hover:text-sky-500 transition-colors duration-200"
            >
              <CalendarClock size={24} />
            </Link>
          </li>

          {/* hasil periksa dokter dari gambar admin*/}
          <li>
            <Link
              href="/dokter/analisis"
              className="flex justify-center items-center text-gray-600 hover:text-sky-500 transition-colors duration-200"
            >
              <FileText size={24} />
            </Link>
          </li>

          {/* pasien */}
          {/* calendar Pasien */}
          <li>
            <Link
              href="/pasien/appoitment"
              className="flex justify-center items-center text-gray-600 hover:text-sky-500 transition-colors duration-200"
            >
              <CalendarClock size={24} />
            </Link>
          </li>

          {/* hasil periksa dokter dari gambar admin*/}
          <li>
            <Link
              href="/pasien/hasilPeriksa"
              className="flex justify-center items-center text-gray-600 hover:text-sky-500 transition-colors duration-200"
            >
              <FileText size={24} />
            </Link>
          </li>


          {/* admin */}
          {/* data dokter*/}
          <li>
            <Link
              href="/admin/dataDokter"
              className="flex justify-center items-center text-gray-600 hover:text-sky-500 transition-colors duration-200"
            >
              <User size={24} />
            </Link>
          </li>

          {/* data pasien*/}
          <li>
            <Link
              href="/admin/dataPasien"
              className="flex justify-center items-center text-gray-600 hover:text-sky-500 transition-colors duration-200"
            >
              <Users size={24} />
            </Link>
          </li>
          
          {/* data Appointment */}
          <li>
            <Link
              href="/dokter/jadwalTemu"
              className="flex justify-center items-center text-gray-600 hover:text-sky-500 transition-colors duration-200"
            >
              <CalendarClock size={24} />
            </Link>
          </li>

          {/* file scan untuk upload gambar dari admin*/}
          <li>
            <Link
              href="/admin/filePasien"
              className="flex justify-center items-center text-gray-600 hover:text-sky-500 transition-colors duration-200"
            >
              <FileScan size={24} />
            </Link>
          </li>

          {/* logout */}
          <li>
            <Link
              href="/auth/home"
              className="flex justify-center items-center text-gray-600 hover:text-sky-500 transition-colors duration-200"
            >
              <LogOut size={24} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}