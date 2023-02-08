import React from 'react';
import { AttendanceForm } from './AttendanceForm';
import { PermissionForm } from './PermissionForm';
import { Header } from '../components/Header';
import { Tabs } from '../components/Tabs';
import { Wrapper } from '../components/Wrapper';
import { DeviceSizeHeaderComponent } from '../types/headerTyped';
import swapIcon from '../assets/swap.svg';
import { Outlet } from 'react-router-dom';

// Info & Tab Navigation
function HomeHeadSection() {
  return (
    <div className="mb-6">
      <div className="mb-2">
        <h1 className="font-bold text-xl mb-2">Kegiatan Presensi Hari Ini</h1>
        <p className="font-semibold">Juma'at, 13 Januari 2023</p>
        <p className="font-semibold">Dibuka pukul - 06.02</p>
      </div>

      <Tabs />
    </div>
  );
}

// Precense Components
function FormToggle() {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h1 className="font-bold text-xl">Form Izin / Sakit</h1>
      <button className="bg-black p-2 rounded-md h-max">
        <img src={swapIcon} />
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Header size={DeviceSizeHeaderComponent.MOBILE} />
      <Wrapper className="m-auto max-w-[768px] px-6 pb-6">
        <HomeHeadSection />
        <FormToggle />
        <Outlet/>
        {/* <AttendanceForm /> */}
        {/* <PermissionForm/> */}
      </Wrapper>
    </div>
  );
}
