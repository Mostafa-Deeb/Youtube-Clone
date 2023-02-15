import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import SideBar from "./SideBar";
import Videos from "./Videos";

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState("New");
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      console.log(data);
      setvideos(data.items);
    });
    console.log(selectedCategory);
  }, [selectedCategory]);
  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Box
        sx={{
          height: { xs: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
          position: "sticky",
          top: 80,
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: "1.5", color: "black" }}
        >
          Copyrighy 2022{" "}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h4" fontWeight="bold" color="black" mb={2}>
          {selectedCategory}
          <span style={{ color: "#92DCE5", marginLeft: "10px" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
