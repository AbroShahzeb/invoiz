import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
  Button,
  CustomDatePicker,
  CustomDropdown,
  CustomInput,
  PaymentTermsDropdown,
} from "./generalComponents";
import { useForm } from "react-hook-form";

function App() {
  const [count, setCount] = useState(0);
  const { register } = useForm();
  const [selected, onSelect] = useState({});

  return (
    <div className="text-primary bg-surface-light dark:bg-surface-dark min-h-screen">
      <CustomDatePicker />
      <PaymentTermsDropdown />
      <Button label="Add new" withIcon />
    </div>
  );
}

export default App;
