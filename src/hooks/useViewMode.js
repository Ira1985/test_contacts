import { useState, useEffect } from "react";
import { DATA_VIEW_MODES } from "../constants/views";

const getInitialViewMode = () => {
  return localStorage.getItem("viewMode") || DATA_VIEW_MODES.TABLE;
};

export const useViewMode = () => {
  const [dataViewMode, setDataViewMode] = useState(getInitialViewMode);

  useEffect(() => {
    localStorage.setItem("viewMode", dataViewMode);
  }, [dataViewMode]);

  return [dataViewMode, setDataViewMode];
};
