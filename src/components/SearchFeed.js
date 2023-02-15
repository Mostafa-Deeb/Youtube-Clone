import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import SideBar from "./SideBar";
import Videos from "./Videos";

const SearchFeed = () => {
  const [selectedCategory, setselectedCategory] = useState("New");
  const [videos, setvideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setvideos(data.items);
      console.log(data);
    });
  }, [selectedCategory]);
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" mb={2} color="black">
        Search Results for:
        <span style={{ color: "red", marginRight: "10px" }}> {searchTerm}</span>
        Videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
