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

  export const postReturn = (product, mileage) => {
    const dataList = JSON.parse(localStorage.getItem("dataList"));
  
    if (product.type === "meter")
      product.durability -= Math.ceil(mileage / 10) * 2;
  
    product.availability = true;
    product.mileage += parseInt(mileage);
  
    const result = {
      ...product,
      startDate: null,
      endDate: null,
    };
  
    console.log(result);
  
    const productIndex = dataList.findIndex((item) => item.id === product.id);
    dataList[productIndex] = { ...result };
  
    localStorage.setItem("dataList", JSON.stringify(dataList));
  
    //console.log(dataList);
  }  

  export const postBooking= (product, timerange) => {
    const duration = timerange.duration;
    const dataList = JSON.parse(localStorage.getItem("dataList"));
  
    if (product.type === "plain") product.durability -= 1 * duration;
    else if (product.type === "meter") product.durability -= 2 * duration;
  
    if (product.type === "meter") {
      product.mileage += 10 * duration;
      product.durability -= 2 * duration;
    }
  
    product.availability = false;
  
    const result = {
      ...product,
      startDate: timerange.startDate,
      endDate: timerange.endDate,
    };
  
    console.log(result);
  
    const productIndex = dataList.findIndex((item) => item.id === product.id);
    dataList[productIndex] = { ...result };
  
    localStorage.setItem("dataList", JSON.stringify(dataList));
  
    //console.log(dataList);
  }
  
  