import { Button } from "../../../../../generalComponents";
import { invoiceStatusFormatter } from "../../../../../helpers";

export const Header = ({ invoice }) => {
  return (
    <div className="flex items-center gap-5 p-6 justify-between bg-white dark:bg-dark-800 shadow-invoice-card rounded-[6px] mt-8 mb-4 md:px-8 md:rounded-lg">
      <p className="text-body-variant font-medium text-blue-muted-300 dark:text-blue-muted-100">
        Status
      </p>
      <div>{invoiceStatusFormatter(invoice.status)}</div>

      <div className="ml-auto hidden md:flex items-center gap-2">
        <Button variant="tertiary" label="Edit" />
        <Button variant="danger" label="Delete" />
        <Button label="Mark as Paid" />
      </div>
    </div>
  );
};
