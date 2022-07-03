import { Box } from "@mui/material";
import React from "react";

import Navbar from "../navbar/navbar";
import { LayoutProps } from "./types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Navbar />
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
          padding: 40,
        }}
      >
        {children}
      </Box>
    </div>
  );
};

export default Layout;
