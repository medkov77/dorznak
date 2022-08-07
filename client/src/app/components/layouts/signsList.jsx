import SignsPage from "../pages/signs/signsPage";
import React, { useEffect, useState } from "react";
import Item from "@mui/material/Grid";
import { Grid, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import {
  getSignsList,
  getSignsLoadingStatus,
  loadSigns,
  getListSize,
} from "../../../store/signs";
import configFile from "../../../config.json";
import Search from "../ui/seasch";
const SignsList = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(loadSigns(page));
  }, [dispatch, page]);
  const limit = configFile.limit;
  const loading = useSelector(getSignsLoadingStatus());
  const signsList = useSelector(getSignsList());
  const listSize = Math.floor(useSelector(getListSize()) / limit) + 1;

  const handleChangePage = (a, value) => {
    console.log(a);
    setPage(value);
  };

  if (loading) return "Loading";
  return (
    <>
      <Typography
        variant="h4"
        component={"h2"}
        mb={2}
        sx={{ textAlign: "center" }}
      >
        Знаки дорожные ГОСТ 52290-2004
      </Typography>
      <Search />
      <Grid container spacing={3} mt={2}>
        {signsList.map((sign) => (
          <Grid key={sign._id} item xs={4}>
            <Item>
              <SignsPage
                id={sign._id}
                gost={sign.gost}
                name={sign.name}
                form={sign.form}
                sizes={sign.sizes}
                films={sign.films}
                description={sign.description}
                imgSrc={sign.imgSrc}
              />
            </Item>
          </Grid>
        ))}
      </Grid>
      <Stack spacing={2} my={5}>
        <Pagination
          count={listSize}
          variant="outlined"
          shape="rounded"
          page={page}
          onChange={handleChangePage}
        />
      </Stack>
    </>
  );
};
export default SignsList;
