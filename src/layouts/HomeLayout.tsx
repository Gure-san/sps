// React
import React, { useState } from 'react';

// React Router
import { Outlet, Link, useLocation } from 'react-router-dom';

// Components
import { Timestamp } from '../components/Timestamp';

export default function HomeLayout() {
  const [switchForm, setSwitchForm] = useState(false);
  const {pathname} = useLocation();

  return (
    <React.Fragment>
      <div className="mb-6">
        {/* Info Attedance Activity */}
        <div className="mb-4">
          <h1 className="font-bold text-xl mb-1">Kegiatan Presensi Hari Ini</h1>
          <p className="font-semibold">
            Juma'at, 13 Januari 2023
          </p>
          <p className="font-semibold">
            Dibuka pukul - <Timestamp time='06.02'/>
          </p>
        </div>

        {/* Tab */}
        <div className="flex border-b border-dark-100">
          <Link
          to={'/presensi'}
          className={`min-w-max mr-4 pb-2 text-sm font-semibold ${(pathname === '/presensi') ? 'border-b-2 border-black' : ''}`}>
            Presensi
          </Link>

          <Link
          to={'/riwayat'} 
          className={`min-w-max mr-4 pb-2 text-sm font-semibold ${(pathname === '/riwayat') ? 'border-b-2 border-black' : ''}`}>
            Riwayat Presensi
          </Link>
        </div>
      </div>

      {/* Form Group */}
      <div>
        <Outlet context={switchForm} />
      </div>
    </React.Fragment>
  );
}
