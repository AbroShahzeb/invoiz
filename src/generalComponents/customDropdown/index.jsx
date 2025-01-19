import { Button, Dropdown, Menu } from "antd";
import { useState } from "react";
import { IconArrowDown } from "../../assets/svgIconComponents";

export const CustomDropdown = ({
  label = "",
  options = [],
  onSelect,
  selectedOption,
  placeholder = "Select an option",
  className = "",

  inputWidth,
  layout = "vertical",
  customOverlay = null,

  setOpen,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = ({ key }) => {
    const selected = options.find((option) => option.value === key);
    onSelect(selected);
    setIsOpen(false);
    if (setOpen) setOpen(false);
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      className="max-h-[300px] scroll-y-auto scrollbar-none "
    >
      {options.map((option) => (
        <Menu.Item key={option.value}>
          <div className="flex items-center gap-2 justify-between hover:text-primary w-full ">
            <span>{option.label}</span>
          </div>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div
      className={`relative w-full ${className} flex ${
        layout === "vertical"
          ? "flex-col items-start gap-50"
          : "flex-row items-center gap-100"
      } `}
      style={{ width: inputWidth && inputWidth }}
    >
      {label && (
        <label className="text-primary-dim dark:text-blue-muted-100 text-[13px] leading-[15px] tracking-[0.1px] font-medium whitespace-nowrap mb-[9px]">
          {label}
        </label>
      )}
      <Dropdown
        overlay={menu}
        trigger={["click"]}
        onOpenChange={(open) => {
          setIsOpen(open);
          if (setOpen) setOpen(open);
        }}
        open={isOpen}
        overlayClassName="custom-dropdown"
      >
        {customOverlay ? (
          customOverlay
        ) : (
          <Button
            className="custom-dropdown-button h-full"
            onClick={(e) => e.preventDefault()}
            style={{ width: inputWidth && inputWidth }}
          >
            <span>
              {selectedOption?.label ? selectedOption.label : placeholder}
            </span>
            <span
              className={`${
                !isOpen ? "rotate-0" : "rotate-180"
              } ml-auto text-secondary`}
            >
              <IconArrowDown />
            </span>
          </Button>
        )}
      </Dropdown>
    </div>
  );
};
