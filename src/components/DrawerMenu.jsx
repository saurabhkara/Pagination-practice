import React, { useState } from "react";
import {
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

let courses = ["React", "Node", "MongoDB", "Express"];
export default function DrawerMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button variant="outline" onClick={() => setOpen(!open)}>
        Open/Close
      </Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          {courses.map((item) => {
            return <ListItemText>{item}</ListItemText>;
          })}
        </List>
      </Drawer>
    </div>
  );
}
