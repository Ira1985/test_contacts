import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { nationalities } from "../../../constants/nationalities";

export const ContactFilter = ({ dataFilter, setDataFilter }) => {
  const handleChange = (e) => {
    setDataFilter((prev) => {
      const newState = { ...prev, [e.target.name]: e.target.value };
      console.log("newState", newState);
      return newState;
    });
  };
  console.log("ContactFilter render");
  return (
    <>
      <TextField
        label="Fullname"
        name="fullName"
        variant="outlined"
        value={dataFilter.fullName}
        size="small"
        onChange={handleChange}
      />
      <Box sx={{ minWidth: 220, margin: "0 10px" }}>
        <FormControl fullWidth size="small">
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="gender-label"
            id="gender"
            name="gender"
            label="Gender"
            value={dataFilter.gender}
            onChange={handleChange}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 220, margin: "0 10px" }}>
        <FormControl fullWidth size="small">
          <InputLabel id="demo-simple-select-label">Nationality</InputLabel>
          <Select
            labelId="nationality-label"
            id="nationality"
            name="nationality"
            multiple
            label="Nationality"
            value={dataFilter.nationality}
            onChange={handleChange}
          >
            {Object.entries(nationalities).map(([key, value]) => {
              return (
                <MenuItem key={key} value={key}>
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};
