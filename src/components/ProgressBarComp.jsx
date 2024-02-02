import React, { useState } from "react";
import {
  CircularProgress,
  LinearProgress,
  Rating,
  Typography,
} from "@mui/material";
import AbcIcon from "@mui/icons-material/Abc";

export default function ProgressBarComp() {
  const [value, setValue] = useState();
  return (
    <div>
      <CircularProgress />
      <LinearProgress />
      <Rating value={value} onChange={(e, val) => setValue(val)} />
      <Typography>{value !== undefined ? value : 0} Stars</Typography>
      <AbcIcon />
    </div>
  );
}
