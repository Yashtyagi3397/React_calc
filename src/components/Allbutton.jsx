import React from "react";
import { Button } from "@mui/material";

const Allbutton = ({ title, fn }) => {
  return (
    <>
      <Button onClick={() => fn(title)} variant="outlined">
        {title}
      </Button>
    </>
  );
};

export default Allbutton;
