import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getcartList, getcartTotalPrice } from "../../../../store/cart";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CartItem from "./catrItem";
import { Typography } from "@mui/material";
const Cart = () => {
  const cartList = useSelector(getcartList());

  const total = useSelector(getcartTotalPrice());

  console.log(cartList);
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead sx={{ maxWidth: 400, fontWeight: 700, fontSize: 18 }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 700, fontSize: 18 }}>№</TableCell>
              <TableCell align="right" sx={{ fontWeight: 700, fontSize: 18 }}>
                Изображение
              </TableCell>
              <TableCell
                align="left"
                sx={{ maxWidth: 400, fontWeight: 700, fontSize: 18 }}
              >
                Наименование
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: 700, fontSize: 18 }}>
                Количество
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: 700, fontSize: 18 }}>
                Цена
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: 700, fontSize: 18 }}>
                Стоимость
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: 700, fontSize: 18 }}>
                Удалить
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              "&:last-child td, &:last-child th": {
                border: 0,
              },
            }}
          >
            {cartList.map((row, index) => (
              <CartItem row={row} index={index} key={row._id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h5" component={"h3"} align={"end"}>
        ИТОГО: {total}р
      </Typography>
    </>
  );
};
export default Cart;
