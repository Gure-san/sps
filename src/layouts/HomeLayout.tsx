// React
import React, { useState } from 'react';

// React Router
import { Outlet, Link, useLocation } from 'react-router-dom';

// Components
import { Timestamp } from '../components/Timestamp';

// Type
import { timestampType } from '../types/components/timpestampType';

export default function HomeLayout() {
  const [switchForm, setSwitchForm] = useState(false);
  const { pathname } = useLocation();

  return (
    <React.Fragment>
      <div className="mb-6">
        {/* Info Attedance Activity */}
        <div className="mb-4">
          <h1 className="font-bold text-xl">Kegiatan Presensi Hari Ini</h1>

          <div className='my-2'>
            <p>Jum'at, 13 Januari 2023</p>
            <p>
              Dibuka pukul - <Timestamp
              category={timestampType.OPEN}
              className="font-semibold" 
              time="06.02" />
            </p>
          </div>
        </div>

        {/* Tab */}
        <div className="flex border-b border-dark-100">
          <Link
            to={'/presensi'}
            className={`min-w-max mr-4 pb-2 text-sm font-semibold ${
              pathname === '/presensi' ? 'border-b-2 border-black' : ''
            }`}>
            Presensi
          </Link>

          <Link
            to={'/riwayat'}
            className={`min-w-max mr-4 pb-2 text-sm font-semibold ${
              pathname === '/riwayat' ? 'border-b-2 border-black' : ''
            }`}>
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
