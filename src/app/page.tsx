import Image from "next/image";
import Navbar from "./component/navbar";
console.log('Login page is loaded');

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-full overflow-hidden p-8 my-auto gap-16 sm:p-20 font-inter">
      <main className="flex flex-col-2 gap-8 row-start-2 items-end sm:items-start">
        {/* Kolom Kiri */}
        <div>
          <Image
            src="/assets/Telemedis_logo.svg"
            alt="Telemedis Logo"
            width={180}
            height={180}
            className="-mt-48 -ml-20 mb-20"
          />
          <h2 className="-mt-24 -ml-20 text-5xl">Bringing Doctors to You, Virtually.</h2>
          <div className="mt-52 relative">
            <Image
              src="/assets/dokter.svg"
              alt="Dokter Image"
              width={600}
              height={700}
              className="-mt-44"
              priority
            />
          </div>
        </div>

        <div className="grid grid-row-2 gap-4 -mt-10">
          {/* Kolom Kanan */}
          <div className="flex justify-end items-end space-x-4 -mt-20">
            <div className="flex gap-4">
              {/* Card 1 */}
              <div className="w-60 h-48 rounded-[30px] bg-white">
                <div className="p-2 flex flex-row items-center gap-4">
                  <img
                    src="/assets/heart (1).png"
                    alt="Heart"
                    className="p-4 bg-gray-100 rounded-[20px]"
                  />
                  <p className="pt-2 text-sm">Heart Rate <br /> normal</p>
                </div>
                <Image
                  src="/assets/heart-rate.svg"
                  alt="Dokter Image"
                  width={100}
                  height={50}
                  className="-mt-4 ml-32"
                  priority
                />
                <div className="flex flex-col-2 -mt-16">
                  <p className="text-sky-200 text-5xl px-4 mt-12">60-100</p>
                  <p className="texl-lg mt-[70px] -ml-4">bpm</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="w-60 h-48 rounded-[30px] bg-white">
                <div className="p-2 flex flex-row items-center gap-4">
                  <img
                    src="/assets/drop (1).png"
                    alt="Heart"
                    className="p-4 bg-gray-100 rounded-[20px]"
                  />
                  <p className="p-2  text-sm">Cholesterol level <br /> normal</p>
                </div>
                <img
                  src="/assets/chart-simple-horizontal (3).png" className="w-30 h-30 -mt-4 ml-36"
                />
                <div className="flex flex-col-2 -mt-10">
                  <p className="text-sky-200 text-5xl px-4 mt-12">70-99</p>
                  <p className="texl-lg mt-[70px] -ml-4">mg/dL</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="w-60 h-48 rounded-[30px] bg-white">
                <div className="p-2 flex flex-row items-center gap-4">
                  <img
                    src="/assets/glucose.png"
                    alt="Glucose"
                    className="p-4 bg-gray-100 rounded-[20px]"
                  />
                  <p className="p-2  text-sm">Glucose level<br /> normal</p>
                </div>
                <Image
                  src="/assets/heart-rate.svg"
                  alt="Dokter Image"
                  width={100}
                  height={50}
                  className="-mt-4 ml-32"
                  priority
                />
                <div className="flex flex-col-2 -mt-12">
                  <p className="text-sky-200 text-5xl px-4 mt-[20px]">&lt; 200</p>
                  <p className="texl-lg mt-[40px] -ml-4">mg/dL</p>
                </div>
              </div>
            </div>

          </div>


          {/* Card Kiri dan Kanan */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Card Kiri */}
            <div className="w-full md:w-2/3 h-96 bg-white p-4 rounded-[30px] shadow-md">
              <div className="p-2 flex flex-row items-center gap-4">
                <Image
                  src="/assets/calendar.svg"
                  width={50}
                  alt="Heart"
                  height={50}
                  className="p-4 bg-gray-100 rounded-[20px]"
                />
                <p className="pt-2 text-sm">Schedule Your Appointment, <br /> Anytime, Anywhere</p>
              </div>
              <p className="text-3xl font-semibold my-4 px-2">You have an appointment<br /> with 1 doctor <br /> today !</p>
              <div>
                <div className="w-full h-24 bg-white shadow-xl drop-shadow-md  shadow-gray-100 rounded-[24px] mt-12 p-4 flex items-center">
                  {/* Card Foto Dokter */}
                  <div className="w-20 h-20 bg-gray-100 rounded-[16px] overflow-hidden">
                    <Image
                      src="/assets/dokter_jadwal.svg"
                      alt="Doctor"
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Keterangan Nama Dokter */}
                  <div className="ml-4">
                    <p className="text-lg font-semibold">dr. Teresa Adianova</p>
                    <p className="text-sm text-gray-600">Cardiologist</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Kanan */}
            <div className="w-full md:w-1/3 flex flex-col gap-8">
              <div className="bg-white p-2 rounded-[30px] h-44 shadow-md">
                <div className="p-2 flex flex-row items-center gap-4">
                  <img
                    src="/assets/hospital.svg"
                    alt="hospital"
                    width={50}
                    height={50}
                    className="p-4 bg-gray-100 rounded-[20px]"
                  />
                </div>
                <div className="flex flex-col items-start -mt-12">
                  <p className="text-2xl px-4 py-4 font-semibold mt-10">Together for</p>
                  <p className="text-sky-200 text-2xl px-4 py-4 font-semibold -mt-8">better health</p>
                </div>
              </div>

              <div className="bg-white p-2 rounded-[30px] h-44 shadow-md">
                <div className="p-2 flex flex-row items-center gap-4">
                  <img
                    src="/assets/pulse.svg"
                    alt="hospital"
                    width={50}
                    height={50}
                    className="p-4 bg-gray-100 rounded-[20px]"
                  />
                </div>
                <div className="flex flex-col items-start -mt-12">
                  <p className="text-2xl px-4 py-4 font-semibold mt-8">Health consultations </p>
                  <p className="text-sky-200 text-2xl px-4 py-4 font-semibold -mt-8">made easier</p>
                </div>
              </div>

            </div>
          </div>
          {/* card bawah  */}
          <div className="bg-white p-4 rounded-[30px] h-40 w-full shadow-md">
            <div className="p-2 flex flex-row items-center gap-4">
              <img
                src="/assets/heart (1).png"
                alt="Heart"
                className="p-4 bg-gray-100 rounded-[20px]"
              />
              <p className="pt-2 text-sm">Heart Rate <br /> normal</p>
            </div>
            <img
              src="/assets/Graph.svg"
              alt="hospital"
              width={390}
              height={10}
              className="-mt-[70px] ml-72"
            />
            <p className="-mt-20 p-4 text-sm font-regular ">Start by scheduling an appointment</p>
            <p className="-mt-8 p-4 text-xl text-sky-300 font-bold">with one of our expert doctors</p>
          </div>
        </div>
      </main>
    </div >
    </>
  );
}
