/**
 * @author ${Tanvir Ahmed}
 * @email ${tanvirewu32@gmail.com}
 * ${tags}
 */
import React, { useState } from "react";
import data from "../Data.json";

const ModalReturn = () => {
  const [showModal, setShowModal] = useState(false);
  const [prod, setProd] = useState();
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Return
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Return a product</h3>
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
                      <label for="product">Return a product</label>
                      <select
                        className="ml-5 mb-5"
                        name="product"
                        id="product"
                        onChange={(e) => setProd(e.target.value)}
                      >
                        {data.map((d) => (
                          <option value={d.name}>{d.name}</option>
                        ))}
                      </select>

                      <div class="max-w-6xl flex justify-center">
                        <input type="Number" placeholder=" Mileage" />
                      </div>

                      {/* Dropdown end */}
                      {/* Date start */}
                      {/* <div>
                        <span className="mr-2">From: </span>
                        <input type="date" name="from" />
                        <br />
                        <span className="mr-7">To: </span>
                        <input type="date" id="birthday" name="to" />
                      </div> */}
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
                    onClick={() => setShowModal(false)}
                  >
                    Confirm Returning
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default ModalReturn;
