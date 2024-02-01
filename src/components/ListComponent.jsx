import React from "react";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

export default function ListComponent() {
  return (
    <div>
      <List sx={{ width: "500px", backgroundColor: "cyan" }}>
        <ListItem>
          <ListItemButton>{">"}</ListItemButton>
          <ListItemText>Hello hello</ListItemText>
        </ListItem>
      </List>
    </div>
  );
}
