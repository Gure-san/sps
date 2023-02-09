enum selectStateValue {
  DEFAULT = 'Pilih jenis izin...',
  NULL = 'Tidak ada jenis izin!'
}

interface InitialValue {
  active: boolean,
  value: string,
  [propName: string]: (string | boolean)
}

type ReducerSelectPropType = {
  type: string,
  payload?: string
}

type SelectPropType = {

}

export {
  SelectPropType,
  selectStateValue,
  InitialValue,
  ReducerSelectPropType
}