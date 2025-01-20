import emptyIllustration from "../../../../../assets/illustration-empty.svg";

export const EmptyIllustration = () => {
  return (
    <div className="mx-auto w-full pt-[102px] pb-[139px] md:pt-[209px] md:pb-[277px] lg:py-20 flex items-center justify-center">
      <div className="flex flex-col gap-[42px] md:gap-[66px]">
        <div>
          <img
            src={emptyIllustration}
            alt="Empty Illustration"
            className="h-[160px] md:h-[200px]"
          />
        </div>
        <div className="text-center">
          <h2 className="text-[24px] leading-normal tracking-[-0.75px] font-bold">
            There is nothing here
          </h2>
          <p className="text-[13px] leading-[15px] tracking-[-0.1px] text-blue-muted-300 dark:text-blue-muted-100 mt-[23px] max-w-[176px] mx-auto">
            Create an invoice by clicking the New button and get started
          </p>
        </div>
      </div>
    </div>
  );
};
