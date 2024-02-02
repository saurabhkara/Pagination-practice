import React from "react";
import { Autocomplete, TextField } from "@mui/material";

let courses = ["React", "Node", "MongoDB", "Express"];

export default function AutoCompleteComp() {
  return (
    <div>
      <Autocomplete
        sx={{ width: "200px" }}
        options={courses}
        renderInput={(params) => <TextField {...params} label="Select" />}
      />
    </div>
  );
}
