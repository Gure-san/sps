// React
import React, { useState } from 'react';

// React Router
import { Outlet } from 'react-router-dom';

// Type
import { formType } from '../types/formGroupType';

// Assets
import swapIcon from '../assets/swap.svg';

export default function HomeLayout() {
  const [activeForm, setActiveForm] = useState({
    type: formType.PERMISSION
  });

  return (
    <React.Fragment>
      <div className="mb-6">
        {/* Info Attedance Activity */}
        <div className="mb-2">
          <h1 className="font-bold text-xl mb-2">Kegiatan Presensi Hari Ini</h1>
          <p className="font-semibold">Juma'at, 13 Januari 2023</p>
          <p className="font-semibold">Dibuka pukul - 06.02</p>
        </div>

        {/* Tab */}
        <div className="flex border-b border-dark-100">
          {/* Tabs Link, ini sementara pake element button yak, nanti kalo udah masuk routing, ganti pake link component punya nya react router */}
          <button className={`min-w-max mr-4 pb-2 text-sm font-semibold`}>
            Presensi
          </button>
          <button className={`min-w-max mr-4 pb-2 text-sm font-semibold`}>
            Riwayat Kegiatan Presensi Kamu
          </button>
        </div>
      </div>

      <div>
        {/* Form Switcher */}
        <div className="mb-4 flex items-center justify-between">
          <h1 className="font-bold text-xl">Form Hadir</h1>
          <button className="bg-black p-2 rounded-md h-max">
            <img src={swapIcon} />
          </button>
        </div>

        <Outlet context={activeForm}/>
      </div>
    </React.Fragment>
  );
}
