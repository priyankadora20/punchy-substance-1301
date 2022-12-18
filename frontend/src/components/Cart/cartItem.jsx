import { Box, Text, Button } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../styles/deleteItem.css"

const CartItem = (props) => {

  const [count, setCount] = useState(1);
  const [mrp, setmrp] =useState((Number(props.price)*count))

  useEffect(()=>{

    setmrp((Number(props.price)*count))
   props.getmrp(mrp)

  },[count,mrp,props])

//  console.log("prop",props);

 const handleDelete=(id,e)=>{
   console.log("id",props._id);
    axios.delete(`http://localhost:8500/cart/deletecart/${id}`)
    .then((response)=>console.log("Deleted Data",response)).catch((error)=>console.log(error))
    window.location.reload()
 }
  return (
    <div>
      <Box display={"flex"}>
        <input type="checkbox" />
        <Box className="cartitem">
          <Box>
            {/* {console.log(props.image)} */}
            <img src={props.image} alt="img" />
          </Box>
          <Box>
            <Text>{props.name}</Text>
          </Box>

          <Box>
            <Text>{Number(props.price)}</Text>
          </Box>
          <Box display={"flex"}>
            <Button onClick={() => setCount(prev => prev - 1)} disabled={count === 1}>
              -
            </Button>
            <Button>{count}</Button>
            <Button onClick={() => setCount(prev => prev + 1)} disabled={count === 10}>
              +
            </Button>
          </Box>
          <Box>
            <Text>{(mrp).toFixed(2)}</Text>
          </Box>
          <Box>
            <Text className="delete_item" onClick={(e)=>handleDelete(props._id,e)} >Delete</Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default CartItem;