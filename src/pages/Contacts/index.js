import { useContacts } from "../../hooks/useContacts";
import { useViewMode } from "../../hooks/useViewMode";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { ContantTable } from "./ContactTable";
import { ToggleViewMode } from "../../components/ToggleViewMode";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import { DATA_VIEW_MODES } from "../../constants/views";

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
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: theme.spacing(2),
  },
});

export const Contacts = () => {
  const classes = useStyle();
  const { contacts, isLoading, isError } = useContacts();
  const [dataViewMode, setDataViewMode] = useViewMode();

  const createView = () => {
    if (isLoading) {
      return <CircularProgress />;
    }
    if (isError) {
      return <div>...error</div>;
    }
    switch (dataViewMode) {
      case DATA_VIEW_MODES.TABLE:
        return <ContantTable data={contacts} />;
      case DATA_VIEW_MODES.GRID:
        return <div>View</div>;
      default:
        return null;
    }
  };

  return (
    <Container className={classes.container}>
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.header}>
          <Typography variant="h4" component="h4">
            Contacts!
          </Typography>
          <ToggleViewMode
            dataViewMode={dataViewMode}
            setDataViewMode={setDataViewMode}
          />
        </Grid>
        <Grid item xs={12}>
          {createView()}
        </Grid>
      </Grid>
    </Container>
  );
};
