import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, getIsLoggedIn, getAuthError } from "../../../../store/users";
import { Paper } from "@mui/material";
import { Box, Typography } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import IconButton from "@mui/material/IconButton";
import TextInput from "../../common/table/textInput";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate, useParams } from "react-router-dom";
import { getSignsList } from "../../../../store/signs";
import SelectUnstyled from "@mui/base/SelectUnstyled";
import OptionUnstyled from "@mui/base/OptionUnstyled";
const EditSign = ({}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signsList = useSelector(getSignsList());
  console.log(signsList);
  const { id } = useParams();
  console.log(id);
  const sign = id
    ? signsList.find((item) => item._id === id)
    : {
        gost: "",
        name: "",
        type: "",
        form: "",
        description: "",
        imgSrc: "",
      };

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
          <TextInput
            name="gost"
            type="text"
            value={data.gost}
            help="Номер знака по ГОСТ"
            onChange={handleChange}
            required={true}
            label="Номер знака по ГОСТ"
          />
          <TextInput
            name="name"
            type="text"
            value={data.name}
            help="Наименоване"
            onChange={handleChange}
            required={true}
            label="Наименование знака по ГОСТ"
          />
          <textarea placeholder={data.description}></textarea>
          <SelectUnstyled>
            <OptionUnstyled>Треугольник</OptionUnstyled>
            <OptionUnstyled>{/* option two */}</OptionUnstyled>
          </SelectUnstyled>
          <TextInput
            name="imgSrc"
            type="text"
            value={data.imgSrc}
            help="Путь к изображению"
            onChange={handleChange}
          />
        </Box>
      </form>
    </Paper>
  );
};

export default EditSign;
