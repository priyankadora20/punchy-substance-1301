import { Box } from "@chakra-ui/react"
import { DisplayAP } from "../components/displayallproducts"
import { Particle } from "../components/particle"
// import { Sidebarfilter } from "../components/sidebarfilter"
import { Funtionality } from "../components/sort_filter"


export const AllProduct = () => {
    return (
        <Box mt='100px'>
            <Particle/>
            <Box  w='80%' m='auto' gap='5%'>
                <Funtionality />
                <DisplayAP />
            </Box>
        </Box>
    )
}