import {
  Paper,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  CardMedia,
  Grid,
} from "@mui/material";
import { Assignment, Devices } from "@mui/icons-material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import React, { useState, useEffect } from "react";

function Home() {
  
  return (
    <Paper>
      <Typography
        variant="h3"
        gutterBottom
        align="center"
        sx={{ mt: 2, fontWeight: "bold" }}
      >
        Bienvenido a nuestro Vivero Los Tres Venaditos
      </Typography>

      <Typography
        variant="h6"
        gutterBottom
        align="center"
        sx={{ mb: 2, padding: 4 }}
      >
        Cualquier variedad de plantas y arboles la encuentras con nosotros
      </Typography>


      <Grid container spacing={2} justifyContent="center">

        <Grid item xs={12} sm={2} md={6}>
            <CardMedia
              component="img"
              image="../img/logo/logo2.png"
              alt="logo"
            />
        </Grid>
        </Grid>

    </Paper>
  );
}

export default Home;