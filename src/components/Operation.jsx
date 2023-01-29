import React from "react";
import { Button } from "@mui/material";

const Operation = ({ title, fn }) => {
  return (
    <>
      <Button onClick={fn} variant="contained">
        {title}
      </Button>
    </>
  );
};

export default Operation;
