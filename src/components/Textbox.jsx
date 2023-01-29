import React from "react";
import { OutlinedInput } from "@mui/material";

const Textbox = ({ val }) => {
  return (
    <>
      <OutlinedInput placeholder="Enter the values" value={val} />
    </>
  );
};

export default Textbox;
