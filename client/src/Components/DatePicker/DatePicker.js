import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";

const DatePickerComponent = ({
  fromDate,
  toDate,
  handleSelectFromDate,
  handleSelectToDate,
  isFrom,
  isTo,
}) => {
  return (
    <DatePicker
      selected={isFrom ? fromDate : toDate}
      onChange={
        isFrom
          ? (date) => handleSelectFromDate(date)
          : (date) => handleSelectToDate(date)
      }
      dateFormat="yyyy-MM-dd"
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      closeOnScroll
      withPortal
      selectsStart={isFrom}
      selectsEnd={isTo}
      startDate={fromDate}
      endDate={toDate}
      placeholderText="Click to select a date"
      isClearable
    />
  );
};

export default DatePickerComponent;
