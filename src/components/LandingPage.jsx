import React, { useState } from "react";
import ProductListing from "./ProductListing";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../App.css";

function LandingPage() {
  const [products, setProducts] = useState([
    {
      title: "Brown eggs",
      type: "dairy",
      description: "Raw organic brown eggs in a basket",
      url: "http://clipart-library.com/img/1640487.png",
      price: 28.1,
      rating: 4,
    },
    {
      title: "Sweet fresh stawberry",
      type: "fruit",
      description: "Sweet fresh stawberry on the wooden table",
      url: "https://www.bing.com/th?id=OIP.az5bXHuNuIfnd1w92FQJ1AHaGd&w=267&h=233&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      price: 29.45,
      rating: 4,
    }
  ]);
  return (
    <div>
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Home
            </Typography>

            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <div>
        <ProductListing lists={products} />
      </div>
      <div>
        <footer className="footer">
          <p>E-commerce Application</p>
          <FacebookIcon />&emsp;
          <TwitterIcon />&emsp;
          <InstagramIcon />&emsp;
          <LinkedInIcon />
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;
