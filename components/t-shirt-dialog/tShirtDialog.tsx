import {
  Dialog,
  Grid,
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Img from "next/image";
import React from "react";

import { TshirtDialogProps } from "./types";

const useStyles = makeStyles({
  imageContainer: {
    width: 350,
    height: 400,
  },
  price: {
    color: "orange",
    fontSize: 20,
  },
  color: {
    marginTop: 40,
    marginBottom: 10,
  },
  size: {
    marginTop: 60,
    marginBottom: 10,
  },
  quantity: {
    marginTop: 10,
    marginBottom: 10,
  },
  button: {},
});

const TShirtDialog = ({ tShirt, open, onClose }: TshirtDialogProps) => {
  const classes = useStyles();
  return (
    <Dialog open={open} maxWidth="md" onClose={onClose}>
      <Box style={{ padding: 20 }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          spacing={5}
        >
          <Grid item>
            <Box className={classes.imageContainer}>
              {tShirt && (
                <Img
                  src={tShirt.src}
                  alt={tShirt.alt}
                  width={350}
                  height={400}
                />
              )}
            </Box>
          </Grid>
          <Grid item>
            <Grid container direction="column" spacing={5}>
              <Grid item>
                <Box>
                  <Typography variant="h4">{tShirt?.name}</Typography>
                </Box>
                <Box>
                  <Typography className={classes.price} variant="body2">
                    ${tShirt?.price}
                  </Typography>
                </Box>
                {/* <Box className={classes.color}>Color</Box> */}
                <Box sx={{ minWidth: 120 }} className={classes.size}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Size</InputLabel>
                    <Select
                      label="Size"
                      labelId="demo-simple-select-label"
                      size="small"
                      value="10"
                    >
                      <MenuItem value={10}>Small</MenuItem>
                      <MenuItem value={20}>Medium</MenuItem>
                      <MenuItem value={30}>Large</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box className={classes.quantity}>
                  <TextField
                    size="small"
                    type="number"
                    inputProps={{ min: 0 }}
                    value={1}
                  />
                </Box>
                <Box>
                  <Button variant="outlined" color="secondary" fullWidth>
                    Add to cart
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
};

export default TShirtDialog;
