// Type
import { DataSelectObject } from './selectType';
import { UploaderObject } from './uploaderType';

const HANDLE_CASE = {
  SELECT: {
    ACTIVE_SELECT_COMPONENT: 'active_select_component',
    VALUE_SELECT_COMPONENT: 'value_select_component',
  },
  TEXTAREA: {
    VALUE_TEXTAREA_COMPONENT: 'value_textarea_component'
  },
  UPLOADER: {
    VALUE_UPLOADER_COMPONENT: 'value_uploader_component'
  }
};

enum formType {
  ATTEDANCE = 'attedance',
  PERMISSION = 'permission',
}

interface InitialDataForm  {
  select: DataSelectObject,
  textarea: string | undefined,
  uploader: UploaderObject
};

type ReducerPropType = {
  type: string,
  payload?: any, 
}

type FormGroupPropType = {
  type: formType.ATTEDANCE | formType.PERMISSION;
};

type CostumComponentPropType = {
  dataForm: InitialDataForm;
  dispatch: React.Dispatch<ReducerPropType>;
};

export { 
  formType, 
  FormGroupPropType,
  InitialDataForm,
  ReducerPropType,
  CostumComponentPropType,
  HANDLE_CASE
};

