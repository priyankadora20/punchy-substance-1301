import { Box, Heading, Image, Text } from "@chakra-ui/react"


export const Trendingcategory=()=>{
    return (
        <Box w='80%' m='auto' mt={{base:"550px",md:'550px',lg:'50px'}}>
            <Box>
                <Heading color='white'>Trending Categories</Heading>
            </Box>
            <Box w='100%' display='grid' gridTemplateColumns='repeat(auto-fit,minmax(250px,1fr))' color='white' gridTemplateRows='auto' gap='20px' mt='20px'>
                <Box display='flex' flexDirection='column' gap='1%'>
                   <Image src='https://img.gkbcdn.com/bn/2205/488x2743-628f62882b40c91f8cd36998._p1_.jpg' w='100%' h='75%'/>
                   <Heading fontSize='18px' h='10%'>Smart Home & Garden</Heading>
                   <Text fontSize='14px' h='10%'>Smart cleaning robots and vacuums, living room furniture, patio & garden supplies, up to 60% off!</Text>
                </Box>
                <Box display='flex' flexDirection='column' gap='1%'> 
                    <Image src='https://img.gkbcdn.com/bn/2205/488x274-628f63522b40c91f8cd3699a._p1_.jpg' h='75%'/>
                    <Heading fontSize='18px' h='10%'>E-transport</Heading>
                   <Text fontSize='14px' h='10%'>New e-rides for less. Skip gas prices with electric bikes, scooters & beyond.</Text>
                </Box>
                <Box display='flex' flexDirection='column' gap='1%'>
                    <Image src='https://img.gkbcdn.com/bn/2205/3d488x274-62958bbe2b40c9241c538d77._p1_.jpg' h='75%'/>
                    <Heading fontSize='18px' h='10%'>3D Printers</Heading>
                   <Text fontSize='14px' h='10%'>3D printers allow you to bring digitally modeled designs to life by using highly detailed filament printing.</Text>
                </Box>
            </Box>
        </Box>
    )
} 