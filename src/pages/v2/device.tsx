import { useRouter } from 'next/router';
import React from 'react';
import { isAndroid, isIOS } from 'react-device-detect';

const deviceUrl = {
  ios: 'https://apps.apple.com/br/story/id1569366272?itscg=10000&itsct=',
  android:
    'https://play.google.com/store/apps/details?id=io.polkawallet.www.polka_wallet',
};
const Device = () => {
  const router = useRouter();
  if (isAndroid) router.push(deviceUrl.android);
  else if (isIOS) router.push(deviceUrl.ios);
  else router.push('/v2');
  return <div />;
};

export default Device;
