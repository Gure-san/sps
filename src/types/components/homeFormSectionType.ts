enum formType {
  ATTEND = 'attend',
  PERMIT = 'permit'
}

type HomeFormSectionPropType = {
  type: formType.ATTEND | formType.PERMIT
}

export {
  formType,
  HomeFormSectionPropType
}