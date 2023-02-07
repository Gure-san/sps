import React from 'react';
import { Header } from '../components/Header';
import { Wrapper } from '../components/Wrapper';
import { DeviceSizeHeaderComponent } from '../types/headerTyped';

export default function User() {
  return (
    <div>
      <Header size={DeviceSizeHeaderComponent.MOBILE} />
      <Wrapper className="m-auto max-w-[768px] px-6 pb-6">
        <h1 className='font-bold text-xl'>Profil</h1>

        <div className='my-6'>
          {/* Name Section */}
          <div className='mb-4'>
            <h2 className='font-semibold text-lg mb-1'> Nama Lengkap : </h2>
            <p> Abdul Aziz Rahmat Ibnu Fani</p>
          </div>

          {/* Class Section */}
          <div className='mb-4'>
            <h2 className='font-semibold text-lg mb-1'>Kelas dan No Absen : </h2>
            <p>XII RPL A - 1</p>
          </div>

          {/* Phone Section */}
          <div>
            <h2 className='font-semibold text-lg mb-1'>No Telephone (Whatsapp)</h2>
            <div className='flex'>
              <p>081235918153</p>
              <button className='ml-3 bg-black text-white text-xs font-semibold rounded-md px-4 py-1'>Edit</button>
            </div>
          </div>
        </div>

        <button className='bg-black text-white px-4 py-2 rounded-md text-sm font-semibold'>
          Kembali
        </button>
      </Wrapper>
    </div>
  );
}
