import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const styles = {
  global: {
    body: {
      bg: '#171923',
      color: 'white',
    },
  },
};

const colors = {
  accountBar: '#292b2f',
  brandBorder: '#1A202C',
  brandGray: {
    accent: '#8e9297',
    active: '#393c43',
    dark: '#303339',
    darker: '#202225',
    darkest: '#18191c',
    hover: '#32353b',
    light: '#36393f',
  },
  brandGreen: '#43b581',
  highlight: {
    active: '#5b6eae',
    hover: '#677bc4',
    standard: '#7289da',
  },
  iconColor: '#b9bbbe',
  labelGray: '#72767d',
  memberList: '#2f3136',
  menuRed: '#f04747',
  messageInput: '#40444b',
};

const fonts = {
  body: "'Open Sans', sans-serif",
};

const customTheme = extendTheme({ colors, config, fonts, styles });

export default customTheme;

export const scrollbarCss = {
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'brandGray.darker',
    borderRadius: '18px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#2f3136',
    width: '10px',
  },
};
