// React
import React, { createContext, useReducer, useRef } from 'react';

// Type
import {
  selectStateValue,
  InitialValue,
  ReducerPropType,
  SelectPropType
} from '../../types/components/selectType';

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
  { type, payload }: ReducerPropType
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
  const [selectDataComponent, setSelectDataComponent] = useReducer(reducer, INITIAL_VALUES);
  const selectContainer = useRef(null);

  useClickOutside({
    refElement: selectContainer,
    closeTrigger: () => {
      if(selectDataComponent.active) {
        setSelectDataComponent({
          type: HANDLE_CASE.ACTIVE_COMPONENT
        })
      }
    }
  })

  return (
    <div className="relative" ref={selectContainer}>
      <div className="h-max relative">
        <input
          onClick={() => setSelectDataComponent({
            type: HANDLE_CASE.ACTIVE_COMPONENT
          })}
          className={`text-sm text-black bg-slate-100 w-full px-4 py-2 border border-dark-100 rounded-md cursor-pointer selection:bg-transparent outline-1 ${selectDataComponent.active ? 'outline-black' : 'outline-none'}`}
          type="text"
          value={selectDataComponent.value}
          readOnly
        />
        <img
          className={`absolute right-4 top-2 pointer-events-none duration-300 ${selectDataComponent.active ? 'rotate-180' : 'rotate-0'}`}
          src={arrowDown}
        />
      </div>

      {selectDataComponent.active && (
        <ul className="absolute z-10 w-full mt-2 text-sm rounded-md border bg-slate-100 overflow-hidden">
          {dataDummy.map((data) => {
            return (
              <li
                onClick={() => setSelectDataComponent({
                  type: HANDLE_CASE.VALUE_COMPONENT,
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
