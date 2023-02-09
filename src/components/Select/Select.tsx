// React
import React, { useReducer, useState } from 'react';

// Type
import {
  selectStateValue,
  SelectPropType,
  InitialValue,
  ReducerSelectPropType,
} from '../../types/selectType';

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

const HANDLE_CASE = {
  VALUE_COMPONENT: 'value_component',
  ACTIVE_COMPONENT: 'active_component',
};

const INITIAL_VALUES: InitialValue = {
  active: false,
  value: selectStateValue.DEFAULT,
};

function reducer(
  state: InitialValue,
  { type, payload }: ReducerSelectPropType
) {
  switch (type) {
    case HANDLE_CASE.ACTIVE_COMPONENT:
      return {
        ...state,
        active: !state.active,
      };
    
    case HANDLE_CASE.VALUE_COMPONENT:
      return {
        ...state,
        value: payload,
        active: !state.active
      }

    default:
      return state;
  }
}

export function Select() {
  const [selectDataComponent, setSelectDataComponent] = useReducer(
    reducer,
    INITIAL_VALUES
  );

  return (
    <div className="relative">
      <div className="h-max relative">
        <input
          className="text-sm text-black bg-slate-100 w-full px-4 py-2 border rounded-md outline-black cursor-pointer selection:bg-transparent"
          type="text"
          onClick={() =>
            setSelectDataComponent({
              type: HANDLE_CASE.ACTIVE_COMPONENT
            })
          }
          value={selectDataComponent.value}
          readOnly
        />
        <img
          className="absolute right-4 top-2 pointer-events-none"
          src={arrowDown}
        />
      </div>

      {selectDataComponent.active && (
        <ul className="absolute w-full mt-2 text-sm rounded-md border bg-slate-100 overflow-hidden">
          {dataDummy.map((data) => {
            return (
              <li
                onClick={() =>
                  setSelectDataComponent({
                    type: HANDLE_CASE.VALUE_COMPONENT,
                    payload: data.nama
                  })
                }
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
