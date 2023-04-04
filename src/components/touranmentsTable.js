import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function BasicTable({ objects, tournments }) {
  const router = useRouter();

  const keys = Object.keys(objects);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {keys.map((key) => {
              return (
                <TableCell key="head" align="right">
                  {objects[key]}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {tournments.map((tournment) => (
            <TableRow key={tournment.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              {keys.map((key) => {
                return (
                  <TableCell key={tournment.id} align="right">
                    {tournment[key]}
                  </TableCell>
                );
              })}
              <TableCell>
                <Button variant="contained" color="success" size="small">
                  Show More
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  onClick={(e) => {
                    axios.delete("http://localhost:5000/api/v1/tournament", {
                      params: {
                        tournamentId: tournment.id,
                      },
                    });
                  }}
                  variant="contained"
                  color="error"
                  size="small"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
