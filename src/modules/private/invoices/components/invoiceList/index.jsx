import { invoices } from "../../../../../data";
import { InvoiceItem } from "../invoiceItem";

export const InvoiceList = () => {
  return (
    <div className="py-8 md:py-[55px] lg:max-w-[730px] lg:w-full lg:mx-auto flex flex-col gap-4">
      {invoices.map((invoice) => (
        <InvoiceItem invoice={invoice} />
      ))}
    </div>
  );
};
