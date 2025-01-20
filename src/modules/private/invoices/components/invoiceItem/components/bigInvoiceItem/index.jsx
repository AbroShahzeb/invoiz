import { FormattedDate, FormattedNumber } from "react-intl";
import { IconArrowRight } from "../../../../../../../assets/svgIconComponents";
import { invoiceStatusFormatter } from "../../../../../../../helpers";
import { Link } from "react-router-dom";

export const BigInvoiceItem = ({ invoice }) => {
  return (
    <div className="hidden shadow-invoice-card md:grid w-full [grid-template-columns:repeat(5,_1fr)_min-content] gap-8 items-center justify-between px-6 py-4 rounded-lg bg-white dark:bg-dark-800">
      {/* Invoice Id and Number */}
      <div className="flex items-center justify-between gap-2">
        <div className="text-heading-sm-variant font-bold ">
          <span className="text-blue-muted-500">#</span>
          {invoice.id}
        </div>
      </div>

      {/* Due Date */}
      <div className="text-blue-muted-300 dark:text-blue-muted-100 text-body-variant font-medium">
        Due{" "}
        <FormattedDate
          value={invoice.paymentDue}
          day="2-digit"
          month="short"
          year="numeric"
        />
      </div>

      {/* Client Name */}
      <div className="text-body-variant text-blue-muted-300 dark:text-white font-medium">
        {invoice.clientName}
      </div>

      {/* Amount  */}
      <p className="text-heading-sm font-bold text-right">
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

      {/* Invoice Status */}
      <div>{invoiceStatusFormatter(invoice.status)}</div>

      {/* Detail Arrow */}
      <Link className="text-primary" to={`/invoice/${invoice.id}`}>
        <IconArrowRight />
      </Link>
    </div>
  );
};
