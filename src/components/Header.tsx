import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Heading, useColorMode } from "@chakra-ui/react";

const Headers = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box
            py={'1rem'} 
            bgColor={'primary'}
            w={'100vw'} px={'5vw'}
            shadow={'lg'}>
            <HStack justifyContent={'space-between'} alignItems={'center'}>
                <Heading as={'h2'} size={'md'}>Where in the World?</Heading>
                <Button onClick={toggleColorMode} variant={"ghost"} leftIcon={colorMode === 'dark' ? <MoonIcon /> : <SunIcon></SunIcon>}>{colorMode === 'dark' ? 'Dark Mode' : 'Ligth Mode'}</Button>
            </HStack>
        </Box>
    );
}

export default Headers;