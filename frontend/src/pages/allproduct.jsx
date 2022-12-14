import { Box, Heading } from "@chakra-ui/react"
import { DisplayAP } from "../components/displayallproducts"
import { Particle } from "../components/particle"
import { Sidebarfilter } from "../components/sidebarfilter"
import { Funtionality } from "../components/sort_filter"


export const AllProduct = () => {
    return (
        <Box mt='100px'>
            <Particle/>
            <Box display='flex' w='80%' m='auto' gap='5%'>
                <Box w='20%'>
                    <Sidebarfilter/>
                </Box>
                <Box w='75%'>
                    <Funtionality />
                    <DisplayAP />
                </Box>
            </Box>
        </Box>
    )
}