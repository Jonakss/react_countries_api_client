import { SearchIcon } from "@chakra-ui/icons";
import { HStack, Input, InputGroup, InputLeftElement, Select, VStack } from "@chakra-ui/react";
import SkeletonCardList from "./countries/Skeleton";

const MainPanel = () => {
    return (
        <VStack justifyContent={'flex-start'} alignItems={'left'} w={'100vw'} px={'5vw'} gap={8}> 
            <HStack justifyContent={'space-between'}>
                <InputGroup justifySelf={'flex-start'} w={400}>
                    <InputLeftElement pointerEvents='none'>
                        <SearchIcon color='gray.300' />
                    </InputLeftElement>
                    <Input type='tel' placeholder='Search for a country...' />
                </InputGroup>
                <Select justifySelf={'flex-end'} w={400} placeholder="Filter by Region">
                    <option>asd</option>
                </Select>
            </HStack>
            <SkeletonCardList justifySelf={'center'}/>
        </VStack>
    );
}

export default MainPanel;