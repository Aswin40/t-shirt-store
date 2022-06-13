import React, { FC } from "react";
import Img from "next/image";
import { Box, Paper } from "@mui/material";

interface TshirtCardProps {
  src: string;
  alt: string;
}

const TshirtCard: FC<TshirtCardProps> = ({ src, alt }) => {
  return (
    <Box>
      <Paper sx={{ padding: 1 }}>
        <Img src={src} alt={alt} width={300} height={350} />
      </Paper>
    </Box>
  );
};

export default TshirtCard;
