enum formType {
  ATTEDANCE = 'attedance',
  PERMISSION = 'permission'
}

type FormGroupPropType = {
  type: (
    | formType.ATTEDANCE 
    | formType.PERMISSION
  )
}

export {
  formType,
  FormGroupPropType
}