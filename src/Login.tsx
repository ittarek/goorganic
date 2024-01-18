import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import  { useState } from "react";
import SecondPage from "./Components/SecondPage";
import { FirstPage } from "@mui/icons-material";

// interface UserInfo {
//   name: string;
//   phone: string;
//   email: string;
// }
const Login = () => {
 const [name, setName] = useState<string>("");
 const [phone, setPhone] = useState<string>("");
 const [email, setEmail] = useState<string>("");
 const [submitted, setSubmitted] = useState<boolean>(false);

     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
       event.preventDefault();
      
if(name && email && phone){
     const data = new FormData(event.currentTarget);
     const userDate: {
       email: string | null;
       number: string | null;
       name: string | null;
     }[] = [
       {
         email: data.get("email") as string,
         number: data.get("phoneNumber") as string,
         name: data.get("name") as string,
       },
     ];
    
       localStorage.setItem("userDetails", JSON.stringify(userDate));
       setSubmitted(true)
}
     }; 
     if(submitted){
  return <SecondPage />
     }

     if(!submitted){
        <FirstPage />
     }
  return (
    <div>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: t =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                onChange={e => setName(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="phoneNumber"
                label="Phone Number"
                type="text"
                id="phoneNumber"
                autoComplete="Phone-Number"
                onChange={e => setPhone(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="Enter Your Email"
                type="text"
                id="email"
                autoComplete="email"
                onChange={e => setEmail(e.target.value)}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
