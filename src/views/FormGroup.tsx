// React
import { useEffect, useReducer, useRef, useState } from 'react';

// React Roter
import { useOutletContext } from 'react-router-dom';

// Components
import { Notification } from '../components/Notification';
import { SkeletonMap } from '../components/Skeleton';
import { Select } from '../components/Select';
import { Textarea } from '../components/Textarea';
import { Uploader } from '../components/Uploader';

// Type
import {
  formType,
  FormGroupPropType,
  InitialDataForm,
  ReducerPropType,
  HANDLE_CASE
} from '../types/components/formGroupType';
import { textareaPlaceholder } from '../types/components/textareaType';
import { selectStateValue } from '../types/components/selectType';
import { notificationType } from '../types/components/notificationType';

const initialValues: InitialDataForm = {
  select: {
    active: false,
    value: selectStateValue.DEFAULT,
  },
  textarea: textareaPlaceholder,
  uploader: {
    fileName: null,
    size: null,
    type: null
  }
};

function reducer(state: any, { type, payload }: ReducerPropType) {
  switch (type) {
    case HANDLE_CASE.SELECT.ACTIVE_SELECT_COMPONENT:
      return {
        ...state,
        select: {
          ...state.select,
          active: !state.select.active
        },
      };

    case HANDLE_CASE.SELECT.VALUE_SELECT_COMPONENT:
      return {
        ...state,
        select: {
          active: !state.select.active,
          value: payload 
        }
      };

    case HANDLE_CASE.TEXTAREA.VALUE_TEXTAREA_COMPONENT:
      return {
        ...state,
        textarea: payload
      };

    case HANDLE_CASE.UPLOADER.VALUE_UPLOADER_COMPONENT:
      const fileInfo: FileList = payload;
      return {
        ...state,
        uploader: {
          fileName: fileInfo[0].name,
          size: fileInfo[0].size,
          type: fileInfo[0].type 
        }
      };

    default:
      return state;
  }
}

export default function FormGroup() {
  const contextFormType: boolean = useOutletContext();
  const [dataForm, setDataForm] = useReducer(reducer, initialValues);

  switch (contextFormType) {
    case false:
      let message = 'Kamu berada di dalam area SMKN 4 MALANG';
      return (
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
      );

    case true:
      return (
        <div>
          <form action="">
            <div className="mb-6">
              <h2 className="mb-2 font-semibold text-lg">* Jenis Izin : </h2>
              <Select dataForm={dataForm} dispatch={setDataForm}/>
            </div>

            <div className="mb-6">
              <h2 className="mb-2 font-semibold text-lg">* Bukti Surat / Gambar : </h2>
              <Uploader dataForm={dataForm} dispatch={setDataForm}/>
            </div>

            <div className="mb-6">
              <h2 className="mb-2 font-semibold text-lg">Tambahan : </h2>
              <Textarea dataForm={dataForm} dispatch={setDataForm} />
            </div>

            <button
            className='bg-black text-white text-sm rounded-md px-4 py-2' 
            type="submit">
              Kirim
            </button>
          </form>
        </div>
      );
  }
}
