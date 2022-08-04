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
} from "../../../store/signs";

const SignsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadSigns());
  }, [dispatch]);

  const loading = useSelector(getSignsLoadingStatus());
  const signsList = useSelector(getSignsList());

  const [page, setPage] = useState(1);

  const handleChangePage = ({ target }) => {
    setPage(target.value);
  };

  if (loading) return "Loading";
  return (
    <>
      <Typography variant="h4" component={"h2"} sx={{ textAlign: "center" }}>
        Знаки дорожные ГОСТ 52290-2004
      </Typography>
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
          count={10}
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
