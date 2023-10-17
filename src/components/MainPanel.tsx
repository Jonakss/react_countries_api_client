import { SearchIcon } from "@chakra-ui/icons";
import { HStack, Input, InputGroup, InputLeftElement, Select, SelectField, VStack } from "@chakra-ui/react";
import SkeletonCardList from "./countries/SkeletonCard";

const MainPanel = () => {
    return (
        <VStack justifyContent={'flex-start'} alignItems={'left'} w={'100vw'} px={'5vw'} gap={6}> 
            <HStack justifyContent={'space-between'}>
                <InputGroup justifySelf={'flex-start'} w={400}>
                    <InputLeftElement pointerEvents='none'>
                        <SearchIcon color='gray.300' />
                    </InputLeftElement>
                    <Input type='tel' placeholder='Search for a country...' />
                </InputGroup>
                <Select justifySelf={'flex-end'} w={400} placeholder="Filter by Region">
                    <SelectField>asd</SelectField>
                </Select>
            </HStack>
            <SkeletonCardList />
        </VStack>
    );
}

export default MainPanel;