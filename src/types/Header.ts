enum deviceSizeHeaderComponent {
  MOBILE = 'mobile',
  DEKSTOP = 'desktop',
}

type HeaderType = {
  size: deviceSizeHeaderComponent.DEKSTOP | deviceSizeHeaderComponent.MOBILE;
};

export {
  deviceSizeHeaderComponent,
  HeaderType
}