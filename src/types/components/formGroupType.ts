// Type
import { DataSelectObject } from './selectType';

const HANDLE_CASE = {
  SELECT: {
    ACTIVE_COMPONENT: 'active_component',
    VALUE_COMPONENT: 'value_component',
  },
};

enum formType {
  ATTEDANCE = 'attedance',
  PERMISSION = 'permission',
}

interface InitialDataForm  {
  select: DataSelectObject,
  textarea: string | null,
};

type ReducerPropType = {
  type: string,
  payload?: string,
  [propName: string]: string | boolean | undefined 
}

type FormGroupPropType = {
  type: formType.ATTEDANCE | formType.PERMISSION;
};

export { 
  formType, 
  FormGroupPropType,
  InitialDataForm,
  ReducerPropType,
  HANDLE_CASE
};

