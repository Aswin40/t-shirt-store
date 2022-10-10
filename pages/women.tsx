import type { NextPage } from "next";
import { useState, useEffect } from "react";

import Layout from "../components/layout/layout";
import TShirtGrid from "../components/t-shirt-grid/tShirtGrid";
import { tShirts } from "../data";
import withAuth from "../hoc/withAuth";

const Women: NextPage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Layout backdrop={loading}>
      <TShirtGrid tShirts={tShirts.filter((t) => t.src.includes("-g-"))} />
    </Layout>
  );
};

export default withAuth(Women);
