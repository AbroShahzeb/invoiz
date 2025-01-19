export const CustomInput = ({
  label = "",
  type = "text",
  register,
  validationRules = {},
  placeholder = "",
  name = "",
}) => {
  return (
    <div className="flex flex-col gap-[9px]">
      {label && (
        <label
          htmlFor={name}
          className="text-[13px] leading-[15px] font-medium text-primary dark:text-blue-muted-100"
        >
          label
        </label>
      )}
      <input
        id={name}
        placeholder={placeholder}
        type={type}
        {...register(name, validationRules)}
        className="text-heading-sm-variant font-bold text-surface-dark py-4 px-5 h-12 flex items-center rounded-[4px] border border-blue-muted-100 focus:outline-none focus:border-primary-dim dark:bg-dark-800 dark:border-dark-700 dark:text-white"
      />
    </div>
  );
};
