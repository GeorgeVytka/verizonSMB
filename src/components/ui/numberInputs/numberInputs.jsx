import * as React from "react";
import { Unstable_NumberInput as BaseNumberInput } from "@mui/base/Unstable_NumberInput";
import { styled } from "@mui/system";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  setQuantity,
} from "../../../features/counter/counterSlice";

const NumberInput = React.forwardRef(function CustomNumberInput(props, ref) {
  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInput,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: <AddIcon fontSize="small" />,
          className: "increment",
        },
        decrementButton: {
          children: <RemoveIcon fontSize="small" />,
        },
      }}
      {...props}
      ref={ref}
    />
  );
});

export default function QuantityInput({ name }) {
  const dispatch = useDispatch();
  const itemKey = name.replace(/\s/g, "");
  const value = useSelector((state) => state.counter[itemKey]) ?? 0; // Ensure it's never undefined

  const handleChange = (_, newValue) => {
    if (newValue === "" || isNaN(newValue) || newValue < 0) return; // Ignore invalid input

    const parsedValue = Number(newValue);

    if (parsedValue > value) {
      dispatch(increment({ item: itemKey }));
    } else if (parsedValue < value) {
      dispatch(decrement({ item: itemKey }));
    }
  };

  const handleInputChange = (event, newValue) => {
    // console.log("input:", event.target.value);
    const parsedValue = Number(event.target.value);

    if (!isNaN(parsedValue) && parsedValue >= 0) {
      dispatch(setQuantity({ item: itemKey, value: parsedValue }));
    }
  };

  return (
    <>
      <label style={{ fontSize: "20px" }}>{name}</label>
      <NumberInput
        aria-label="Quantity Input"
        min={0}
        max={99}
        value={value}
        onChange={handleChange} // Handles button clicks
        onInputChange={(_, value) => handleInputChange(_, value)}
        onFocus={(event) => event.target.select()}
      />
    </>
  );
}

const StyledInputRoot = styled("div")`
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled("input")`
  font-size: 1rem;
  width: 4rem;
  text-align: center;
  padding: 10px 12px;
  border-radius: 16px;
`;

const StyledButton = styled("button")`
  font-size: 1rem;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #e0e0e0;
  color: black;
  margin-left: 10px;
  margin-right: 10px;
  border: none;
  border-radius: 10px;
  &.increment {
    order: 1;
  }
`;
