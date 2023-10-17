import { Box, Skeleton, SkeletonText, Stack, Wrap } from "@chakra-ui/react";

const SkeletonCard = () => {
    return (
        <Box w={'350px'} bgColor={'hsl(209, 23%, 22%)'} borderRadius={15} overflow={'hidden'}>
            <Stack >
                <Skeleton speed={2} h={150} mb={2}></Skeleton>
                <Box p={'1rem'} mb={'2rem'}>
                    <Skeleton speed={2} h={4}></Skeleton>
                    <SkeletonText speed={2} mt='4' noOfLines={3} spacing='4' skeletonHeight='2' w={'250px'} />
                </Box>
            </Stack>
        </Box>
    )
}

const SkeletonCardList = () => {
    return (
        <Wrap direction={'row'} gap={'5rem'} justifyContent={'space-around'} alignItems={'center'}>
            {[...Array(10)].map(i => <SkeletonCard key={`skeleton_${i}`} ></SkeletonCard>)}
        </Wrap>
    )
}

export default SkeletonCardList;