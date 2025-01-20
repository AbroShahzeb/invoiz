import { Button } from "../../../../../generalComponents";
import { invoices } from "../../../../../data";
import { AddEditInvoice } from "../addEditInvoice";
import { useState } from "react";

export const Header = () => {
  const [isAddOpen, setIsAddOpen] = useState(false);
  return (
    <>
      <div
        className={`flex items-center justify-between gap-[18px] lg:max-w-[730px] lg:mx-auto lg:w-full ${
          isAddOpen && "bg-white dark:bg-dark-700"
        }`}
      >
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
          <Button
            withIcon={true}
            label="New"
            className="md:hidden"
            onClick={() => setIsAddOpen(true)}
          />
          <Button
            withIcon={true}
            label="New Invoice"
            className="hidden md:flex"
            onClick={() => setIsAddOpen(true)}
          />
        </div>
      </div>

      <AddEditInvoice isOpen={isAddOpen} setIsOpen={setIsAddOpen} />
    </>
  );
};
