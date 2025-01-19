import { DatePicker } from "antd";
import "antd/dist/reset.css";
import { IconCalendar } from "../../assets/svgIconComponents";

export const CustomDatePicker = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString); // `date` is moment object; `dateString` is formatted date
  };

  return (
    <div>
      <DatePicker
        onChange={onChange}
        className="custom-date-picker"
        suffixIcon={
          <span className="text-primary dark:text-[#7E88C3]">
            <IconCalendar />
          </span>
        }
        format="DD MMM YYYY"
      />
    </div>
  );
};
