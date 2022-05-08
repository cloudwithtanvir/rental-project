import React, { useState } from "react";
import data from "../Data.json";

const ModalBook = () => {
  const [showModal, setShowModal] = useState(false);
  const [prod, setProd] = useState();
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [showBookModal, setShowBookModal] = useState(true);
  const [showBookedModal, setShowBookedModal] = useState(false);
  const [price, setprice] = useState();

  const onButtonClick = () => {
    var date1 = new Date(fromDate);
    var date2 = new Date(toDate);
      
    // To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();
      
    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    console.log('onButtonClick',Difference_In_Days)
    setShowBookedModal(true)
    //setShowBookModal(false)
    setprice(prod[0].price * (Difference_In_Days+1))
  };
  const onProdChange = (e) => {
    var newArray = data.filter(function (el) {
      return el.code === e;
    });
    setProd(newArray)
    console.log('onButtonClick 22',e,newArray)
  };

  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Book
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}

                {showBookModal &&
                <>
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Booking...</h3>
                  <button
                    className="text-black float-right text-3xl"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black h-6 w-6 text-2xl block">X</span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="max-w-6xl flex justify-center">
                    {/* Dropdown start */}
                    <div className="">
                      <label for="cars">Book a product</label>
                      <select
                        className="ml-5 mb-5"
                        name="cars"
                        id="cars"
                        onChange={(e) => onProdChange(e.target.value)}
                      >
                        {data.map((d) => (
                          <option value={d.code}>{d.name}</option>
                        ))}
                      </select>
                      {/* Dropdown end */}
                      {/* Date start */}
                      <div>
                        <span className="mr-2">From: </span>
                        <input value={fromDate} type="date" name="from" onChange={(e)=>  setFromDate(e.target.value)}/>
                        <br />
                        <span className="mr-7">To: </span>
                        <input type="date" value={toDate}  name="to" onChange={(e)=>  setToDate(e.target.value)} />
                      </div>
                      {/* Date end */}
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => onButtonClick()}
                  >
                    Confirm booking
                  </button>
                </div>
                </>
}
                
                {showBookedModal &&
                     <div className="">
                     <label for="cars">Your Estimated Price is {price}</label>
                 
                     {/* Date end */}
                   </div>
               }
   
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black">
          </div>
        </>
      ) : null}
    </>
  );
};

export default ModalBook;
