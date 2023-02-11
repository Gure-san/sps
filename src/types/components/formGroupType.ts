enum formType {
  ATTEDANCE = 'attedance',
  PERMISSION = 'permission'
}

type DataFormPermission = {
  selectData: string | null,
  textareaData: string | null,
  pushState: boolean,
}

type FormGroupPropType = {
  type: (
    | formType.ATTEDANCE 
    | formType.PERMISSION
  )
}

export {
  formType,
  FormGroupPropType,
  DataFormPermission
}