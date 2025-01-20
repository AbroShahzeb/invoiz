export const CustomInput = ({
  label = "",
  type = "text",
  register,
  validationRules = {},
  placeholder = "",
  name = "",
  error = "",
}) => {
  return (
    <div className="flex flex-col gap-[9px]">
      <div className="flex items-center gap-3 justify-between">
        {label && (
          <label
            htmlFor={name}
            className={`text-[13px] leading-[15px] font-medium  ${
              error ? "text-danger" : "text-primary dark:text-blue-muted-100"
            }`}
          >
            {label}
          </label>
        )}
        {error && (
          <p className="mr-4 text-[10px] leading-[13px] tracking-[-0.208px] text-danger">
            {error}
          </p>
        )}
      </div>

      <input
        id={name}
        placeholder={placeholder}
        type={type}
        {...register(name, validationRules)}
        className={`text-heading-sm-variant font-bold w-full text-surface-dark py-4 px-5 h-12 flex items-center rounded-[4px] border  focus:outline-none dark:bg-dark-800  dark:text-white ${
          error
            ? "border-danger "
            : "border-blue-muted-100  focus:border-primary-dim  dark:border-dark-700"
        }`}
      />
    </div>
  );
};
