import React, { useState } from "react";
import data from "../Data.json";

const HomeTable = () => {
  // console.log(data)
  const [input, setInput] = useState('');
  const [modifiedData, setmodifiedData] = useState(data)

  const searchFn = () => {
    setmodifiedData(data.filter(
      (d) => d.name.toLowerCase().indexOf(input.toLowerCase()) !== -1
    ))
    console.log(modifiedData);
  };



  return (
    <div className="max-w-6xl">
      {/* SearchBar */}
      <div>
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <div className="input-group relative flex items-stretch w-full mb-4">
              <input
                className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
                placeholder="Search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />

              <button
                className="btn inline-block px-6 py-2 border-2 border-black text-orange-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                type="button"
                onClick={() => searchFn()}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
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
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTable;
