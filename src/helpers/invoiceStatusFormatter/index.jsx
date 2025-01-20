const baseStyles =
  "text-heading-sm-variant font-bold px-[30px] py-3 h-10  justify-center rounded-[6px] md:w-[104px]";

export const invoiceStatusFormatter = (status) => {
  switch (status) {
    case "paid":
      return (
        <div
          className={`${baseStyles} flex items-center gap-2 text-[#33D69F] bg-[#33D69F]/[0.0571]`}
        >
          <div className="size-2 rounded-full bg-[#33D69F] flex-shrink-0"></div>
          {""} Paid
        </div>
      );
    case "pending":
      return (
        <div
          className={`${baseStyles} flex items-center gap-2 text-[#FF8F00] bg-[#FF8F00]/[0.0571]`}
        >
          <div className="size-2 rounded-full bg-[#FF8F00] flex-shrink-0"></div>
          {""} Pending
        </div>
      );
    case "draft":
      return (
        <div
          className={`${baseStyles} flex items-center gap-2 text-[#373B53] bg-[#373B53]/[0.0571] dark:text-[#DFE3FA] dark:bg-[#DFE3FA]/[0.0571]`}
        >
          <div className="size-2 rounded-full bg-[#373B53] dark:bg-[#DFE3FA] flex-shrink-0"></div>
          {""} Draft
        </div>
      );
  }
};
