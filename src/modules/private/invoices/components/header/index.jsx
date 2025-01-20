import { Button } from "../../../../../generalComponents";
import { invoices } from "../../../../../data";

export const Header = () => {
  return (
    <div className="flex items-center justify-between gap-[18px] lg:max-w-[730px] lg:mx-auto lg:w-full">
      <div className="mr-auto">
        <h1 className="text-[24px] leading-normal tracking-[-0.75px] font-bold">
          Invoices
        </h1>
        <p className="text-[13px] leading-[15px] tracking-[-0.1px] text-blue-muted-300 mt-[3px] dark:text-blue-muted-100">
          {invoices?.length} invoices
        </p>
      </div>
      <div>Filter By</div>
      <div>
        <Button withIcon={true} label="New" className="md:hidden" />
        <Button
          withIcon={true}
          label="New Invoice"
          className="hidden md:flex"
        />
      </div>
    </div>
  );
};
