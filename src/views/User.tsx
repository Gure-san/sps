// React Router
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div>
      <h1 className="font-bold text-xl">Profil</h1>

      <div className="my-6">
        {/* Name Section */}
        <div className="mb-4">
          <h2 className="font-semibold text-lg mb-1"> Nama Lengkap : </h2>
          <p> Abdul Aziz Rahmat Ibnu Fani</p>
        </div>

        {/* Class Section */}
        <div className="mb-4">
          <h2 className="font-semibold text-lg mb-1">Kelas dan No Absen : </h2>
          <p>XII RPL A - 1</p>
        </div>

        {/* Phone Number Section */}
        <div className="mb-4">
          <h2 className="font-semibold text-lg mb-1">
            No Telephone (Whatsapp) :
          </h2>
          <div className="flex">
            <p>081235918153</p>
          </div>
        </div>

        {/* Device Name Section */}
        <div className="mb-4">
          <h2 className="font-semibold text-lg mb-1">
            Nama Perangkat :
          </h2>
          <div className="flex">
            <p>Redmi 9C</p>
          </div>
        </div>

        {/* Device ID Section */}
        <div className="mb-4">
          <h2 className="font-semibold text-lg mb-1">
            ID Perangkat :
          </h2>
          <div className="flex">
            <p>123MVH1341%$HV</p>
          </div>
        </div>
      </div>

      <Link
      to={'/presensi'} 
      className="bg-black text-white px-4 py-2 rounded-md text-sm">
        Kembali
      </Link>
    </div>
  );
}
