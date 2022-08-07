import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadCurrentSign,
  getCurrentSignsLoadingStatus,
} from "../../../../store/signs";
import { useParams } from "react-router";
const SignLoader = ({ children }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(loadCurrentSign(id));
  }, []);

  const loading = useSelector(getCurrentSignsLoadingStatus());
  console.log(loading, "load");
  if (loading) {
    return "Loading";
  }
  return children;
};
export default SignLoader;
