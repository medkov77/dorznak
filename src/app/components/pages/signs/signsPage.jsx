import React, { useEffect } from "react";
import {
  Box,
  Paper,
  Typography,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";
import { getSignsPrice } from "../../../../store/priceList";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SignsPage = ({
  id,
  gost,
  name,
  form,
  sizes,
  films,
  description,
  imgSrc,
}) => {
  const signsPiceList = useSelector(getSignsPrice());

  const [data, setData] = useState({ size: 2, filmeType: "aCom" });
  const [price, setPrice] = useState(
    signsPiceList.form[form].size[data.size][data.filmeType]
  );

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));

    console.log(data);
  };
  useEffect(() => {
    setPrice(signsPiceList.form[form].size[data.size][data.filmeType]);
  }, [data]);
  return (
    <Paper elevation={3} className="card" sx={{ position: "relative" }}>
      <Box p={2} sx={{ textAlign: "center" }}>
        <Typography variant="h6" component={"h4"}>
          Знак {gost} ГОСТ 52290-2004
        </Typography>
        <Typography variant="h6" component={"h4"}>
          {name}
        </Typography>
        <img src={imgSrc} alt="1-1" className="card-img" />
        <Box
          p={1}
          sx={{
            position: "absolute",
            bottom: "1rem",
            left: "0",
            right: "0",
          }}
        >
          <FormControl>
            <FormLabel id="size-radio-buttons-group">Типоразмер</FormLabel>
            <RadioGroup
              aria-labelledby="size-radio-buttons-group"
              name="size"
              value={data.size}
              onChange={handleChange}
            >
              <div>
                {Array.isArray(sizes)
                  ? sizes.map((size) => (
                      <FormControlLabel
                        key={size}
                        value={size}
                        control={<Radio />}
                        label={size}
                      />
                    ))
                  : sizes}
              </div>
            </RadioGroup>
            <FormLabel id="filmeType-radio-buttons-group">Тип пленки</FormLabel>
            <RadioGroup
              aria-labelledby="filmeType-radio-buttons-group"
              name="filmeType"
              value={data.filmeType}
              onChange={handleChange}
            >
              <div>
                <FormControlLabel
                  value="aCom"
                  control={<Radio />}
                  label="А ком"
                />
                <FormControlLabel
                  value="aIng"
                  control={<Radio />}
                  label="А инж"
                />
                <FormControlLabel value="B" control={<Radio />} label="Б" />
                <FormControlLabel value="C" control={<Radio />} label="В" />
              </div>
            </RadioGroup>
          </FormControl>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
            <button className="card-btn">В корзину</button>
            <Typography variant="h6" component={"h4"}>
              {`цена ${price} р`}
            </Typography>
            <Link
              to={`/signs/${id}/${data.size}/${data.filmeType}`}
              className="btn-link"
            >
              <button className="card-btn">Подробнее</button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};
export default SignsPage;
