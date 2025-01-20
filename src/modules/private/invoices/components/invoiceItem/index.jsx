import { BigInvoiceItem, MobileInvoiceItem } from "./components";

export const InvoiceItem = ({ invoice }) => {
  return (
    <>
      <MobileInvoiceItem invoice={invoice} />
      <BigInvoiceItem invoice={invoice} />
    </>
  );
};
