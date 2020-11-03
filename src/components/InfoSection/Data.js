// InfoSection comprises of About and Discover section
// below are the props values used to alter their
// UI & content
// For ease always make atleast two objects
// for a section one for dark and light theme

// For about section {dark theme}
export const AboutSectionData1 = {
  id: 'about',
  lightBg: false,
  lightText: true,
  darkText: false,
  topLine: 'Know more about us',
  headLine: 'Department of Computer Science',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ad aut alias eius commodi laudantium provident eligendi, aliquid quisquam earum autem unde excepturi saepe porro tenetur, architecto magnam deserunt. Placeat.',
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
  topLine: 'Know more about us',
  headLine: 'Department of Computer Science',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ad aut alias eius commodi laudantium provident eligendi, aliquid quisquam earum autem unde excepturi saepe porro tenetur, architecto magnam deserunt. Placeat.',
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

// For discover section {dark theme}

export const DiscoverSectionData1 = {
  id: 'discover',
  lightBg: false,
  lightText: true,
  darkText: false,
  topLine: 'Know more about us',
  headLine: 'Department of Computer Science',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ad aut alias eius commodi laudantium provident eligendi, aliquid quisquam earum autem unde excepturi saepe porro tenetur, architecto magnam deserunt. Placeat.',
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

// For discover section {light theme}

export const DiscoverSectionData2 = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  darkText: true,
  topLine: 'Know more about us',
  headLine: 'Department of Computer Science',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ad aut alias eius commodi laudantium provident eligendi, aliquid quisquam earum autem unde excepturi saepe porro tenetur, architecto magnam deserunt. Placeat.',
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