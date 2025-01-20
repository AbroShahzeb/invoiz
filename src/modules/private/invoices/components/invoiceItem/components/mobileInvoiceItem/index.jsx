import { FormattedDate, FormattedNumber } from "react-intl";
import { invoiceStatusFormatter } from "../../../../../../../helpers";
import { Link } from "react-router-dom";

export const MobileInvoiceItem = ({ invoice }) => {
  return (
    <div className="bg-white shadow-invoice-card dark:bg-dark-800 rounded-lg p-8 flex flex-col gap-6 md:hidden">
      {/* Mobile Invoice Card Styling */}
      <div className="flex items-center justify-between gap-2">
        <Link
          className="text-heading-sm-variant font-bold hover:underline"
          to={`/invoice/${invoice.id}`}
        >
          <span className="text-blue-muted-500">#</span>
          {invoice.id}
        </Link>
        <div className="text-body-variant text-blue-muted-300 dark:text-white font-medium">
          {invoice.clientName}
        </div>
      </div>

      <div className="flex items-center gap-2 justify-between">
        <div className="flex flex-col gap-[9px]">
          <p className="text-blue-muted-300 dark:text-blue-muted-100 text-body-variant font-medium">
            Due{" "}
            <FormattedDate
              value={invoice.paymentDue}
              day="2-digit"
              month="short"
              year="numeric"
            />
          </p>
          <p className="text-heading-sm font-bold">
            {
              <FormattedNumber
                style="currency"
                value={invoice.total}
                minimumFractionDigits={2}
                maximumFractionDigits={2}
                currency="GBP"
              />
            }
          </p>
        </div>
        <div>{invoiceStatusFormatter(invoice.status)}</div>
      </div>
    </div>
  );
};
