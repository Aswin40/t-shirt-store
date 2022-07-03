import { Grid } from "@mui/material";
import type { NextPage } from "next";
import Layout from "../components/layout/layout";

import TshirtCard from "../components/t-shirt-card/tShirtCard";
import { tShirts } from "../data";

const Women: NextPage = () => {
  return (
    <Layout>
      <Grid container spacing={4} justifyContent="center">
        {tShirts
          .filter((t) => t.includes("-g-"))
          .map((t) => (
            <Grid item key={t}>
              <TshirtCard src={t} alt={t} />
            </Grid>
          ))}
      </Grid>
    </Layout>
  );
};

export default Women;
