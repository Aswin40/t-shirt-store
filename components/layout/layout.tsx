import React from "react";
import { Backdrop, Box, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Navbar from "../navbar/navbar";
import { LayoutProps } from "./types";
import Footer from "../footer/footer";

const useStyles = makeStyles({
  content: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    padding: 40,
    marginTop: 50,
  },
  container: { display: "flex", flexDirection: "column", width: "100%" },
});

const Layout = ({ children, backdrop }: LayoutProps) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Navbar />
      <Backdrop
        open={backdrop}
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <CircularProgress />
      </Backdrop>
      <Box className={classes.content}>{children}</Box>
      <Footer />
    </div>
  );
};

export default Layout;
