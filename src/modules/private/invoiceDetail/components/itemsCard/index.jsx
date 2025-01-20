import { FormattedNumber } from "react-intl";

export const ItemsCard = ({ invoice }) => {
  return (
    <div className="mt-[38px] rounded-lg overflow-hidden">
      <div className="p-6 bg-blue-muted-50 dark:bg-dark-700 flex flex-col gap-6 text-heading-sm-variant font-bold">
        {invoice?.items?.map((item, index) => (
          <div key={index} className="flex items-center gap-3 justify-between ">
            <div className="flex flex-col gap-2">
              <p>{item?.name}</p>
              <p className="text-primary-dim dark:text-blue-muted-300">
                {item?.quantity} x{" "}
                <FormattedNumber
                  style="currency"
                  value={item.price}
                  minimumFractionDigits={2}
                  maximumFractionDigits={2}
                  currency="GBP"
                />
              </p>
            </div>
            <div>
              <FormattedNumber
                style="currency"
                value={item.total}
                minimumFractionDigits={2}
                maximumFractionDigits={2}
                currency="GBP"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="p-6 flex items-center gap-3 justify-between text-white bg-dark-600 dark:bg-surface-dark">
        <p className="text-[13px] leading-[18px] tracking-[-0.1px]">
          Gross Total
        </p>
        <p className="text-[24px] leading-[32px] font-bold tracking-[-0.5px]">
          <FormattedNumber
            style="currency"
            value={invoice.total}
            minimumFractionDigits={2}
            maximumFractionDigits={2}
            currency="GBP"
          />
        </p>
      </div>
    </div>
  );
};
