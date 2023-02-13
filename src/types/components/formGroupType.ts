// React
import React from 'react';

// Type
import { DataSelectObject } from './selectType';
import { UploaderObject } from './uploaderType';

enum formType {
  ATTEDANCE = 'attedance',
  PERMISSION = 'permission',
}

interface InitialState {
  attedance: {
    user: object | null; // user interface
    timeStamp: string | null;
    date: object | null; // date interface
  };
  permission: {
    select: {
      active: boolean,
      value: string | undefined,
    }
    uploader: {
      fileName: string | null,
      fileInfo: FileList | null
    };
    textarea: string;
  };
  switcher: {
    status: boolean,
  }
}

type ReducerPropType = {
  type: string,
  payload?: any, 
}

type FormGroupPropType = {
  type: formType.ATTEDANCE | formType.PERMISSION;
};

type CostumComponentPropType = {
  formGroupData: InitialState;
  dispatch: React.Dispatch<ReducerPropType>;
};

const HANDLE_CASE = {
  SWITCH_FORM: {
    ACTIVE_SWITCH: 'active_switch'
  },
  FORM: {
    ATTEDANCE: {
      MAP: null,
      ACTION: null, 
    },
    PERMISSION: {
      SELECT: {
        ACTIVE_SELECT_COMPONENT: 'active_select_component',
        DATA_SELECT_COMPONENT: 'data_select_component',
      },
      TEXTAREA: {
        DATA_TEXTAREA_COMPONENT: 'data_textarea_component',
      },
      UPLOADER: {
        DATA_UPLOADER_COMPONENT: 'data_uploader_component',
      },
    },
  },
};


export { 
  formType, 
  FormGroupPropType,
  InitialState,
  ReducerPropType,
  CostumComponentPropType,
  HANDLE_CASE
};

