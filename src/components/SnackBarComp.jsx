import React, { useState } from "react";
import { Snackbar, Button } from "@mui/material";

export default function SnackBarComp() {
  const [open, setOpen] = useState(false);

  const handleSnack = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleSnack}>
        Open/Close
      </Button>
      <Snackbar open={open} message="this is snACKBAR " />
    </div>
  );
}
