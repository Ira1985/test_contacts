import PropTypes from "prop-types";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { DATA_VIEW_MODES } from "../../constants/views";
import { useCallback } from "react";

export const ToggleViewMode = ({ dataViewMode, setDataViewMode }) => {
  const handleChange = (event, nextView) => {
    setDataViewMode(nextView);
  };
  console.log("ToggleViewMode render");
  return (
    <ToggleButtonGroup
      value={dataViewMode}
      exclusive
      onChange={handleChange}
      aria-label="text alignment"
    >
      <ToggleButton
        value={DATA_VIEW_MODES.TABLE}
        aria-label={DATA_VIEW_MODES.TABLE}
      >
        <ViewListIcon />
      </ToggleButton>
      <ToggleButton
        value={DATA_VIEW_MODES.GRID}
        aria-label={DATA_VIEW_MODES.GRID}
      >
        <ViewModuleIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

ToggleViewMode.propTypes = {
  dataViewMode: PropTypes.oneOf([DATA_VIEW_MODES.TABLE, DATA_VIEW_MODES.GRID])
    .isRequired,
  setDataViewMode: PropTypes.func.isRequired,
};
