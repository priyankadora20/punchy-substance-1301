import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchPage from "./SearchInput";
import { getData } from "../../redux/suggestionReducer/action";
import axios from "axios";

const ShowSearching = () => {
  const [suggestion, setSuggestion] = useState([]);
  const [query, setQuery] = useState("");
  const [suggValue,setSuggValue]=useState("")
  const dispatch = useDispatch();

  const data = useSelector((store) => store.suggestionReducer.suggestion);

  const queryHandler = useCallback((val) => {
    // API Call with query

    // if (val) {
    //   axios
    //     .get(`http://localhost:8500/products?q=${val}`)
    //     .then((r) => {
    //     //   console.log(r.data);
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // }
    setQuery(val);
  }, []);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getData());
    }
  }, [data.length, dispatch]);
  useEffect(() => {
    if (query === "") {
      setSuggestion([]);
    } else {
        let newsuggetion = data
        .filter((ele) => {
            let querywithouspace = query.toLocaleLowerCase();
            return ele.title.toLowerCase().indexOf(querywithouspace)!==-1 ? true : false
        })
        .map((e) => {
            // let title=e.title.split(" ")[0]
            // return title;
            return e
          });
          setSuggestion(newsuggetion);
    }
  }, [query,data]);
  // console.log("from suggestion",suggestion)
 
  return (
    <div>
      <SearchPage setQuery={queryHandler} suggestion={suggestion} setSuggValue={setSuggValue}/>
    </div>
  );
};

export default ShowSearching;