import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadPriceListList,
  getpriceListLoadingStatus,
} from "../../../../store/priceList";

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPriceListList());
  }, [dispatch]);
  const loading = useSelector(getpriceListLoadingStatus());
  if (loading) return "Loading";
  return children;
};
export default AppLoader;
