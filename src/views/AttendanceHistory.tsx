import React from 'react';
import { Label } from '../components/Label';
import { labelType } from '../types/labelType';
import sort from '../assets/sort.svg';

export default function AttendanceHistory() {
  return (
    <div>
      {/* Label group */}
      <div className="w-full overflow-auto scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-slate-100 pb-6 mb-6">
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
                  Status
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
