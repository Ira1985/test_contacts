import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import { useCopyToClipboard } from "react-use";

const theme = createTheme();

const useStyle = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    color: theme.palette.primary.light,
    cursor: "pointer",
  },
  icon: {
    marginRight: theme.spacing(1),
  },
});

const STATUS_COPY = {
  COPY: "Copy",
  COPIED: "Copied",
};

export const CopyToClipboardText = ({ text }) => {
  const classes = useStyle();
  const [title, setTitle] = useState(STATUS_COPY.COPY);
  const [, copyToClipboard] = useCopyToClipboard();
  return (
    <ClickAwayListener onClickAway={() => setTitle(STATUS_COPY.COPY)}>
      <Tooltip title={title}>
        <Box
          className={classes.root}
          onClick={() => {
            copyToClipboard(text);
            setTitle(STATUS_COPY.COPIED);
          }}
        >
          <FileCopyOutlinedIcon fontSize="small" className={classes.icon} />
          <Typography>{text}</Typography>
        </Box>
      </Tooltip>
    </ClickAwayListener>
  );
};

CopyToClipboardText.protoTypes = {
  test: PropTypes.string.isRequired,
};
