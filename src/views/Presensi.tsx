import React from 'react';
import { Header } from '../components/Header';
import { Tabs } from '../components/Tabs';
import { Wrapper } from '../components/Wrapper';
import { Notification } from '../components/Notification';
import { SkeletonMap } from '../components/Skeleton';
import { deviceSizeHeaderComponent } from '../types/headerType';
import { homeFormSectionType, formType } from '../types/homeFormSectionType';
import { notification } from '../types/notificationType';
import swapIcon from '../assets/swap.svg';

export function HomeHeadSection() {
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

function HomeFormSection({ type }: homeFormSectionType) {
  switch (type) {
    case formType.ATTEND:
      let message = 'Kamu berada di dalam area SMKN 4 MALANG';
      return (
        <div>
          <p className="text-sm mb-2.5">
            *pastikan kamu masuk wilayah
            <span className="font-semibold"> smkn 4 malang pada map </span>
          </p>

          <Notification type={notification.VALID} message={message} />

          <button className="mb-6 text-sm text-white bg-black py-2 px-4 rounded-md">
            Presensi - <span>06.02</span>
          </button>

          {/* Map */}
          <SkeletonMap />
        </div>
      );

    case formType.PERMIT:
      return (
        <div>
          <form action="">
            <div>
              <h2>* Jenis Izin : </h2>
            </div>
          </form>
        </div>
      );
  }
}

export default function Presensi() {
  return (
    <div>
      <Header size={deviceSizeHeaderComponent.MOBILE} />

      <Wrapper className="m-auto max-w-[768px] px-6 pb-6">
        <React.Fragment>
          {/* Info & Tab Navigation */}
          <HomeHeadSection />

          {/* Form */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h1 className="font-bold text-xl">Form Izin / Sakit</h1>
              <button className="bg-black p-2 rounded-md h-max">
                <img src={swapIcon} />
              </button>
            </div>

            <HomeFormSection type={formType.ATTEND} />
          </div>
        </React.Fragment>
      </Wrapper>
    </div>
  );
}
