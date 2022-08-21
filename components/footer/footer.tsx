import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  root: {
    height: "18rem",
    background: "black",
    margin: "4rem",
    padding: "4rem 8rem",
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gridColumnGap: "5rem",
  },
  item: {
    color: "white",
  },
});
const Footer = () => {
  const classes = useStyles();

  const links = [
    "Shop All",
    "FAQ",
    "Instagram",
    "About",
    "Shipping and Return",
    "Pinterest",
    "Contact",
    "Store Policy",
    "Facebook",
    "Stock Lists",
    "Payment Method",
    "Twitter",
  ];

  return (
    <div className={classes.root}>
      {links.map((link) => (
        <div className={classes.item} key={link}>
          <Typography>{link}</Typography>
        </div>
      ))}
    </div>
  );
};

export default Footer;
