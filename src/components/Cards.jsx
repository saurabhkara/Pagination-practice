import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
const logo = require("../logo192.png");

export default function Cards() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Card
        sx={{
          width: "300px",
          height: "600",
          background: "gray",
          margin: "100px",
        }}
      >
        <CardMedia
          sx={{ maxWidth: "500px" }}
          component="img"
          height="100px"
          alt="image example"
          img={"../logo192.png"}
        />
        <CardContent>
          <Typography variant="h3" gutterBottom>
            This is first card in MUI
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="filled" onClick={() => setOpen(!open)}>
            Click
          </Button>
        </CardActions>
      </Card>
      <Dialog open={open}>
        <DialogContent>
          <DialogContentText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            facere minus nisi odit recusandae, autem voluptatum facilis minima
            fuga soluta doloremque delectus cum explicabo distinctio at, libero,
            rerum commodi? Rem.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
          <Button>Done</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
