import { DefaultTheme } from "styled-components";
import { lightenDarkenColor, convertToRgb } from "./helpers";

declare module "styled-components" {
  export interface DefaultTheme {
    name: "light" | "dark";
    colors: typeof colors;
    gradients: typeof gradients;
    shadows: typeof shadows;
    fonts: typeof fonts;
    input: typeof input;
    standardSwitch: typeof standardSwitch;
    textSwitch: typeof textSwitch;
    thumbnailSwitch: typeof thumbnailSwitch;
    button: typeof button;
    dualButton: typeof dualButton;
    loader: typeof loader;
    dropdown: typeof dropdown;
    dropdownItem: typeof dropdownItem;
  }
}

const colors = {
  white: "#FFFFFF",
  whiteLilac: "#F8F9FC",
  mystic: "#DEE3EB",
  grayChateau: "#A1AAB7",
  lighrgray: "lightgray",
  shuttleGray: "#5E646E",
  mako: "#44484F",
  tuna: "#3A3A43",
  shark: "#2D2E33",
  brandLight: "#A28FC6",
  brand: "#7A50C7",
  brandDark: "#542D9B",
  brandBlue: "#2B6BF3",
  goldenTainoi: "#FFC554",
  yellowSea: "#FFAD0C",
  seaPink: "#EB8888",
  sunsetOrange: "#F94C4C",
  sushi: "#70C843",
  asparagus: "#6DA450",
  dodgerBlue: "#5495FF",
  blueRibbon: "#0B68FF",
  black: "#000000",
  transparent: "transparent",
  athensGray: "#E9EAED",
  blueHaze: "#CBCEDE",
  waterloo: "#878891",
};

const buttonGradient = (color: String, invert: Boolean) =>
  `linear-gradient(${
    invert ? "0" : "180"
  }deg, ${color} 0%, ${lightenDarkenColor(color, -10)} 100%)`;

const gradients = {
  purple: "linear-gradient(0deg, #6B3CC1 0%, #7A50C7 100%)",
  purpleHover: "linear-gradient(0deg, #7A50C7 0%, #6B3CC1 100%)",
  purpleActive: "linear-gradient(0deg, #5E34AA 0%, #6F49B5 100%)",
  bright: "linear-gradient(0deg, #F8F9FC 0%, #FFF 100%)",
  brightActive: "linear-gradient(0deg, #FFF 0%, #F8F9FC 100%)",
  greenSwitchChecked: `${colors.sushi} linear-gradient(180deg, ${
    colors.sushi
  } 0%, ${lightenDarkenColor(colors.sushi, -10)} 100%)`,
  green: buttonGradient(colors.sushi, false),
  greenHover: buttonGradient(colors.sushi, true),
  red: buttonGradient(colors.sunsetOrange, false),
  redHover: buttonGradient(colors.sunsetOrange, true),
  blue: buttonGradient(colors.blueRibbon, false),
  blueHover: buttonGradient(colors.blueRibbon, true),
  yellow: buttonGradient(colors.yellowSea, false),
  yellowHover: buttonGradient(colors.yellowSea, true),
  dark: "linear-gradient(0deg, #464651 0%, #60606D 100%)",
  darkHover: "linear-gradient(0deg, #43434D 0%, #60606D 100%)",
  darkActive: "linear-gradient(0deg, #3D3D46 0%, #60606D 100%)",
};

const shadows = {
  grayChateau: `rgba(${convertToRgb(colors.grayChateau)}, 0.3)`,
  brand: `rgba(${convertToRgb(colors.brand)}, 0.1)`,
  black: `rgba(${convertToRgb(colors.black)}, 0.2)`,
  brandBlue: "#2B6BF3",
};

const fonts = {
  family: {
    primary: '"Source Sans Pro", sans-serif',
  },
  size: {
    small: "12px",
    normal: "14px",
    big: "16px",
  },
  weight: {
    normal: "400",
    bold: "600",
    bolder: "bolder",
  },
};

const input = {
  // background
  backgroundColor: colors.white,

  // text
  textColor: colors.shuttleGray,
  textColorFocus: colors.black,
  disabledTextColor: colors.grayChateau,

  // border
  borderColor: colors.mystic,
  borderColorHover: colors.grayChateau,
  borderColorFocus: colors.brandBlue,

  // other
  placeholderColor: colors.mystic,
  errorColor: colors.sunsetOrange,
  iconColor: colors.grayChateau,
  shadowColor: shadows.brandBlue,

  label: {
    textColor: colors.shuttleGray,
  },
};

const standardSwitch = {
  // background
  backgroundColor: lightenDarkenColor(colors.mystic, 10),
  backgroundColorAfter: colors.white,
  backgroundColorCheckedPrimary: gradients.greenSwitchChecked,
  backgroundColorCheckedSecondary: gradients.blueHover,
  backgroundColorCheckedInfo: gradients.greenSwitchChecked,
  backgroundColorCheckedSuccess: gradients.greenSwitchChecked,
  backgroundColorCheckedWarning: gradients.greenSwitchChecked,
  backgroundColorCheckedDanger: gradients.greenSwitchChecked,
  backgroundColorDisabled: lightenDarkenColor(colors.mystic, 10),

  // text
  textColor: colors.black,
  textColorDisabled: colors.grayChateau,

  // border
  borderColor: colors.mystic,
  borderColorChecked: lightenDarkenColor(colors.sushi, -10),

  // other
  shadowColor: shadows.black,
};

const textSwitch = {
  // background
  backgroundColor: colors.brandBlue,
  backgroundColorAfter: colors.white,
  backgroundColorDisabled: lightenDarkenColor(colors.mystic, 10),

  // border
  borderColor: colors.lighrgray,

  // text
  textColorActive: colors.white,
  textColorDisabled: colors.grayChateau,
  textColorLabel: colors.black,

  // icon
  iconColorActive: colors.white,
  iconColorDisabled: colors.grayChateau,
};

const thumbnailSwitch = {
  // background
  backgroundColor: colors.white,
  checkmarkBackgroundColor: colors.brandBlue,

  // border
  borderColorActive: colors.brandBlue,
  borderColorHover: colors.grayChateau,
  borderColorInactive: colors.mystic,

  // text
  textColor: colors.black,

  // icon
  iconColor: colors.grayChateau,
  checkmarkColor: colors.white,
};

const button = {
  primary: {
    backgroundColor: gradients.purple,
    backgroundColorHover: gradients.purpleHover,
    backgroundColorActive: gradients.purpleActive,
    backgroundColorDisabled: colors.brandLight,
    shadowColor: lightenDarkenColor(colors.brand, -20),
    textColor: colors.white,
    iconColor: colors.white,
    loaderColor: colors.white,
    borderColor: "",
    Success: {
      backgroundColor: gradients.green,
      backgroundColorHover: gradients.greenHover,
      backgroundColorActive: lightenDarkenColor(colors.sushi, -10),
      backgroundColorDisabled: lightenDarkenColor(colors.sushi, -30),
      textColorDisabled: colors.mystic,
    },
    danger: {
      backgroundColor: gradients.red,
      backgroundColorHover: gradients.redHover,
      backgroundColorActive: lightenDarkenColor(colors.sunsetOrange, -10),
      backgroundColorDisabled: colors.seaPink,
      textColorDisabled: colors.white,
    },
    info: {
      backgroundColor: gradients.blue,
      backgroundColorHover: gradients.blueHover,
      backgroundColorActive: lightenDarkenColor(colors.blueRibbon, -10),
      backgroundColorDisabled: colors.dodgerBlue,
      textColorDisabled: colors.white,
    },
    warning: {
      backgroundColor: gradients.yellow,
      backgroundColorHover: gradients.yellowHover,
      backgroundColorActive: lightenDarkenColor(colors.yellowSea, -10),
      backgroundColorDisabled: colors.goldenTainoi,
      textColorDisabled: colors.white,
    },
  },
  secondary: {
    backgroundColor: gradients.bright,
    backgroundColorHover: gradients.bright,
    backgroundColorActive: gradients.brightActive,
    backgroundColorDisabled: colors.whiteLilac,
    borderColor: colors.mystic,
    borderColorHover: lightenDarkenColor(colors.mystic, -10),
    borderColorDisabled: "",
    iconColorDisabled: "",
    textColor: colors.black,
    textColorDisabled: colors.mystic,
    iconColor: colors.shuttleGray,
    loaderColor: colors.shuttleGray,
    danger: {
      borderColor: colors.sunsetOrange,
      borderColorHover: lightenDarkenColor(colors.sunsetOrange, -10),
      borderColorActive: lightenDarkenColor(colors.sunsetOrange, -40),
      borderColorDisabled: lightenDarkenColor(colors.sunsetOrange, 125),
      textColor: colors.sunsetOrange,
      textColorHover: lightenDarkenColor(colors.sunsetOrange, -10),
      textColorActive: lightenDarkenColor(colors.sunsetOrange, -40),
      textColorDisabled: lightenDarkenColor(colors.sunsetOrange, 125),
    },
  },
};

const dualButton = {
  primary: {
    separatorColor: colors.brand,
    shadowColor: lightenDarkenColor(colors.brand, -20),
    borderColor: colors.brandDark,
  },
  secondary: {
    separatorColor: colors.white,
    borderColor: colors.mystic,
  },
};

const loader = {
  backgroundColor: colors.brand,
};

const dropdown = {
  backgroundColor: colors.white,
  shadowColor: shadows.grayChateau,
  titleColor: colors.black,
  borderColor: colors.mystic,
  headerTextColor: colors.shuttleGray,
  headerBorderColor: colors.whiteLilac,
  disabledColor: colors.waterloo,
  transitionSettings: "150ms linear",
};

const dropdownItem = {
  textColor: colors.mako,
  textColorHover: colors.black,
  backgroundColor: colors.white,
  backgroundColorHover: colors.whiteLilac,
  backgroundColorActive: lightenDarkenColor(colors.whiteLilac, -2),
  iconColor: colors.shuttleGray,
  iconColorHover: lightenDarkenColor(colors.shuttleGray, -20),
  titleIconColor: colors.grayChateau,
  titleIconColorHover: lightenDarkenColor(colors.grayChateau, -16),
  disabledColor: colors.grayChateau,

  description: {
    textColor: colors.shuttleGray,
  },
};

export const lightTheme: DefaultTheme = {
  name: "light",
  colors,
  gradients,
  shadows,
  fonts,
  input,
  standardSwitch,
  textSwitch,
  thumbnailSwitch,
  button,
  dualButton,
  loader,
  dropdown,
  dropdownItem,
};

export const darkTheme: DefaultTheme = {
  name: "dark",
  colors,
  gradients,
  shadows,
  fonts,
  input: {
    // background
    backgroundColor: colors.shark,

    // text
    textColor: colors.athensGray,
    textColorFocus: colors.white,
    disabledTextColor: colors.grayChateau,

    // border
    borderColor: colors.shark,
    borderColorHover: colors.mako,
    borderColorFocus: colors.brandBlue,

    // other
    placeholderColor: colors.mako,
    errorColor: colors.sunsetOrange,
    iconColor: colors.waterloo,
    shadowColor: shadows.brandBlue,

    label: {
      textColor: colors.white,
    },
  },
  standardSwitch: {
    // background
    backgroundColor: colors.shuttleGray,
    backgroundColorAfter: colors.white,
    backgroundColorCheckedPrimary: gradients.greenSwitchChecked,
    backgroundColorCheckedSecondary: gradients.blue,
    backgroundColorCheckedInfo: gradients.greenSwitchChecked,
    backgroundColorCheckedSuccess: gradients.greenSwitchChecked,
    backgroundColorCheckedWarning: gradients.greenSwitchChecked,
    backgroundColorCheckedDanger: gradients.greenSwitchChecked,
    backgroundColorDisabled: lightenDarkenColor(colors.shuttleGray, -20),

    // border
    borderColor: colors.mystic,
    borderColorChecked: lightenDarkenColor(colors.sushi, -0),

    // text
    textColor: colors.white,
    textColorDisabled: colors.grayChateau,

    // other
    shadowColor: shadows.black,
  },
  textSwitch: {
    // background
    backgroundColor: colors.mako,
    backgroundColorAfter: colors.white,
    backgroundColorDisabled: lightenDarkenColor(colors.mystic, 10),

    // border
    borderColor: colors.white,

    //text
    textColorActive: colors.white,
    textColorDisabled: colors.grayChateau,
    textColorLabel: colors.white,

    // icon
    iconColorActive: colors.brandBlue,
    iconColorDisabled: colors.grayChateau,
  },
  thumbnailSwitch: {
    // background
    backgroundColor: colors.mako,
    checkmarkBackgroundColor: colors.brandBlue,

    // border
    borderColorActive: colors.brandBlue,
    borderColorHover: colors.grayChateau,
    borderColorInactive: colors.mystic,

    // text
    textColor: colors.white,

    // icon
    iconColor: colors.grayChateau,
    checkmarkColor: colors.white,
  },
  button: {
    primary: {
      backgroundColor: gradients.purple,
      backgroundColorHover: gradients.purpleHover,
      backgroundColorActive: gradients.purpleActive,
      backgroundColorDisabled: colors.brandLight,
      borderColor: colors.tuna,
      textColor: colors.white,
      iconColor: colors.white,
      loaderColor: colors.white,
      shadowColor: "",
      Success: {
        backgroundColor: gradients.green,
        backgroundColorHover: gradients.greenHover,
        backgroundColorActive: lightenDarkenColor(colors.sushi, -10),
        backgroundColorDisabled: colors.asparagus,
        textColorDisabled: colors.mystic,
      },
      danger: {
        backgroundColor: gradients.red,
        backgroundColorHover: gradients.redHover,
        backgroundColorActive: lightenDarkenColor(colors.sunsetOrange, -10),
        backgroundColorDisabled: colors.seaPink,
        textColorDisabled: colors.white,
      },
      info: {
        backgroundColor: gradients.blue,
        backgroundColorHover: gradients.blueHover,
        backgroundColorActive: lightenDarkenColor(colors.blueRibbon, -10),
        backgroundColorDisabled: colors.dodgerBlue,
        textColorDisabled: colors.white,
      },
      warning: {
        backgroundColor: gradients.yellow,
        backgroundColorHover: gradients.yellowHover,
        backgroundColorActive: lightenDarkenColor(colors.yellowSea, -10),
        backgroundColorDisabled: colors.goldenTainoi,
        textColorDisabled: colors.white,
      },
    },
    secondary: {
      backgroundColor: gradients.dark,
      backgroundColorHover: gradients.darkHover,
      backgroundColorActive: gradients.darkActive,
      backgroundColorDisabled: colors.mako,
      borderColor: colors.tuna,
      borderColorDisabled: colors.shark,
      borderColorHover: "",
      textColor: colors.blueHaze,
      textColorDisabled: `rgba(${convertToRgb(colors.waterloo)}, 0.5)`,
      iconColor: colors.blueHaze,
      iconColorDisabled: `rgba(${convertToRgb(colors.waterloo)}, 0.5)`,
      loaderColor: colors.blueHaze,
      danger: {
        borderColor: colors.sunsetOrange,
        borderColorHover: lightenDarkenColor(colors.sunsetOrange, -10),
        borderColorActive: lightenDarkenColor(colors.sunsetOrange, -40),
        borderColorDisabled: lightenDarkenColor(colors.seaPink, -115),
        textColor: colors.sunsetOrange,
        textColorHover: lightenDarkenColor(colors.sunsetOrange, -10),
        textColorActive: lightenDarkenColor(colors.sunsetOrange, -40),
        textColorDisabled: lightenDarkenColor(colors.seaPink, -115),
      },
    },
  },
  dualButton: {
    primary: {
      separatorColor: colors.brand,
      shadowColor: lightenDarkenColor(colors.brand, -20),
      borderColor: colors.brandDark,
    },
    secondary: {
      separatorColor: colors.white,
      borderColor: colors.mystic,
    },
  },
  loader: {
    backgroundColor: colors.brand,
  },

  dropdown: {
    backgroundColor: colors.tuna,
    titleColor: colors.white,
    shadowColor: shadows.black,
    borderColor: colors.white,
    headerTextColor: colors.white,
    headerBorderColor: colors.mako,
    disabledColor: colors.waterloo,
    transitionSettings: "",
  },

  dropdownItem: {
    textColor: colors.white,
    textColorHover: colors.white,
    backgroundColor: colors.tuna,
    backgroundColorHover: lightenDarkenColor(colors.tuna, -10),
    backgroundColorActive: lightenDarkenColor(colors.tuna, -15),
    iconColor: colors.white,
    iconColorHover: "",
    titleIconColor: colors.white,
    titleIconColorHover: colors.white,
    disabledColor: colors.waterloo,

    description: {
      textColor: colors.blueHaze,
    },
  },
};