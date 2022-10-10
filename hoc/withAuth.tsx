import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../firebase";

// eslint-disable-next-line react/display-name
const withAuth = (WrappedComponent: FC) => () => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
    console.log(user);
  }, [user, loading, router]);

  return loading ? <div>loading...</div> : <WrappedComponent />;
};

export default withAuth;
