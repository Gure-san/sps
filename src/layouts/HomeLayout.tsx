// React
import React, { useEffect, useState } from 'react';

// React Router
import { Outlet, Link, useLocation } from 'react-router-dom';

// Components
import { Timestamp } from '../components/Timestamp';
import { Notification } from '../components/Notification';

// Costum Hooks
import { useLocalStorage } from '../hooks/useLocalStorage';

// Type
import { timestampType } from '../types/components/timpestampType';
import { notificationType } from '../types/components/notificationType';

export default function HomeLayout() {
  const [switchForm, setSwitchForm] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    // Development only
    const hasAttended = useLocalStorage({
      method: 'get',
      key: 'sps.attedance',
    });

    if (hasAttended) {
      setSwitchForm(hasAttended);
    }
  }, []);

  return (
    <React.Fragment>
      <div className="mb-6">
        {/* Info Attedance Activity */}
        <div className="mb-4">
          <h1 className="font-bold text-xl">Kegiatan Presensi Hari Ini</h1>

          <div className="my-2">
            <p>Jum'at, 13 Januari 2023</p>
            <p>
              Dibuka pukul -{' '}
              <Timestamp
                category={timestampType.OPEN}
                className="font-semibold"
                time="06.02"
              />
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
        {
          !switchForm
            ? <Outlet context={setSwitchForm} />
            : <Notification
              className='text-sm'
              noClose={true}
              type={notificationType.VALID}>
              <p>Kamu sudah presensi pada pukul <span className='font-bold'>06.23</span> dengan status <span className='font-bold'>Hadir</span></p>
            </Notification>
        }
      </div>
    </React.Fragment>
  );
}
