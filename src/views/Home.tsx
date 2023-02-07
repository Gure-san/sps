import React from 'react';
import { Header } from '../components/Header';
import { Tabs } from '../components/Tabs';
import { Wrapper } from '../components/Wrapper';
import { Notification } from '../components/Notification';
import { SkeletonMap } from '../components/Skeleton';
import { Label } from '../components/Label';
import { Pagination } from '../components/Pagination';
import { labelType } from '../types/labelType';
import { DeviceSizeHeaderComponent } from '../types/headerTyped';
import { HomeFormSectionPropType, formType } from '../types/homeFormSectionType';
import { notificationType } from '../types/notificationType';
import swapIcon from '../assets/swap.svg';
import sort from '../assets/sort.svg';

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

function HomeFormSection({ type }: HomeFormSectionPropType) {
  switch (type) {
    case formType.ATTEND:
      let message = 'Kamu berada di dalam area SMKN 4 MALANG';
      return (
        <div>
          <FormToggle />

          <div>
            <p className="text-sm mb-2.5">
              *pastikan kamu masuk wilayah
              <span className="font-semibold"> smkn 4 malang pada map </span>
            </p>

            <Notification type={notificationType.VALID} message={message} />

            <button className="mb-6 text-sm text-white bg-black py-2 px-4 rounded-md">
              Presensi - <span>06.02</span>
            </button>

            {/* Map */}
            <SkeletonMap />
          </div>
        </div>
      );

    case formType.PERMIT:
      return (
        <div>
          <FormToggle />

          <div>
            <form action="">
              <div>
                <h2>* Jenis Izin : </h2>
              </div>
            </form>
          </div>
        </div>
      );
  }
}

// Precense History Components
function HomePrecenseHistorySection() {
  return (
    <div>
      {/* Label group */}
      <div className="w-full overflow-auto scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-gray-200 pb-6 mb-6">
        <div className="flex min-w-max">
          <Label group={labelType.PRESENT}>Hadir : 18090</Label>

          <Label group={labelType.PERMISSION}>Izin : 29</Label>

          <Label group={labelType.PERMISSION}>Sakit : 35</Label>

          <Label group={labelType.ABSENT}>Alpha : 8</Label>

          <Label group={labelType.LATE}>Terlambat : 40</Label>
        </div>
      </div>

      {/* Tabel */}
      <div>
        <h2 className="mb-4 font-bold text-lg">Riwayat Presensi</h2>

        <div className="relative overflow-x-auto sm:rounded-lg">
          <table className="w-full text-sm text-left ">
            <thead className="text-sm capitalize bg-slate-100">
              <tr className="border-b">
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Tanggal
                    <button className="ml-4">
                      <img src={sort} />
                    </button>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td scope="row" className="px-6 py-4 whitespace-nowrap">
                  Kamis, 15 Januari 2023
                </td>
                <td className="px-6 py-4">
                  <Label group={labelType.PRESENT} noBorder={true}>
                    Hadir
                  </Label>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td scope="row" className="px-6 py-4 whitespace-nowrap">
                  Kamis, 15 Januari 2023
                </td>
                <td className="px-6 py-4">
                  <Label group={labelType.PERMISSION} noBorder={true}>
                    Sakit
                  </Label>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td scope="row" className="px-6 py-4 whitespace-nowrap">
                  Kamis, 15 Januari 2023
                </td>
                <td className="px-6 py-4">
                  <Label group={labelType.LATE} noBorder={true}>
                    Terlambat
                  </Label>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td scope="row" className="px-6 py-4 whitespace-nowrap">
                  Kamis, 15 Januari 2023
                </td>
                <td className="px-6 py-4">
                  <Label group={labelType.PERMISSION} noBorder={true}>
                    Izin
                  </Label>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td scope="row" className="px-6 py-4 whitespace-nowrap">
                  Kamis, 15 Januari 2023
                </td>
                <td className="px-6 py-4">
                  <Label group={labelType.ABSENT} noBorder={true}>
                    Alpha
                  </Label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <Pagination /> */}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Header size={DeviceSizeHeaderComponent.MOBILE} />

      <Wrapper className="m-auto max-w-[768px] px-6 pb-6">
        <HomeHeadSection />
        <HomePrecenseHistorySection />
        {/* <HomeFormSection type={formType.PERMIT} /> */}
      </Wrapper>
    </div>
  );
}
