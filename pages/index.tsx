import { Grid, Box } from "@mui/material";
import type { NextPage } from "next";

import Navbar from "../components/navbar/navbar";
import TshirtCard from "../components/t-shirt-card/tShirtCard";

const Home: NextPage = () => {
  const tShirts = [
    "/assets/black-g-1.jpg",
    "/assets/white-1.jpg",
    "/assets/black-1.jpg",
    "/assets/white-g-1.jpg",
    "/assets/blue-1.jpg",
    "/assets/grey-1.jpg",
    "/assets/orange-g-1.jpg",
  ];
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
        <Grid container spacing={4} justifyContent="center">
          {tShirts.map((t) => (
            <Grid item key={t}>
              <TshirtCard src={t} alt={t} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
