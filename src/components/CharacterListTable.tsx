import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IPeopleListItem } from "../interfaces";

interface CharacterListTableProps {
  characterList: IPeopleListItem[] | null;
  onRowClicked: (character: IPeopleListItem) => void;
}

export const CharacterListTable = (props: CharacterListTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor: 'lightGrey', fontWeight: "bold"}}>
            <TableCell style={{fontWeight: "bold"}}>Name</TableCell>
            <TableCell align="center" style={{fontWeight: "bold"}}>Gender</TableCell>
            <TableCell align="right" style={{fontWeight: "bold"}}>Home Planet</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props?.characterList?.map((row) => (
            <TableRow
              onClick={() => props?.onRowClicked(row)}
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="right">{row.homePlanet}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
