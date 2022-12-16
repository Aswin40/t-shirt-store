import React from "react";
import Img from "next/image";
import { Box, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { TshirtCardProps } from "./types";

const useStyles = makeStyles({
  paper: {
    position: "relative",
    width: 320,
    height: 370,
    display: "flex",
    alignItems: "flex-end",

    "&:hover": {
      "& $buyNow": {
        transition: "opacity 0.5s linear",
        opacity: 1,
      },
    },
  },
  imageContainer: {
    position: "absolute",
    width: 300,
    height: 350,
    top: 10,
    left: 10,
  },
  buyNow: {
    background: "#F8F8FF",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    zIndex: 2,
    transition: "opacity 0.5s linear",
    opacity: 0,
    cursor: "pointer",
  },
});

const TshirtCard = ({ tShirt, onBuyNow }: TshirtCardProps) => {
  const { alt, src } = tShirt;
  const classes = useStyles();
  return (
    <Box>
      <Paper sx={{ padding: 1 }} className={`${classes.paper} tShirtCard`}>
        <Box className={classes.imageContainer}>
          <Img src={src} alt={alt} width={300} height={350} />
        </Box>
        <Box
          className={classes.buyNow}
          role="button"
          onClick={() => {
            onBuyNow(tShirt);
          }}
        >
          <Typography>Buy Now</Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default TshirtCard;
