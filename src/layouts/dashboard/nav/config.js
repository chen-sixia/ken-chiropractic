// component
import SvgColor from '../../../components/svg-color';
// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: '当院のご紹介',
    path: '/dashboard/info',
    icon: icon('profile'),
  },
  {
    title: 'コース・料金',
    path: '/dashboard/money',
    icon: icon('money'),
  },
  {
    title: '営業時間・アクセス',
    path: '/dashboard/contact',
    icon: icon('access'),
  },
  {
    title: 'カイロプラクティックとは',
    path: '/dashboard/chiro',
    icon: icon('chiro'),
  },
];

export default navConfig;
