import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import { CopyToClipboardText } from "../../../components/CopyToClipboardText";
import { format } from "date-fns";
import {
  nationalities,
  nationalities_color,
} from "../../../constants/nationalities";

export const ContantTable = ({ data }) => {
  // return <div>{data[0].name.first}</div>;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>Full name</TableCell>
            <TableCell>Birthday</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Location</TableCell>
            <TableCell align="right">Nationality</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((contact) => (
            <TableRow
              key={contact.login.uuid}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <Avatar
                  alt={`${contact.name.last} ${contact.name.first}`}
                  src={contact.picture.medium}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                {`${contact.name.title}. ${contact.name.last} ${contact.name.first}`}
              </TableCell>
              <TableCell>
                <Typography>{`${format(contact.dob.date, "iiii, M/d/y, h:m:s aa")}`}</Typography>
                <Typography>{`${contact.dob.age} years`}</Typography>
              </TableCell>
              <TableCell>
                <CopyToClipboardText text={contact.email} />
              </TableCell>
              <TableCell>
                <CopyToClipboardText text={contact.phone} />
              </TableCell>
              <TableCell>
                <Typography>{`/${contact.location.country}/`}</Typography>
                <Typography>{`${contact.location.street.number} ${contact.location.street.name}, ${contact.location.state}, ${contact.location.city} ${contact.location.postcode}`}</Typography>
              </TableCell>
              <TableCell align="right">
                <Badge
                  color={nationalities_color[contact.nat]}
                  badgeContent={nationalities[contact.nat]}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
