import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchDetail, setsearchDetail] = useState("");
  const navigate = useNavigate();
  return (
    <Paper
      component="form"
      onSubmit={(e) => {
        if (searchDetail) {
          e.preventDefault();
          navigate(`/search/${searchDetail}`);
          setsearchDetail("");
        }
      }}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        type="text"
        value={searchDetail}
        onChange={(e) => setsearchDetail(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "#92DCE5" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
