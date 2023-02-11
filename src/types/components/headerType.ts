enum deviceSizeHeaderComponent {
  MOBILE = 'mobile',
  DEKSTOP = 'dekstop'
}

type HeaderPropType = {
  size: (deviceSizeHeaderComponent.MOBILE | deviceSizeHeaderComponent.DEKSTOP),
};

export {
  HeaderPropType,
  deviceSizeHeaderComponent
}