// React
import { useRef } from 'react';

// Type
import {
  CostumComponentPropType,
  HANDLE_CASE,
} from '../../types/components/formGroupType';

// Costum Hooks
import { useClickOutside } from '../../hooks/useClickOutside';

// Assets
import arrowDown from '../../assets/arrow-down.svg';

const dataDummy = [
  {
    id: 1,
    nama: 'Sakit',
  },
  {
    id: 2,
    nama: 'Dispensasi',
  },
  {
    id: 3,
    nama: 'Kegiatan lain',
  },
];

export function Select({ formGroupData, dispatch }: CostumComponentPropType) {
  const selectContainer = useRef(null);

  useClickOutside({
    refElement: selectContainer,
    closeTrigger: () => {
      if (formGroupData.permission.select.active) {
        dispatch({
          type: HANDLE_CASE.FORM.PERMISSION.SELECT.ACTIVE_SELECT_COMPONENT,
        });
      }
    },
  });

  return (
    <div className="relative" ref={selectContainer}>
      <div className="h-max relative">
        <input
          onClick={() =>
            dispatch({
              type: HANDLE_CASE.FORM.PERMISSION.SELECT.ACTIVE_SELECT_COMPONENT,
            })
          }
          className={`text-sm text-black bg-white w-full px-4 py-2 border border-dark-100 rounded-md cursor-pointer selection:bg-transparent outline-1 shadow-sm ${
            formGroupData.permission.select.active ? 'outline-black' : 'outline-none'
          }`}
          type="text"
          value={formGroupData.permission.select.value}
          readOnly
        />
        <img
          className={`absolute right-4 top-2 pointer-events-none duration-300 ${
            formGroupData.permission.select.active ? 'rotate-180' : 'rotate-0'
          }`}
          src={arrowDown}
        />
      </div>

      {formGroupData.permission.select.active && (
        <ul className="absolute z-10 w-full mt-2 text-sm rounded-md border bg-white overflow-hidden shadow-md">
          {dataDummy.map((data) => {
            return (
              <li
                onClick={() =>
                  dispatch({
                    type: HANDLE_CASE.FORM.PERMISSION.SELECT.DATA_SELECT_COMPONENT,
                    payload: data.nama,
                  })
                }
                className="text-dark-500 px-4 py-3 cursor-pointer hover:bg-slate-100 hover:text-black"
                key={data.id}>
                {data.nama}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
