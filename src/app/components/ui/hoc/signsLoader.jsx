import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSigns, getSignsLoadingStatus } from "../../../../store/signs";

const SignsLoader = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadSigns());
  }, [dispatch]);

  const loading = useSelector(getSignsLoadingStatus());
  if (loading) return "Loading";
  return children;
};
export default SignsLoader;
