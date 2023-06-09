import { BsApple, BsGooglePlay } from 'react-icons/bs';
import { MdOutlineMonitor, MdDevicesOther } from 'react-icons/md';

export const stores = [
  {
    icon: <BsApple />,
    primaryText: 'App Store',
    preamble: 'download',
    href: 'https://apps.apple.com/RU/app/id455705533?mt=8',
  },
  {
    icon: <BsGooglePlay />,
    primaryText: 'Google Play',
    preamble: 'available',
    href: 'https://play.google.com/store/apps/details?id=ru.ivi.client&referrer=af_tranid%3DRr7d_GphzalA85B2ML2oFQ%26shortlink%3DdevicesAndroid%26c%3DdevicesAndroid%26pid%3DWebsite%20ivi%26source_caller%3Dui',
  },
  {
    icon: <MdOutlineMonitor />,
    primaryText: 'Smart TV',
    preamble: 'watchSmartTV',
    href: 'https://www.ivi.ru/pages/tvsmart/',
  },
  {
    icon: <MdDevicesOther />,
    primaryText: 'allDevices',
    preamble: "",
    href: 'https://www.ivi.ru/devices',
  },
];