import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function LoginFields({ onChangeEmail, onChangePassword, onLoginPress }) {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "40ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Email"
            onChange={onChangeEmail}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={onChangePassword}
          />
        </div>
      </Box>
      <div className="button-container">
        <Button variant="contained" color="success" onClick={onLoginPress}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default LoginFields;
