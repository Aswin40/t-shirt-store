import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginFormContainer: {
    width: 400,
    background: "white",
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  name: {
    marginTop: 25,
  },
  email: {
    marginTop: 25,
  },
  password: {
    marginTop: 25,
  },
  loginButton: {
    marginTop: 40,
  },
}));

const Login = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={classes.root}>
      <Paper elevation={5}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className={classes.loginFormContainer}
        >
          <Grid item>
            <Typography variant="h5">Sign Up</Typography>
          </Grid>
          <Grid item className={classes.name}>
            <TextField
              sx={{
                width: { sm: 200, md: 300 },
              }}
              type="text"
              variant="standard"
              label="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Grid>
          <Grid item className={classes.email}>
            <TextField
              sx={{
                width: { sm: 200, md: 300 },
              }}
              type="text"
              variant="standard"
              label="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Grid>
          <Grid item className={classes.password}>
            <TextField
              type="password"
              variant="standard"
              label="Password"
              sx={{
                width: { sm: 200, md: 300 },
              }}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Grid>
          <Grid item className={classes.loginButton}>
            <Button
              sx={{
                width: { sm: 200, md: 300 },
              }}
              variant="contained"
            >
              LOG IN
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Login;
