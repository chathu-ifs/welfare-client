import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { useNavigate } from "react-router-dom";

// Components
import LoginFields from "../../Components/LoginFields/LoginFields";

// Assets
import Logo from "../../Assets/login-logo.png";

// styles
import "./Login.scss";

function Login() {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  // should be an async function with axios used or similar fetch libraries
  const login = () => {
    console.log(email, "Email");
    console.log(password, "Password");
    if (email && password !== "") {
      navigate("/landing");
    } else {
      alert("Please enter Email and Password");
    }
  };

  return (
    <div className="container">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={8}>
            <img className="image" src={Logo} />
          </Grid>
          <Grid xs={4}>
            <LoginFields
              onChangeEmail={onChangeEmail}
              onChangePassword={onChangePassword}
              onLoginPress={login}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Login;
