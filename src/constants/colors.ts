interface Colors {
  black: string;
  dark: string;
  darker: string;
  darkest: string;
  light: string;
  lighter: string;
  lightest: string;
  medium: string;
  white: string;
}

export const colors: Colors = {
  black: '#000000',
  dark: '#a1a1a1',
  darker: '#383838',
  darkest: '#222222',
  light: '#dedee1',
  lighter: '#efefef',
  lightest: '#f8f8f8',
  medium: '#bbbbbb',
  white: '#ffffff',
};

interface Color {
  dark: string;
  light: string;
}
interface AppleColors {
  systemBlue: Color;
  systemGreen: Color;
  systemIndigo: Color;
  systemOrange: Color;
  systemPink: Color;
  systemPurple: Color;
  systemRed: Color;
  systemTeal: Color;
  systemYellow: Color;
}

interface AppleGrays {
  systemGray: Color;
  systemGray2: Color;
  systemGray3: Color;
  systemGray4: Color;
  systemGray5: Color;
  systemGray6: Color;
}

export const appleColors: AppleColors = {
  systemBlue: {
    dark: '#0084FF',
    light: '#007AFF',
  },
  systemGreen: {
    dark: '#30D158',
    light: '#34C759',
  },
  systemIndigo: {
    dark: '#5E5CE6',
    light: '#5856D6',
  },
  systemOrange: {
    dark: '#FF9F00',
    light: '#FF9500',
  },
  systemPink: {
    dark: '#FF375F',
    light: '#FF2D55',
  },
  systemPurple: {
    dark: '#BF5AF2',
    light: '#AF52DE',
  },
  systemRed: {
    dark: '#FF453A',
    light: '#FF3B30',
  },
  systemTeal: {
    dark: '#64D2FF',
    light: '#5AC8FA',
  },
  systemYellow: {
    dark: '#FFD60A',
    light: '#FFCC00',
  },
};

export const appleGrays: AppleGrays = {
  systemGray: {
    dark: '#8E8E93',
    light: '#8E8E93',
  },
  systemGray2: {
    dark: '#636366',
    light: '#AEAEB2',
  },
  systemGray3: {
    dark: '#48484A',
    light: '#C7C7CC',
  },
  systemGray4: {
    dark: '#3A3A3C',
    light: '#D1D1D6',
  },
  systemGray5: {
    dark: '#2C2C2E',
    light: '#E5E5EA',
  },
  systemGray6: {
    dark: '#1C1C1E',
    light: '#F2F2F7',
  },
};