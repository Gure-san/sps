enum selectStateValue {
  DEFAULT = 'Pilih jenis izin...',
  NULL = 'Tidak ada jenis izin!',
}

interface DataSelectObject {
  active: boolean,
  value: string | undefined
}

export { selectStateValue, DataSelectObject };
