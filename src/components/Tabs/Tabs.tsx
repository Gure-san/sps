import React from 'react'

export function Tabs() {
  const activeStyle = 'border-b-2 border-black';
  return (
    <div className='flex'>
      {/* Tabs Link, ini sementara pake element button yak, nanti kalo udah masuk routing, ganti pake link component punya nya react router */}
      <button className={`min-w-max mr-4 pb-2 text-sm font-semibold ${activeStyle}`}>
        Presensi
      </button>
      <button className={`min-w-max mr-4 pb-2 text-sm font-semibold`}>
        Riwayat Kegiatan Presensi Kamu
      </button>
    </div>
  )
}
