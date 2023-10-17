import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement, Select, VStack } from "@chakra-ui/react";
import SkeletonCardList from "./countries/Skeleton";

const MainPanel = () => {
    return (
        <VStack justifyContent={'flex-start'} alignItems={'left'} w={'100vw'} px={'5vw'} gap={8} bg={'blue.very_dark'}>
            <Flex direction={{ base: 'column', sm: 'row' }} justifyContent={'space-between'} gap={4}>
                <InputGroup justifySelf={'flex-start'} w={{base: '90vw', sm: '250px'}}>
                    <InputLeftElement pointerEvents='none'>
                        <SearchIcon color='gray.300' />
                    </InputLeftElement>
                    <Input type='tel' placeholder='Search for a country...' />
                </InputGroup>
                <Select justifySelf={'flex-end'} w={{base: '90vw', sm: '250px'}} placeholder="Filter by Region">
                    <option>asd</option>
                </Select>
            </Flex>
            <SkeletonCardList justifySelf={'center'} />
        </VStack>
    );
}

export default MainPanel;