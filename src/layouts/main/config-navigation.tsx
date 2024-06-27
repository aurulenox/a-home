import { paths } from 'src/routes/paths';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navConfig = [
  {
    title: 'Home',
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: '/',
  },
  {
    title: 'About',
    icon: <Iconify icon="solar:atom-bold-duotone" />,
    path: paths.about,
  },
  {
    title: 'Post',
    icon: <Iconify icon="solar:atom-bold-duotone" />,
    path: paths.post.root,
  },
  // {
  //   title: 'License',
  //   icon: <Iconify icon="solar:atom-bold-duotone" />,
  //   path: paths.license.root,
  // },
];
