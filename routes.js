import {image} from './assets/images/index';
export const Routes = [
  {
    label: 'Dashboard',
    route: 'Home',
    icon: image.home,
  },
  {
    label: 'My Profile',
    route: 'Profile',
    icon: image.profile,
  },

  {
    label: 'Track Cycle',
    route: 'GetStarted',
    icon: image.periodCycle,
    title: 'Track Your Cycle',
    description:
      'Keeping track of your period and monthly changes can aid family planning, pregnancy prevention, and general health.',
  },
  {
    label: 'Ovulation Testing',
    route: 'GetStarted',
    icon: image.ovulation,
    title: 'Start Your Ovulation Testing',
    description:
      'Start your exciting and beautiful journey of parenthood with the support of i-know ovulation testing strip. Experience the joy of finding out your most fertile days to get pregnant with i-know.',
  },
  {
    label: 'UTI Detection',
    route: 'GetStarted',
    icon: image.UTI,
    title: 'Start Your UTI Detection',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    label: 'Menopause',
    route: 'GetStarted',
    icon: image.menopause,
    title: 'Menopause',
    description: `Menopause is a point in time 12 months after a woman's last period. The years leading up to that point, when women may have changes in their monthly cycles, hot flashes, or other symptoms, are called the menopausal transition or perimenopause. The menopausal transition most often begins between ages 45 and 55.`,
  },
  {
    label: 'Setting',
    route: 'Setting',
    icon: image.setting,
  },
  {
    label: 'About Us',
    route: 'AboutUs',
    icon: image.about,
  },
  {
    label: 'Logout',
    route: 'Logout',
    icon: image.logout,
  },
];
