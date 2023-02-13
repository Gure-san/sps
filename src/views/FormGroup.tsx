// React
import React, { useEffect, useReducer, useRef, useState } from 'react';

// React Roter
import { useOutletContext } from 'react-router-dom';

// Components
import { AttendanceForm } from './AttendanceForm';
import { PermissionForm } from './PermissionForm';
import { Notification } from '../components/Notification';
import { SkeletonMap } from '../components/Skeleton';
import { Select } from '../components/Select';
import { Textarea } from '../components/Textarea';
import { Uploader } from '../components/Uploader';

// Type
import {
  formType,
  FormGroupPropType,
  InitialState,
  ReducerPropType,
  HANDLE_CASE,
} from '../types/components/formGroupType';
import { textareaPlaceholder } from '../types/components/textareaType';
import { selectStateValue } from '../types/components/selectType';

// Asset
import swapIcon from '../assets/swap.svg';

const initialState: InitialState = {
  attedance: {
    date: null,
    timeStamp: null,
    user: null,
  },
  permission: {
    select: {
      active: false,
      value: selectStateValue.DEFAULT,
    },
    uploader: {
      fileName: null,
      fileInfo: null,
    },
    textarea: textareaPlaceholder,
  },
  switcher: {
    status: false
  },
};

function reducer(
  state: InitialState,
  { type, payload }: ReducerPropType
): InitialState {
  switch (type) {
    case HANDLE_CASE.FORM.PERMISSION.SELECT.ACTIVE_SELECT_COMPONENT:
      return {
        ...state,
        permission: {
          ...state.permission,
          select: {
            ...state.permission?.select,
            active: !state.permission?.select?.active,
          },
        },
      };

    case HANDLE_CASE.FORM.PERMISSION.SELECT.DATA_SELECT_COMPONENT:
      return {
        ...state,
        permission: {
          ...state.permission,
          select: {
            active: !state.permission?.select?.active,
            value: payload,
          },
        },
      };

    case HANDLE_CASE.FORM.PERMISSION.UPLOADER.DATA_UPLOADER_COMPONENT:
      const files: FileList = payload;
      return {
        ...state,
        permission: {
          ...state.permission,
          uploader: {
            fileName: files[0].name,
            fileInfo: files,
          },
        },
      };

    case HANDLE_CASE.FORM.PERMISSION.TEXTAREA.DATA_TEXTAREA_COMPONENT:
      return {
        ...state,
        permission: {
          ...state.permission,
          textarea: payload,
        },
      };

    case HANDLE_CASE.SWITCH_FORM.ACTIVE_SWITCH:
      return {
        ...state,
        switcher: {
          status: !state.switcher.status,
        },
      };

    default:
      return state;
  }
}

export default function FormGroup() {
  const [formGroupData, setFormGroupData] = useReducer(reducer, initialState);

  return (
    <React.Fragment>
      {/* Form Switcher */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="font-bold text-xl">Form Hadir</h1>
        <button
          onClick={() => setFormGroupData({
            type: HANDLE_CASE.SWITCH_FORM.ACTIVE_SWITCH
          })}
          className="bg-black p-2 rounded-md h-max">
          <img src={swapIcon} />
        </button>
      </div>

      {/* Form */}
      {
        !formGroupData.switcher.status
          ? <AttendanceForm
            formGroupData={formGroupData}
            dispatch={setFormGroupData}
          />
          : <PermissionForm
            formGroupData={formGroupData}
            dispatch={setFormGroupData}
          />
      }
    </React.Fragment>
  );
}
