import { Box, BoxProps, Flex, Skeleton, SkeletonText, Wrap } from "@chakra-ui/react";

const SkeletonCard = (props: BoxProps) => {
    return (
        <Box {...props} w={'350px'} bgColor={'hsl(209, 23%, 22%)'} borderRadius={15} overflow={'hidden'}>
            <Box >
                <Skeleton speed={2} h={200}  mb={2}></Skeleton>
                <Box p={'1rem'} mb={'2rem'}>
                    <Skeleton speed={2} h={4}></Skeleton>
                    <SkeletonText speed={2} mt='4' noOfLines={3} spacing='4' skeletonHeight='2' w={'250px'} />
                </Box>
            </Box>
        </Box>
    )
}

const SkeletonCardList = (props: BoxProps) => {
    return (
        <>
            <Flex {...props} direction={'row'} wrap={'wrap'} justifyContent={'space-between'} alignItems={'flex-start'} gap={8}>
                {[...Array(4)].map((_, i) => <SkeletonCard key={`skeleton_${i}`} opacity={1 / i / 2}></SkeletonCard>)}
            </Flex>
        </>
    )
}

export default SkeletonCardList;