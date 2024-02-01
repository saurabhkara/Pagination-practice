import React from "react";
import { Container, Typography } from "@mui/material";

function Containers() {
  return (
    <>
      <Container sx={{ backgroundColor: "cyan" }} maxWidth="xs">
        <Typography>Xtra Small devices</Typography>
      </Container>
      <Container sx={{ backgroundColor: "cyan" }} maxWidth="sm">
        <Typography> Small devices</Typography>
      </Container>
      <Container sx={{ backgroundColor: "cyan" }} maxWidth="md">
        <Typography>Medium devices</Typography>
      </Container>
      <Container sx={{ backgroundColor: "cyan" }} maxWidth="lg">
        <Typography>large devices</Typography>
      </Container>
      <Container sx={{ backgroundColor: "cyan" }} maxWidth="xl">
        <Typography>Xtra Large devices</Typography>
      </Container>
    </>
  );
}

export default Containers;
