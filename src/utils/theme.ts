import { extendTheme } from '@chakra-ui/react'

const themeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const theme = extendTheme({themeConfig})


// as default export
export default theme