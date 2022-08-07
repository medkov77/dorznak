import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, getIsLoggedIn, getAuthError } from "../../../../store/users";
import { Paper } from "@mui/material";
import { Box, Typography } from "@mui/material";

import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

const EditSign = ({ sign }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    gost: sign.gost,
    name: sign.name,
    type: sign.type,
    form: sign.form,
    description: sign.description,
    imgSrc: sign.imgSrc,
  });

  const isLoggedIn = useSelector(getIsLoggedIn());

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  if (!isLoggedIn)
    return (
      <Typography variant="h6" mt={2}>
        Эта страница только для зарегистрированных пользователей
      </Typography>
    );
  return (
    <Paper elevation={3} sx={{ padding: "1rem", mt: "5.2rem", px: 3 }}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <TextField
            required
            id="gost"
            label="gost"
            variant="standard"
            fullWidth
            type="text"
            value={data.gost}
            name="gost"
            margin="dense"
            onChange={(event) => handleChange(event)}
            helperText="Номер знака по ГОСТ"
          />
        </Box>
      </form>
    </Paper>
  );
};

export default EditSign;
