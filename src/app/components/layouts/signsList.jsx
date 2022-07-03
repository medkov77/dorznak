import SignsPage from "../pages/signs/signsPage";
import Item from "@mui/material/Grid";
import { Grid, Typography } from "@mui/material";
import signs from "../../mockData/signs";

const SignsList = () => {
  return (
    <>
      <Typography variant="h4" component={"h2"} sx={{ textAlign: "center" }}>
        Знаки дорожные ГОСТ 52290-2004
      </Typography>
      <Grid container spacing={3} mt={2}>
        {signs.map((sign) => (
          <Grid key={sign.id} item xs={4}>
            <Item>
              <SignsPage
                id={sign.id}
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
    </>
  );
};
export default SignsList;
