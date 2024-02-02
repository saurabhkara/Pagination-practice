import React from "react";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";

export default function AccordianComp() {
  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon="&">
          <Typography variant="h4">What is mern Stack ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            consequatur.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
