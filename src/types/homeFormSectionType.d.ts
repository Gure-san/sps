enum formType {
  ATTEND = 'attend',
  PERMIT = 'permit'
}

type homeFormSectionType = {
  type: formType.ATTEND | formType.PERMIT
}

export {
  formType,
  homeFormSectionType
}