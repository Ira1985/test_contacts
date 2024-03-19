import { useState } from "react";
import { useContacts } from "./useContacts";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { ContantTable } from "./ContactTable";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();

const useStyle = makeStyles({
  container: {
    width: "100vw",
  },
  root: {
    padding: theme.spacing(2),
    width: "calc(100% - 20px)",
    backgroundColor: theme.palette.primary.light,
  },
  header: {
    marginBottom: theme.spacing(5),
  },
});

const DATA_VIEW_MODES = {
  TABLE: "table",
  GRID: "grid",
};

export const Contacts = () => {
  const classes = useStyle();
  const { contacts, isLoading, isError } = useContacts();

  const [dataViewMode, setDataViewMode] = useState(DATA_VIEW_MODES.TABLE);

  const makeView = (view) => {
    if (isLoading) {
      return <CircularProgress />;
    }
    if (isError) {
      return <div>...error</div>;
    }
    switch (view) {
      case DATA_VIEW_MODES.TABLE:
        return <ContantTable data={contacts} />;
      case DATA_VIEW_MODES.GRID:
        return <div>View</div>;
      default:
        return <ContantTable data={contacts} />;
    }
    return null;
  };

  const handleChange = (event, nextView) => {
    if (nextView === "update") {
      console.log("update");
    } else {
      setDataViewMode(nextView);
    }
  };

  return (
    <Container className={classes.container}>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h5" className={classes.header}>
            Contacts!
          </Typography>
          <ToggleButtonGroup
            value={dataViewMode}
            exclusive
            onChange={handleChange}
            aria-label="text alignment"
          >
            <ToggleButton value="update" aria-label="left aligned">
              <RestartAltIcon />
            </ToggleButton>
            <ToggleButton value="table" aria-label="centered">
              <ViewListIcon />
            </ToggleButton>
            <ToggleButton value="grid" aria-label="right aligned">
              <ViewModuleIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid item xs={12}>
          {makeView(dataViewMode)}
        </Grid>
      </Grid>
    </Container>
  );
};
