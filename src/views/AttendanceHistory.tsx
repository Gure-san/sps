// React
import { useMemo, useRef, useState, useEffect } from 'react';

// Utils
import {v4 as uuidv4} from 'uuid';

// Components
import { Label } from '../components/Label';

// Type
import { labelType } from '../types/components/labelType';

// Components
import { Pagination } from '../components/Pagination';

// Assets
import sort from '../assets/sort.svg';

// Costum Hooks
import { useEventListener } from '../hooks/useEventListener';
import { useScroll } from '../hooks/useScroll';

// Data Dummy (For Development Purpose)
import data from '../mockData.json';

const pageSize = 5;

export default function AttendanceHistory() {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div>
      {/* Label group */}
      <div
      className="w-full overflow-auto scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-slate-100 pb-6 my-4">
        <div className="flex min-w-max">
          <Label group={labelType.PRESENT}>Hadir : 18090</Label>

          <Label group={labelType.PERMISSION}>Izin : 29</Label>

          <Label group={labelType.PERMISSION}>Sakit : 35</Label>

          <Label group={labelType.ABSENT}>Alpha : 8</Label>

          <Label group={labelType.LATE}>Terlambat : 40</Label>
        </div>
      </div>

      {/* Tabel */}
      <div className='overflow-x-auto pb-6'>
        <h2 className="mb-4 font-bold text-lg">Riwayat Presensi</h2>

        <div className="mb-4 relative  sm:rounded-lg">
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
              {currentTableData.map(({ tanggal, status, group }) => {
                return (
                  <tr
                  key={uuidv4()} 
                  className="bg-white border-b">
                    <td scope="row" className="px-6 py-4 whitespace-nowrap">
                      {tanggal}
                    </td>
                    <td className="px-6 py-4">
                      <Label group={group} noBorder={true}>
                        {status}
                      </Label>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* <Pagination /> */}
        <Pagination
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        pageSize={pageSize}
        totalCount={data.length}
        />
      </div>
    </div>
  );
}
