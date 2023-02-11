enum selectStateValue {
  DEFAULT = 'Pilih jenis izin...',
  NULL = 'Tidak ada jenis izin!'
}

interface InitialValue {
  active: boolean,
  value: string,
  [propName: string]: (string | boolean)
}

type ReducerPropType = {
  type: string,
  [propName: string]: any
}

type SelectPropType = {
  dataForm: object
}

export {
  selectStateValue,
  InitialValue,
  ReducerPropType,
  SelectPropType
}