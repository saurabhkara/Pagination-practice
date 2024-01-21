import React from "react";
import { Card } from "@mui/material";

export default function Cards() {
  return (
    <div>
      <Card
        sx={{
          width: "300px",
          height: "300px",
          background: "gray",
          margin: "100px",
        }}
      ></Card>
    </div>
  );
}
