import "date-fns";
import { differenceInDays } from "date-fns";

export const IntegerValidation = (number) => {
    const regex = /[0-9]d*$/;
    return regex.test(number);
  };

export const DifferenceInDay = (startDate, endDate) => {
    console.log(startDate, endDate);
    return (
      differenceInDays(
        new Date(endDate).setHours(0, 0, 0, 0),
        new Date(startDate).setHours(0, 0, 0, 0)
      ) + 1
    );
  };
  
  export const calculateBookingCost = (price,discount,minimum_rental_period,duration) => {
    let cost = 0;
    cost = price * duration;
    if (discount && duration > minimum_rental_period) cost -= discount;
    return cost;
  }
