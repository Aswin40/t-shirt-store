import { Grid } from "@mui/material";
import type { NextPage } from "next";
import Layout from "../components/layout/layout";

import TshirtCard from "../components/t-shirt-card/tShirtCard";
import { tShirts } from "../data";

const Home: NextPage = () => {
  return (
    <Layout>
      <Grid container spacing={4} justifyContent="center">
        {tShirts.map((t) => (
          <Grid item key={t}>
            <TshirtCard src={t} alt={t} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Home;
