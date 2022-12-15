import { Box, Text, Button } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const CartItem = (props) => {

  const [count, setCount] = useState(1);
  const [mrp, setmrp] =useState((Number(props.price)*count))

  useEffect(()=>{

    setmrp((Number(props.price)*count))
   props.getmrp(mrp)

  },[count,mrp,props])

//  console.log("mrp",mrp);
  return (
    <div>
      <Box display={"flex"}>
        <input type="checkbox" />
        <Box className="cartitem">
          <Box>
            <img src={props.image} alt="" />
          </Box>
          <Box>
            <Text>{props.name}</Text>
          </Box>

          <Box>
            <Text>{Number(props.price)}</Text>
          </Box>
          <Box display={"flex"}>
            <Button onClick={() => setCount(prev => prev - 1)} disabled={count === 0}>
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
            <Text>🗑</Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default CartItem;