import { Stack } from "@mui/system";
import React from "react";
import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setselectedCategory, darkMode }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "scroll",
        height: { sx: "auto", md: "95%" },
        flexDirection: { sx: "row", md: "column" },
        color: "black",
        background: "white",
        zIndex: "30",
      }}
    >
      {categories.map((category) => (
        <button
          key={category.name}
          className="category-btn"
          style={{
            background: category.name === selectedCategory && "#92DCE5",
            color: "white",
          }}
          onClick={() => {
            setselectedCategory(category.name);
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "black",
              marginRight: "10px",
            }}
          >
            {category.icon}
          </span>{" "}
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
              color: "black",
            }}
          >
            {" "}
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
