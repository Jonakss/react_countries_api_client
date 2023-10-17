// - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)

const themeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
    colors: {
        background: {
            base: "hsl(216, 12%, 8%)",
        },
        primary: 'hsl(25, 97%, 53%)',
        grey: {
            ligth: 'hsl(217, 12%, 63%)',
            medium: 'hsl(216, 12%, 54%)'
        },
        blue: {
            dark: 'hsl(213, 19%, 18%)',
            very_dark: 'hsl(216, 12%, 8%)'
        }
    },
}

export default themeConfig

// import { extendTheme } from '@chakra-ui/react';

// const colors = {
//   darkBlue: {
//     light: 'hsl(200, 15%, 8%)',
//     dark: 'hsl(209, 23%, 22%)',
//   },
//   lightGray: {
//     light: 'hsl(0, 0%, 98%)',
//     dark: 'hsl(0, 0%, 52%)',
//     text: 'hsl(0, 0%, 100%)',
//   },
// };

// const theme = extendTheme({
//   config: {
//     initialColorMode: 'dark', // Set the initial color mode
//     useSystemColorMode: false, // Disable system color mode
//   },
//   colors: {
//     blue: colors.darkBlue,
//     gray: colors.lightGray,
//   },
//   styles: {
//     global: (props) => ({
//       body: {
//         color: props.colorMode === 'dark' ? colors.lightGray.text : colors.darkBlue.light,
//         bg: props.colorMode === 'dark' ? colors.darkBlue.dark : colors.lightGray.light,
//       },
//     }),
//   },
// });

// export default theme;
