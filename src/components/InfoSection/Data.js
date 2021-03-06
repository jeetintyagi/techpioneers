// InfoSection comprises of About and AnnualReport section
// below are the props values used to alter their
// UI & content
// For ease always make atleast two objects
// for a section ,one for dark & another for light theme

// For about section {dark theme}
import WhoAreWe from '../../images/infoSection1.svg';

export const AboutSectionData1 = {
  id: 'about',
  lightBg: false,
  lightText: true,
  darkText: false,
  // content
  topLine: 'Know more about us',
  headLine: 'Department of Computer Science',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ad aut alias eius commodi laudantium provident eligendi, aliquid quisquam earum autem unde excepturi saepe porro tenetur, architecto magnam deserunt. Placeat.',
  // Image
  imgStart: false,
  ImgSrc: WhoAreWe,
  alt: 'Tech',

  // Button
  ButtonLabel: 'More Details',
  to: '/team',
  primary: false,
  bigPad: true,
  fontBig: true,
  pad: true,
  dark: true,
};

// For about section {light theme}

export const AboutSectionData2 = {
  id: 'about',
  lightBg: true,
  lightText: false,
  darkText: true,

  // content
  topLine: 'Know more about us',
  headLine: 'Department of Computer Science',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ad aut alias eius commodi laudantium provident eligendi, aliquid quisquam earum autem unde excepturi saepe porro tenetur, architecto magnam deserunt. Placeat.',

  // Image
  imgStart: false,
  ImgSrc: WhoAreWe,
  alt: 'Team',

  // Button
  ButtonLabel: 'More Details',
  to: '/team',
  primary: false,
  bigPad: true,
  fontBig: true,
  pad: true,
  dark: true,
};

// For AnnualReport section {dark theme}

export const AnnualReportSectionData1 = {
  id: 'annualReport',
  lightBg: false,
  lightText: true,
  darkText: false,

  // content
  topLine: 'Our annual report',
  headLine: 'Things we Accomplished',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ad aut alias eius commodi laudantium provident eligendi, aliquid quisquam earum autem unde excepturi saepe porro tenetur, architecto magnam deserunt. Placeat.',

  // Image
  imgStart: true,
  ImgSrc: WhoAreWe,
  alt: 'Team',

  // Button
  ButtonLabel: 'More Details',
  to: '/annualreport',
  primary: false,
  bigPad: true,
  fontBig: true,
  pad: true,
  dark: true,
};

// For AnnualReport section {light theme}

export const AnnualReportSectionData2 = {
  id: 'annualReport',
  lightBg: true,
  lightText: false,
  darkText: true,

  // content
  topLine: 'Our annual report',
  headLine: 'Things we Accomplished',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ad aut alias eius commodi laudantium provident eligendi, aliquid quisquam earum autem unde excepturi saepe porro tenetur, architecto magnam deserunt. Placeat.',

  // Image
  imgStart: true,
  ImgSrc: WhoAreWe,
  alt: 'Team',

  // Button
  ButtonLabel: 'More Details',
  to: '/annualreport',
  primary: false,
  bigPad: true,
  fontBig: true,
  pad: true,
  dark: true,
};

// https://youtu.be/Nl54MJDR2p8?t=9190
