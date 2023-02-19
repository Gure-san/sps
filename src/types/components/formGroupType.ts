// React
import React from 'react';

enum formType {
  ATTEDANCE = 'attedance',
  PERMISSION = 'permission',
}

interface InitialState {
  attedance: {
    user: object | null, // user interface
    timestamp: string | null,
    date: object | null, // date interface
    confirmAction: boolean
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
    textarea: string,
    confirmAction: boolean
  };
  switcher: {
    status: boolean,
  }
}

type FormGroupReducerPropType = {
  type: string,
  payload?: any, 
}

type FormGroupPropType = {
  type: formType.ATTEDANCE | formType.PERMISSION;
};

type CostumComponentPropType = {
  formGroupData: InitialState,
  dispatch: React.Dispatch<FormGroupReducerPropType>,

};
;

const FORM_GROUP_HANDLE_CASE = {
  ATTEDANCE: {
    CONFIRM_MODAL: {
      ACTIVE: 'attedance_confirm_modal_active'
    },
    SUBMIT: 'attedance_submit'
  },
  PERMISSION: {
    SELECT: {
      ACTIVE: 'permission_select_active',
      DATA: 'permission_select_data'
    },
    TEXTAREA: {
      DATA: 'permission_textarea_data'
    },
    UPLOADER: {
      DATA: 'permission_uploader_data'
    },
    CONFIRM_MODAL: {
      ACTIVE: 'permission_confirm_modal_active'
    },
    SUBMIT: 'permission_submit'
  },
  SWITCHER: {
    ACTIVE: 'switcher_active'
  }
}


export { 
  formType, 
  FormGroupPropType,
  InitialState,
  FormGroupReducerPropType,
  CostumComponentPropType,
  FORM_GROUP_HANDLE_CASE
};

