import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, HStack, Heading, useColorMode } from "@chakra-ui/react";

const Headers = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <HStack justifyContent={'space-between'} alignItems={'center'} 
        py={'1rem'} bgColor={'gray.500'} w={'100vw'} px={'5vw'}>
            <Heading as={'h2'} size={'md'}>Where in the World?</Heading>
            <Button onClick={toggleColorMode} leftIcon={colorMode === 'dark'?<MoonIcon/>:<SunIcon></SunIcon>}>{colorMode === 'dark'? 'Dark Mode' : 'Ligth Mode'}</Button>
        </HStack>
    );
}

export default Headers;