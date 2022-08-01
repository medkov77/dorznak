import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadPriceListList,
  getpriceListLoadingStatus,
} from "../../../../store/priceList";
import { getIsLoggedIn, refresh } from "../../../../store/users";

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn());
  useEffect(() => {
    dispatch(loadPriceListList());
    if (isLoggedIn) dispatch(refresh());
  }, [dispatch]);

  const loading = useSelector(getpriceListLoadingStatus());
  if (loading) return "Loading";
  return children;
};
export default AppLoader;
