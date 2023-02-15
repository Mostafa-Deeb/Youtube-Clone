import { Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import img from "../youtube.svg";
const Navbar = () => {
  return (
    <Stack
      zIndex={20}
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        m: 0,
        top: 0,
        justifyContent: "space-between",
        backgroundColor: "white",
      }}
    >
      <Link to="/">
        <img
          src={img}
          alt="logo"
          height={45}
          color="#92DCE5"
          style={{ color: "green" }}
        />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
