import React, { useState } from "react";
import { Button, Typography, Link } from "@mui/material";

export default function Modals() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      {/* <Modal open={true}> */}
      <Typography>Modal Opened</Typography>
      <Button onClick={() => setOpen(false)}></Button>
      {/* </Modal> */}
      <Link href="https://mui.com/material-ui/react-modal/">Click to open</Link>
    </div>
  );
}
