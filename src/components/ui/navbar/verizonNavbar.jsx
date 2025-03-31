import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";
import { VERIZON_RED } from "../../../ults/themes/colors";
import { DASH_BACKGROUND } from "../../../ults/themes/colors";
import VerizonRedLogo from "../../../assets/logo/Verizon_GlowWordmark_RGB.svg";

function VerizonNavbar() {
  return (
    <AppBar
      color="default"
      position="static"
      sx={{
        backgroundColor: DASH_BACKGROUND,
        borderBottom: "3px solid #ff0000",
        margin: 0,
        width: "100%",
      }}
    >
      <Toolbar sx={{ padding: 0 }}>
        <img src={VerizonRedLogo} alt="Verizon Logo" width="180" height="80" />
      </Toolbar>
    </AppBar>
  );
}

export default VerizonNavbar;
