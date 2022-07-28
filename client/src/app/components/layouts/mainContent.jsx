import Grid from "@mui/material/Grid";
import LeftBar from "../ui/leftBar/leftBar";
import SignsList from "./signsList";
import Container from "@mui/material/Container";
import BaseOfSingnsPage from "../pages/baseOfSingsPage";
import LedSignsPage from "../pages/ledSignsPage";
import IdnPage from "../pages/idnPage";
import ParkingPage from "../pages/parkingPage";
import FlashlightsPage from "../pages/flashlightsPage";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/mainPage";
import SignPage from "../pages/signs/signPage";
import RegisterForm from "../ui/registredForm";
import LoginForm from "../ui/loginForm";

const MainContent = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} mt={2}>
        <Grid item xs={3}>
          <LeftBar />
        </Grid>
        <Grid item xs={9}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="signs" element={<SignsList />} />

            <Route path="signs/:id/:size/:film" element={<SignPage />} />

            <Route path="base" element={<BaseOfSingnsPage />} />
            <Route path="led" element={<LedSignsPage />} />
            <Route path="idn" element={<IdnPage />} />
            <Route path="parking" element={<ParkingPage />} />
            <Route path="flash" element={<FlashlightsPage />} />
            <Route path="signup" element={<RegisterForm />} />
            <Route path="login" element={<LoginForm />} />
          </Routes>
        </Grid>
      </Grid>
    </Container>
  );
};
export default MainContent;
