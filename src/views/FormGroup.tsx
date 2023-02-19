// React
import React, { useReducer } from 'react';

// Views
import { AttendanceForm } from './AttendanceForm';
import { PermissionForm } from './PermissionForm';

// Components
import { Notification } from '../components/Notification';

// Type
import {
  InitialState,
  FormGroupReducerPropType,
  FORM_GROUP_HANDLE_CASE,
} from '../types/components/formGroupType';
import { textareaPlaceholder } from '../types/components/textareaType';
import { selectStateValue } from '../types/components/selectType';
import { notificationType } from '../types/components/notificationType';

// Asset
import swapIcon from '../assets/swap.svg';

const initialState: InitialState = {
  attedance: {
    date: null,
    timestamp: null,
    user: null,
    confirmAction: false
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
    confirmAction: false
  },
  switcher: {
    status: false,
  },
};

function reducer(
  state: InitialState,
  { type, payload }: FormGroupReducerPropType
): InitialState {
  switch (type) {
    case FORM_GROUP_HANDLE_CASE.ATTEDANCE.CONFIRM_MODAL.ACTIVE:
      return {
        ...state,
        attedance: {
          ...state.attedance,
          confirmAction: !state.attedance.confirmAction
        }
      };

    case FORM_GROUP_HANDLE_CASE.ATTEDANCE.SUBMIT:
      return {
        ...state,
        attedance: {
          ...state.attedance,
          confirmAction: false
        }
      };

    case FORM_GROUP_HANDLE_CASE.PERMISSION.SELECT.ACTIVE:
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

    case FORM_GROUP_HANDLE_CASE.PERMISSION.SELECT.DATA:
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

    case FORM_GROUP_HANDLE_CASE.PERMISSION.UPLOADER.DATA:
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

    case FORM_GROUP_HANDLE_CASE.PERMISSION.TEXTAREA.DATA:
      return {
        ...state,
        permission: {
          ...state.permission,
          textarea: payload,
        },
      };

    case FORM_GROUP_HANDLE_CASE.PERMISSION.CONFIRM_MODAL.ACTIVE:
      return {
        ...state,
        permission: {
          ...state.permission,
          confirmAction: !state.permission.confirmAction
        }
      };

    case FORM_GROUP_HANDLE_CASE.PERMISSION.SUBMIT:
      return {
        ...state,
        permission: {
          ...state.permission,
          confirmAction: false
        }
      };

    case FORM_GROUP_HANDLE_CASE.SWITCHER.ACTIVE:
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
        <h1 className="font-bold text-xl">
          Form {formGroupData.switcher.status ? 'Izin' : 'Hadir'}
        </h1>
        <button
          onClick={() =>
            setFormGroupData({
              type: FORM_GROUP_HANDLE_CASE.SWITCHER.ACTIVE,
            })
          }
          className="bg-black p-2 rounded-md h-max">
          <img src={swapIcon} />
        </button>
      </div>

      {/* Guide */}
      <Notification
      className='text-sm mb-6' 
      type={notificationType.VALID}>
        <p>
          Klik tombol <span className="italic font-semibold">Switch Form</span> yang ada di sebelah kanan judul form, untuk
          mengubah form yang sesuai dengan presensi kamu
        </p>
      </Notification>

      {/* Form */}
      {!formGroupData.switcher.status ? (
        <AttendanceForm
          formGroupData={formGroupData}
          dispatch={setFormGroupData}
        />
      ) : (
        <PermissionForm
          formGroupData={formGroupData}
          dispatch={setFormGroupData}
        />
      )}
    </React.Fragment>
  );
}
