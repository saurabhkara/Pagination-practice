import React from "react";
import Table from "@mui/material/Table";
import { Typography } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function TableComponent({ data, isLoading, isError }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Age</TableCell>
          </TableRow>
        </TableHead>
        {isLoading ? (
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell>Loading ...</TableCell>
          </TableRow>
        ) : (
          <TableBody>
            {data.length > 0 &&
              data?.map((row) => {
                const { id, firstName, gender, email, age } = row;
                return (
                  <TableRow
                    key={id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {id}
                    </TableCell>
                    <TableCell align="right">{firstName}</TableCell>
                    <TableCell align="right">{email}</TableCell>
                    <TableCell align="right">{gender}</TableCell>
                    <TableCell align="right">{age}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
}
