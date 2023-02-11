// Type
import {
  InitialDataForm,
  ReducerPropType,
} from './formGroupType';

enum selectStateValue {
  DEFAULT = 'Pilih jenis izin...',
  NULL = 'Tidak ada jenis izin!',
}

interface DataSelectObject {
  active: boolean,
  value: string | undefined
}

type SelectPropType = {
  dataForm: InitialDataForm;
  dispatch: React.Dispatch<ReducerPropType>;
};

export { selectStateValue, SelectPropType, DataSelectObject };
