// React Router
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center'>
      <div className='  -translate-y-6'>
        {/* Header */}
        <div className='flex flex-col items-center'>
          <h1 className='font-bold text-2xl'>SPS</h1>
          <p>Sistem Presensi Siswa</p>
        </div>

        {/* Body (Form) */}
        <form className='flex flex-col items-center my-6'>
          <h2 className='font-bold mb-2 text-xl'>Login</h2>
          <div className='flex flex-col w-full'>
            <input
              type='text'
              className='px-4 py-2 mt-2 border border-dark-100 bg-white focus:border-black rounded-md text-sm '
              placeholder='Nama Lengkap'
            />
            <input
              type='password'
              className='px-4 py-2 mt-2 border border-dark-100 bg-white focus:border-black rounded-md text-sm '
              placeholder='Password'
            />
          </div>
          <button className='bg-black text-white text-sm w-full py-2 mt-4 rounded-md'>
            Continue
          </button>
        </form>

        {/* Footer */}
        <div className='flex flex-col items-center'>
          <p className='text-sm font-semibold cursor-pointer'>
            Tidak bisa login?
          </p>
          <p className='text-sm underline cursor-pointer'>
            Hubungi Admin untuk mengatasi login kamu
          </p>
        </div>
      </div>
    </div>
  );
}
