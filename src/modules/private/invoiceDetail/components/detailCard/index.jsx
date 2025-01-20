import { FormattedDate } from "react-intl";
import { ItemsCard } from "../itemsCard";

export const DetailCard = ({ invoice }) => {
  console.log("invoice", invoice);
  return (
    <div className="mt-4 md:mt-6 bg-white dark:bg-dark-800 rounded-[6px] md:rounded-lg shadow-invoice-card p-6 mb-[120px]">
      <div>
        <div className="text-heading-sm-variant font-bold hover:underline">
          <span className="text-blue-muted-500">#</span>
          {invoice.id}
        </div>
        <p className="mt-1 text-body-variant font-medium text-blue-muted-500 dark:text-blue-muted-100">
          {invoice.description}
        </p>
      </div>

      <div className="text-body-variant font-medium text-blue-muted-500 dark:text-blue-muted-100 mt-[30px]">
        <p>{invoice?.senderAddress?.street}</p>
        <p>{invoice?.senderAddress?.city}</p>
        <p>{invoice?.senderAddress?.postalCode}</p>
        <p>{invoice?.senderAddress?.country}</p>
      </div>

      <div className="flex items-start gap-10 mt-[31px]">
        <div>
          <div>
            <p className="text-body-variant font-medium text-blue-muted-500 dark:text-blue-muted-100">
              Invoice Date
            </p>
            <p className="mt-[13px] text-[15px] leading-[20px] font-bold tracking-[-0.25px]">
              {
                <FormattedDate
                  value={invoice.createdAt}
                  day="2-digit"
                  month="short"
                  year="numeric"
                />
              }
            </p>
          </div>

          <div className="mt-[31px]">
            <p className="text-body-variant font-medium text-blue-muted-500 dark:text-blue-muted-100">
              Payment Due
            </p>
            <p className="mt-[13px] text-[15px] leading-[20px] font-bold tracking-[-0.25px]">
              {
                <FormattedDate
                  value={invoice.paymentDue}
                  day="2-digit"
                  month="short"
                  year="numeric"
                />
              }
            </p>
          </div>
        </div>

        <div className="">
          <p className="text-body-variant font-medium text-blue-muted-500 dark:text-blue-muted-100">
            Bill to
          </p>
          <div className="mt-[13px]">
            <p className="mt-[13px] text-[15px] leading-[20px] font-bold tracking-[-0.25px]">
              {invoice.clientName}
            </p>
            <div className="text-body-variant font-medium text-blue-muted-500 dark:text-blue-muted-100 mt-[30px]">
              <p>{invoice?.clientAddress?.street}</p>
              <p>{invoice?.clientAddress?.city}</p>
              <p>{invoice?.clientAddress?.postalCode}</p>
              <p>{invoice?.clientAddress?.country}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[31px]">
        <p className="text-body-variant font-medium text-blue-muted-500 dark:text-blue-muted-100">
          Sent to
        </p>
        <p className="mt-[13px] text-[15px] leading-[20px] font-bold tracking-[-0.25px]">
          {invoice.clientEmail}
        </p>
      </div>

      <ItemsCard invoice={invoice} />
    </div>
  );
};
