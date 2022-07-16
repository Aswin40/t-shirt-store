import { useEffect, useState } from "react";
import type { NextPage } from "next";

import Layout from "../components/layout/layout";
import { tShirts } from "../data";
import TShirtGrid from "../components/t-shirt-grid/tShirtGrid";

const Men: NextPage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Layout backdrop={loading}>
      <TShirtGrid tShirts={tShirts.filter((t) => !t.src.includes("-g-"))} />
    </Layout>
  );
};

export default Men;
