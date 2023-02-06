enum DeviceSizeHeaderComponent {
  MOBILE = 'mobile',
  DEKSTOP = 'dekstop'
}

type HeaderPropType = {
  size: (DeviceSizeHeaderComponent.MOBILE | DeviceSizeHeaderComponent.DEKSTOP),
};

export {
  HeaderPropType,
  DeviceSizeHeaderComponent
}