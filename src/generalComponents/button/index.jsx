import { IconPlus } from "../../assets/svgIconComponents";

export const Button = ({
  label = "",
  variant = "primary",
  className = "",
  onClick,
  disabled = false,
  type = "button",
  withIcon = false,
  icon = <IconPlus />,
}) => {
  const variants = {
    primary:
      "text-heading-sm-variant font-bold text-white px-6 py-4 h-12 rounded-[24px] bg-primary hover:bg-primary-dim transition-all flex items-center justify-center",
    secondary:
      "text-heading-sm-variant font-bold px-6 py-4 h-12 rounded-[24px] bg-blue-muted-50 text-blue-muted-500 hover:bg-blue-muted-100 dark:bg-dark-700 dark:text-blue-muted-100 dark:hover:bg-white transition-all flex items-center justify-center",
    tertiary:
      "text-heading-sm-variant font-bold px-6 py-4 h-12 rounded-[24px] bg-dark-600 text-blue-muted-300 hover:bg-surface-dark  dark:text-blue-muted-100 dark:hover:bg-dark-800 transition-all flex items-center justify-center",
    danger:
      "text-heading-sm-variant font-bold px-6 py-4 h-12 rounded-[24px] bg-danger text-white hover:bg-danger-dim  transition-all flex items-center justify-center",
    addItem:
      "text-heading-sm-variant font-bold px-6 py-4 h-12 rounded-[24px] bg-blue-muted-50 text-blue-muted-500 hover:bg-blue-muted-100  transition-all flex items-center justify-center w-full",
  };

  return (
    <button
      className={`${variants[variant]} ${className} ${
        withIcon && "flex items-center gap-2 pl-2"
      }`}
      disabled={disabled}
      onClick={() => onClick && onClick()}
      type={type}
    >
      {withIcon && (
        <span className="size-8 rounded-full bg-white flex items-center justify-center text-primary">
          {icon}
        </span>
      )}
      {label}
    </button>
  );
};
