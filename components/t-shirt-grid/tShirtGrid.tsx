import { Grid } from "@mui/material";
import React, { useState } from "react";
import { TShirt } from "../../types";

import TshirtCard from "../t-shirt-card/tShirtCard";
import TShirtDialog from "../t-shirt-dialog/tShirtDialog";

const TShirtGrid = ({ tShirts }: { tShirts: TShirt[] }) => {
  const [tShirt, setTShirt] = useState<TShirt | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onBuyNow = (tShirt: TShirt) => {
    setTShirt(tShirt);
    setIsDialogOpen(true);
  };

  return (
    <Grid container spacing={4} justifyContent="center">
      {tShirts.map((tShirt) => (
        <Grid item key={tShirt.id}>
          <TshirtCard tShirt={tShirt} onBuyNow={onBuyNow} />
        </Grid>
      ))}
      <TShirtDialog
        open={isDialogOpen}
        tShirt={tShirt}
        onClose={() => setIsDialogOpen(false)}
      />
    </Grid>
  );
};

export default TShirtGrid;
