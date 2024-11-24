import React from 'react';
import Link from 'next/link';
import { Home, LogIn } from 'lucide-react';


export default function Navbar() {
  return (
    <div className="w-12 my-auto ml-10 h-32 bg-white flex flex-col justify-between p-4 rounded-full shadow-xl overflow-hidden shadow-sky-100">
      <nav>
        <ul className="space-y-8">
          {/* Atur Jadwal */}
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
        </ul>
      </nav>
    </div>
  );
}