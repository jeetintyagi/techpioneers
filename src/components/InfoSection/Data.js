// InfoSection comprises of About and AnnualReport section
// below are the props values used to alter their
// UI & content
// For ease always make atleast two objects
// for a section ,one for dark & another for light theme

// For about section {dark theme}
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
  src: require('../../images/svg-1.svg'),
  alt: 'Tech',

  // Button
  ButtonLabel: 'More Details',
  primary: true,
  bigPad: true,
  fontBig: true,
  pad: true,
  dark: false,
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
  src: require('../../images/svg-1.svg'),
  alt: 'Team',

  // Button
  ButtonLabel: 'More Details',
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
  topLine: 'Know more about us',
  headLine: 'Department of Computer Science',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ad aut alias eius commodi laudantium provident eligendi, aliquid quisquam earum autem unde excepturi saepe porro tenetur, architecto magnam deserunt. Placeat.',

  // Image
  imgStart: true,
  src: require('../../images/svg-1.svg'),
  alt: 'Team',

  // Button
  ButtonLabel: 'More Details',
  primary: true,
  bigPad: true,
  fontBig: true,
  pad: true,
  dark: false,
};

// For AnnualReport section {light theme}

export const AnnualReportSectionData2 = {
  id: 'annualReport',
  lightBg: true,
  lightText: false,
  darkText: true,

  // content
  topLine: 'Know more about us',
  headLine: 'Department of Computer Science',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ad aut alias eius commodi laudantium provident eligendi, aliquid quisquam earum autem unde excepturi saepe porro tenetur, architecto magnam deserunt. Placeat.',

  // Image
  imgStart: true,
  src: require('../../images/svg-1.svg'),
  alt: 'Team',

  // Button
  ButtonLabel: 'More Details',
  primary: false,
  bigPad: true,
  fontBig: true,
  pad: true,
  dark: true,
};
