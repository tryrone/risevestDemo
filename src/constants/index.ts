import {
  OnboardingOneSvg,
  OnboardingThreeSvg,
  OnboardingTwoSvg,
} from '../assets/svgs';
import Colors from './Colors';

export const ONBOARDING_DATA = [
  {
    key: '1',
    title: 'Quality assets',
    description:
      'Rise invests your money into the best dollar investments around the world.',
    img: OnboardingOneSvg,
    bgColor: Colors.light_orange,
    mainColor: Colors.orange,
  },
  {
    key: '2',
    title: 'Superior Selection',
    description:
      'Our expert team and intelligent algorithms select assets that beat the markets.',
    img: OnboardingTwoSvg,
    bgColor: Colors.light_pink,
    mainColor: Colors.pink,
  },
  {
    key: '3',
    title: 'Better Performance',
    description:
      'You earn more returns, achieve more of your financial goals and protect your money from devaluation.',
    img: OnboardingThreeSvg,
    bgColor: Colors.light_green,
    mainColor: Colors.primary,
  },
];
