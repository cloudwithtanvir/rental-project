import React, { useState } from "react";
import data from "../Data.json";
import ModalBook from "./ModalBook";
import ModalReturn from "./ModalReturn";

const RentalDataTable = () => {
  const [input, setInput] = useState("");
  const [modifiedData, setmodifiedData] = useState(data);
  const [modal, setModal] = useState(false);

  const searchFn = (value) => {
    setInput(value)
    console.log('searchFn',value)
    setmodifiedData(
      data.filter(
        (d) => d.name.toLowerCase().indexOf(input.toLowerCase()) !== -1
      )
    );
    console.log(modifiedData);
  };


  return (
    <div className="flex justify-center">
      <div className="max-w-6xl">
        {/* SearchBar starts here */}
        <div>
          <div className="flex justify-end mt-6 mr-[90px]">
            <div className="mb-3 xl:w-96">
              <div className="input-group relative flex items-stretch w-full mb-4">
                <input
                  className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
                  placeholder="Search"
                  value={input}
                  onChange={(e) => searchFn(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* SearchBar ends here */}

        {/* Table Starts here  */}
        <div className="flex flex-col mt-5 mx-20 border-8">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4"
                      >
                        Availability
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4"
                      >
                        Durability
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4"
                      >
                        Mileage
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4"
                      >
                        Needing Repair
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4"
                      >
                        Minimum Rent Period
                      </th>
                    </tr>
                  </thead>

                  {modifiedData.map((d) => (
                    <tbody>
                      <tr className="border-b">
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {d.name}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {d.availability ? "True" : "False"}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {d.price}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {d.durability}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {d.mileage}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {d.needing_repair ? "True" : "False"}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {d.minimum_rent_period}
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* Table ends here */}

        {/* Modal starts  here */}

        <div className="mt-6 flex justify-end mr-20 mb-10">
          <div className="mr-5">
            <ModalBook />
          </div>

          <div className="mr-5">
            <ModalReturn />
          </div>
        </div>
        {/* modal ends here */}
      </div>
    </div>
  );
};

export default RentalDataTable;
