import { useState, useEffect } from "react";
import type { NextPage } from "next";

import Layout from "../components/layout/layout";
import { tShirts } from "../data";
import TShirtGrid from "../components/t-shirt-grid/tShirtGrid";
import withAuth from "../hoc/withAuth";

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
      <TShirtGrid tShirts={tShirts} />
    </Layout>
  );
};

export default withAuth(Home);
