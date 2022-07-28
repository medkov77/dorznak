import React, { useState, MouseEvent } from "react";
import { Paper } from "@mui/material";
import { Box, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const RegisterForm = () => {
  const [values, setValues] = useState({
    amount: "",
    email: "fff",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (target) => {
    // setValues((prevState) => ({
    //   ...prevState,
    //   [target.name]: target.value,
    // }));
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  return (
    <Paper elevation={3} sx={{ padding: "1rem", mt: "5.2rem", px: 3 }}>
      <Typography
        variant="h5"
        component={"h3"}
        color={"primary"}
        align={"center"}
      >
        Для регистрации заполните форму ниже:
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
          <OutlinedInput
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange("email")}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "Email",
            }}
          />

          <FormHelperText id="email">Weight</FormHelperText>
        </FormControl>

        <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            value={values.weight}
            onChange={handleChange("weight")}
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
          />

          <FormHelperText id="outlined-weight-helper-text">
            Weight
          </FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Box>
    </Paper>
  );
};
export default RegisterForm;
