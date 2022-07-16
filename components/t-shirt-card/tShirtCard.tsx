import React, { FC } from "react";
import Img from "next/image";
import { Box, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface TshirtCardProps {
  src: string;
  alt: string;
}

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
  },
});

const TshirtCard: FC<TshirtCardProps> = ({ src, alt }) => {
  const classes = useStyles();
  return (
    <Box>
      <Paper sx={{ padding: 1 }} className={classes.paper}>
        <Box
          style={{
            position: "absolute",
            width: 300,
            height: 350,
            top: 10,
            left: 10,
          }}
        >
          <Img src={src} alt={alt} width={300} height={350} />
        </Box>
        <Box className={classes.buyNow}>
          <Typography>Buy Now</Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default TshirtCard;
