import React from "react";
import { Chart as ChartJs, Tooltip, Legend, ArcElement } from "chart.js";
import { DASH_BACKGROUND } from "../../../ults/themes/colors";
import { Doughnut } from "react-chartjs-2";
import { useSelector,useDispatch } from "react-redux";
import{ clearData} from "../../../features/counter/counterSlice";
import styles from "./costDashboard.module.css";
import { useEffect, useState } from "react";

ChartJs.register(Tooltip, Legend, ArcElement);

const CostDashboard = () => {
  // Move useSelector outside of useEffect
  const start5G = useSelector((state) => state.counter.Start5G);
  const plus5G = useSelector((state) => state.counter.Plus5G);
  const pro5G = useSelector((state) => state.counter.Pro5G);
  const jetPack = useSelector((state) => state.counter.Jetpacks);
  const tablet = useSelector((state) => state.counter.Tablet);
  const bi = useSelector((state) => state.counter.BI);
  const Vbiz = useSelector((state) => state.counter.VBiz);
  const BusinessMobileProtection = useSelector(
    (state) => state.counter.BusinessMobileProtection
  );
  const NumberOfPhones = useSelector((state) => state.counter.NumberOfPhones);
  const CostOfPhone = useSelector((state) => state.counter.CostOfPhones);

  // Update state when Redux values change

    const dispatch = useDispatch();
  const [stateValues, setStateValues] = useState({
    start5G: 0,
    plus5G: 0,
    pro5G: 0,
    jetPack: 0,
    tablet: 0,
    bi: 0,
  });

  const [valuePurItemState, setValuePurItemState] = useState({
    start5G: 0,
    plus5G: 0,
    pro5G: 0,
    jetPack: 0,
    tablet: 0,
    bi: 0,
  });
  const VBiz = useSelector((state) => state.counter.VBiz);
  const [totalNumberofLine, setTotalNumberofLine] = useState(0);
  const [biCheck, setBICheck] = useState(false);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    setStateValues({
      start5G,
      plus5G,
      pro5G,
      jetPack,
      tablet,
      bi,
      VBiz, // Move this inside the object
    });

    setTotalNumberofLine(start5G + plus5G + pro5G);
  }, [start5G, plus5G, pro5G, jetPack, tablet, bi, VBiz]);

  const handleCalculatingTotal = () => {
    let total = 0;
    let tempTotalNumberOfLines =
      stateValues.start5G + stateValues.plus5G + stateValues.pro5G;

    if (tempTotalNumberOfLines === 1) {
      total +=
        stateValues.start5G * 65 +
        stateValues.plus5G * 75 +
        stateValues.pro5G * 80;
    } else if (tempTotalNumberOfLines === 2) {
      total +=
        stateValues.start5G * 55 +
        stateValues.plus5G * 65 +
        stateValues.pro5G * 70;
    } else if (tempTotalNumberOfLines === 3) {
      total +=
        stateValues.start5G * 40 +
        stateValues.plus5G * 50 +
        stateValues.pro5G * 55;
    } else if (tempTotalNumberOfLines === 4) {
      total +=
        stateValues.start5G * 35 +
        stateValues.plus5G * 45 +
        stateValues.pro5G * 50;
    } else if (tempTotalNumberOfLines >= 5) {
      total +=
        stateValues.start5G * 30 +
        stateValues.plus5G * 40 +
        stateValues.pro5G * 45;
    }

    console.log(calculateTheTotal());
  };

  const donutChart = (name) => {
    //console.log(stateValues.start5G, " ", stateValues.plus5G);
    let total = 0;
    let tempTotalNumberOfLines =
      stateValues.start5G + stateValues.plus5G + stateValues.pro5G;

    if (tempTotalNumberOfLines === 1) {
      switch (name) {
        case "Start5G":
          return stateValues.start5G * 65;
          break;

        case "Plus5G":
          return stateValues.plus5G * 75;
          break;

        case "Pro5G":
          return stateValues.pro5G * 85;
          break;
        default:
          0;
      }
    } else if (tempTotalNumberOfLines === 2) {
      switch (name) {
        case "Start5G":
          return stateValues.start5G * 55;
          break;

        case "Plus5G":
          return stateValues.plus5G * 65;
          break;

        case "Pro5G":
          return stateValues.pro5G * 70;
          break;
        default:
          0;
      }
    } else if (tempTotalNumberOfLines === 3) {
      switch (name) {
        case "Start5G":
          return stateValues.start5G * 40;
          break;

        case "Plus5G":
          return stateValues.plus5G * 50;
          break;

        case "Pro5G":
          return stateValues.pro5G * 55;
          break;
        default:
          0;
      }
    } else if (tempTotalNumberOfLines === 4) {
      switch (name) {
        case "Start5G":
          return stateValues.start5G * 35;
          break;

        case "Plus5G":
          return stateValues.plus5G * 45;
          break;

        case "Pro5G":
          return stateValues.pro5G * 50;
          break;
        default:
          0;
      }
    } else if (tempTotalNumberOfLines >= 5) {
      switch (name) {
        case "Start5G":
          return stateValues.start5G * 30;
          break;

        case "Plus5G":
          return stateValues.plus5G * 40;
          break;

        case "Pro5G":
          return stateValues.pro5G * 45;
          break;
        default:
          0;
      }
    }

    return 0;
  };

  const bmp = () => {
    if (BusinessMobileProtection) {
      if (start5G + pro5G + plus5G < 3) {
        return (start5G + pro5G + plus5G) * 20;
      } else if (start5G + pro5G + plus5G >= 3) {
        return start5G + pro5G + plus5G + 60;
      }
    } else {
      return 0;
    }
  };

  const clculateVBiz = () => {
    if (VBiz) {
      return bi * 50;
    } else {
      return 0;
    }
  };

  const calculatePhoneCost = () => {
    return NumberOfPhones * CostOfPhone;
  };
  const calculateTheTotal = () => {
    let temp1 = donutChart("Start5G");
    let temp2 = donutChart("Plus5G");
    let temp3 = donutChart("Pro5G");
    let temp4 = stateValues.tablet * 20;
    let temp5 = stateValues.jetPack * 45;
    let temp6 = stateValues.bi * 40;
    let temp7 = bmp();
    let temp8 = clculateVBiz();
    let temp9 = calculatePhoneCost();

    return (
      temp1 + temp2 + temp3 + temp4 + temp5 + temp6 + temp7 + temp8 + temp9
    );

    /* donutChart("Start5G") +
      donutChart("Plus5G") +
      donutChart("Pro5G") +
      stateValues.tablet * 20 +
      stateValues.jetPack * 45 +
      stateValues.bi * 40 +
      bmp() +
      clculateVBiz()*/
  };


  const cleatInput = () =>{
    dispatch(clearData());
  }
  return (
    <div
      style={{
        width: "500px",
        height: "600px",
        borderRadius: "40px",
        backgroundColor: DASH_BACKGROUND,
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>Cost</h2>

      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          height: "40vh",
          minHeight: "250px",
        }}
      >
        <Doughnut
          key={totalCost}
          data={{
            labels: [
              "Start5G",
              "Plus5G",
              "Pro5G",
              "Tablets",
              "Jetpacks",
              "BI",
              "BusinessMobileProtection",
              "Vbiz",
              "Cost of Phones",
            ],
            datasets: [
              {
                label: "Cost $",
                data: [
                  donutChart("Start5G"),
                  donutChart("Plus5G"),
                  donutChart("Pro5G"),
                  stateValues.tablet * 20,
                  stateValues.jetPack * 45,
                  stateValues.bi * 40,
                  bmp(),
                  clculateVBiz(),
                  calculatePhoneCost(),
                ],
                backgroundColor: [
                  "#2b2e4a",
                  "#e84545",
                  "#77dd77",
                  "#903749",
                  "#53354a",
                  "#84b6f4",
                  "yellow",
                  "blue",
                  "orange",
                ],
                borderColor: ["white"],
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            animation: {
              duration: 1800, // Set duration in milliseconds (e.g., 2000ms = 2 seconds)
            },
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
          padding: "12px 16px",
          borderRadius: "8px",
          fontSize: "18px",
          fontWeight: "600",
          color: "#333",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          maxWidth: "200px",
          margin: "10px auto",
        }}
      >
        <label style={{ fontSize: "20px", color: "#444" }}>
          Total: ${calculateTheTotal()}
        </label>
      </div>

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
       
        <button onClick={cleatInput}>Clear Inputs</button>
      </div>
    </div>
  );
};

export default CostDashboard;
