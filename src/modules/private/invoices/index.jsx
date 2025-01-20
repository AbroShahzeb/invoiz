import { useState } from "react";
import { EmptyIllustration, Header, InvoiceList } from "./components";

export const Invoices = () => {
  const [invoices, setInvoices] = useState(["a"]);
  return (
    <div className="px-6 pt-8 md:px-12 md:pt-[61px] flex flex-col h-full overflow-y-auto">
      <Header />
      <div className="">
        {invoices?.length === 0 ? <EmptyIllustration /> : <InvoiceList />}
      </div>
    </div>
  );
};
