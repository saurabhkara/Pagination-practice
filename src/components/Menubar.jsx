import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab } from "@mui/material";

export default function Menubar() {
  const [tabValue, setTabValue] = useState(0);

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h4">Logo</Typography>
        <Tabs
          sx={{ marginLeft: "auto" }}
          textColor="inherit"
          value={tabValue}
          onChange={(e, val) => setTabValue(val)}
        >
          <Tab label="Home" />
          <Tab label="About" />
          <Tab label="Service" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}
