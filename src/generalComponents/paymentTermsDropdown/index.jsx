import { CustomDropdown } from "../customDropdown";

export const PaymentTermsDropdown = ({
  selected,
  onSelect,
  label = "Payment Terms",
}) => {
  const options = [
    { label: "Net 1 Day", value: "1d" },
    { label: "Net 7 Days", value: "7d" },
    { label: "Net 14 Days", value: "14d" },
    { label: "Net 30 Days", value: "30d" },
  ];
  return (
    <CustomDropdown
      options={options}
      onSelect={onSelect}
      selectedOption={selected}
      label={label}
    />
  );
};
