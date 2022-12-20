import { Box, Button, Text } from "@chakra-ui/react"

const createpages=(n)=>{
    return new Array(n).fill(0);
}
export const ProductPagination=({totalpages,currpage,handlepage})=>{
   let pages=createpages(totalpages).map((a,i)=><Button disabled={currpage===i+1} onClick={()=>handlepage(i+1)} key={i}>{i+1}</Button>)
   return(
    <Box w='100%'  mt='20px' display={{base:"block",md:'block',lg:'flex'}} gap='20px' justifyContent='center' p='10px'  color='black'>
        <Box display='flex' alignItems='center'>
           <Text  fontWeight='bold' color='white'> Showing {currpage} Page of {totalpages} pages</Text>
        </Box>
        <Box display='flex'  gap={{base:'0',md:"1%",lg:'1%'}}>
         {pages}
        </Box>
    </Box>
   )
} 