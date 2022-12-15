import { Box, Button, Text } from "@chakra-ui/react"

const createpages=(n)=>{
    return new Array(n).fill(0);
}
export const ProductPagination=({totalpages,currpage,handlepage})=>{
   let pages=createpages(totalpages).map((a,i)=><Button disabled={currpage===i+1} onClick={()=>handlepage(i+1)}>{i+1}</Button>)
   return(
    <Box w='100%'  mt='20px' display='flex' gap='20px' justifyContent='center' p='10px'>
        <Box display='flex' alignItems='center'>
           <Text> Showing {currpage} Page of {totalpages} pages</Text>
        </Box>
        <Box display='flex' gap='1%'>
         {pages}
        </Box>
    </Box>
   )
} 