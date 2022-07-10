import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import type { NextPage } from "next";

import Layout from "../components/layout/layout";
import TshirtCard from "../components/t-shirt-card/tShirtCard";
import { tShirts } from "../data";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Layout backdrop={loading}>
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
