import React from "react";
import { DASH_BACKGROUND } from "../../../ults/themes/colors";
import NumberInputs from "../numberInputs/numberInputs";
import CheckBoxes from "../checkbox/checkBox";
import { useSelector, useDispatch } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  //redux vars

  return (
    <div
      style={{
        width: "500px",
        height: "600px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: DASH_BACKGROUND,
        borderRadius: "40px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "20px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <label style={{ fontSize: "20px", fontWeight: "bold" }}>Inputs</label>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "15px",
          width: "100%",
          justifyItems: "center",
        }}
      >
        <NumberInputs name={"Start 5G"} />
        <NumberInputs name={"Plus 5G"} />
        <NumberInputs name={"Pro 5G"} />
        <NumberInputs name={"Jetpacks"} />
        <NumberInputs name={"Tablet"} />

        <NumberInputs name={"BI"} />

        <NumberInputs name={"Number Of Phones"} />
        <NumberInputs name={"Cost Of Phones"} />

        <CheckBoxes name="VBiz" disabled={2 < 1 ? true : false} />
        <CheckBoxes
          name="BusinessMobileProtection"
          disabled={2 < 1 ? true : false}
        />
      </div>
    </div>
  );
};

export default Dashboard;
