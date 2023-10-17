import { Box, Flex } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Flex w={'100vw'} py={'1rem'} as={'footer'}
            className="attribution" alignItems={'center'}
            justifyContent={'center'} direction={{ base: 'column', md: 'row' }}
            gap={2} position={'absolute'} bottom={0} color={'white'}
            bgColor={'gray.900'} opacity={'75%'}>
            <Box>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.</Box>
            <Box>Coded by <a href="https://github.com/Jonakss">Jonathan Correa | Jonakss</a>.</Box>
        </Flex>
    );
}

export default Footer;