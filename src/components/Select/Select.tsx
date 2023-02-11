// React
import React, { createContext, useReducer, useRef } from 'react';

// Type
import { SelectPropType } from '../../types/components/selectType';
import { HANDLE_CASE } from '../../types/components/formGroupType';

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
    nama: 'Pernikahan',
  },
  {
    id: 3,
    nama: 'Kegiatan lain',
  },
];

export function Select({dataForm, dispatch}: SelectPropType) {
  const selectContainer = useRef(null);

  useClickOutside({
    refElement: selectContainer,
    closeTrigger: () => {
      if(dataForm.select.active) {
        dispatch({
          type: HANDLE_CASE.SELECT.ACTIVE_COMPONENT
        })
      }
    }
  })

  return (
    <div className="relative" ref={selectContainer}>
      <div className="h-max relative">
        <input
          onClick={() => dispatch({
            type: HANDLE_CASE.SELECT.ACTIVE_COMPONENT
          })}
          className={`text-sm text-black bg-slate-100 w-full px-4 py-2 border border-dark-100 rounded-md cursor-pointer selection:bg-transparent outline-1 ${dataForm.select.active ? 'outline-black' : 'outline-none'}`}
          type="text"
          value={dataForm.select.value}
          readOnly
        />
        <img
          className={`absolute right-4 top-2 pointer-events-none duration-300 ${dataForm.select.active ? 'rotate-180' : 'rotate-0'}`}
          src={arrowDown}
        />
      </div>

      {dataForm.select.active && (
        <ul className="absolute z-10 w-full mt-2 text-sm rounded-md border bg-slate-100 overflow-hidden">
          {dataDummy.map((data) => {
            return (
              <li
                onClick={() => dispatch({
                  type: HANDLE_CASE.SELECT.VALUE_COMPONENT,
                  payload: data.nama
                })}
                className="text-dark-500 px-4 py-3 cursor-pointer hover:bg-slate-200 hover:text-black"
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
