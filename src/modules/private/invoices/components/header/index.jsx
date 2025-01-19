import { Button } from "../../../../../generalComponents";

export const Header = () => {
  return (
    <div className="flex items-center justify-between gap-[18px]">
      <div className="mr-auto">
        <h1 className="text-[24px] leading-normal tracking-[-0.75px] font-bold">
          Invoices
        </h1>
        <p className="text-[13px] leading-[15px] tracking-[-0.1px] text-blue-muted-300 mt-[3px] dark:text-blue-muted-100">
          No invoices
        </p>
      </div>
      <div>Filter By</div>
      <div>
        <Button withIcon={true} label="New" />
      </div>
    </div>
  );
};
