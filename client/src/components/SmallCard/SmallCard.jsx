import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Button } from "@material-ui/core";
import eventImg from "../../assets/event1.png"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const commonStyles = {
  bgcolor: 'background.paper',
  m: 1,
  borderColor: 'text.primary',
  width: '15rem',
  height: '0.5rem',
};


function SmallCard() {

  const theme = useTheme({});
  return (
    <Grid container>

      <Card sx={{ display: "flex", flexDirection: "row", borderRadius: "10px" }}>
        <CardMedia
          component="img"
          sx={{ width: 100, height: 100 }}
          image={eventImg}
          alt="event image"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 atuo" }}>
            <Grid item xs container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start">

              <Grid item xs><Typography component="div" variant="h5">
                Event Titel xxxxxxx
              </Typography></Grid>
              <Grid> <Button variant="outlined" size="small" style={{ backgroundColor: 'green' }}>GAME</Button></Grid>



            </Grid>
            <Grid item container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                <AccessTimeIcon />
                2 hours
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                <PeopleIcon />
                Up to 10 peaple
              </Typography>

            </Grid>
            <Box sx={{ ...commonStyles, borderTop: 1 }} />
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              <FmdGoodIcon />
              Address: city name
            </Typography>
            <Grid container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start">
              <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
              >
                March, 11, 2022
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
              >
                at 5:00 pm
              </Typography>

            </Grid>
          </CardContent>

        </Box>
      </Card>
    </Grid>
  );
}

export default SmallCard




