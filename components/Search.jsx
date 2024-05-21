import { useState } from "react";

function SearchForm({ onSearch }) {
  const [searchParams, setSearchParams] = useState({
    street: "",
    district: "",
    county: "",
    locality: "",
    postcode: "",
    propertyType: [],
    newBuild: false,
    estateType: "",
    transactionCategory: "",
    min_price: "",
    max_price: "",
    transactionDate: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (checked) {
        setSearchParams((prev) => ({
          ...prev,
          [name]: [...prev[name], value],
        }));
      } else {
        setSearchParams((prev) => ({
          ...prev,
          [name]: prev[name].filter((item) => item !== value),
        }));
      }
    } else {
      setSearchParams((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {[
        { label: "Street", id: "street", placeholder: "Enter street" },
        { label: "District", id: "district", placeholder: "Enter district" },
        { label: "County", id: "county", placeholder: "Enter county" },
        { label: "Locality", id: "locality", placeholder: "Enter locality" },
        { label: "Postcode", id: "postcode", placeholder: "Enter postcode" },
      ].map((input) => (
        <div key={input.id} className="flex justify-between items-center">
          <label
            className="block text-sm font-medium text-gray-700 w-1/3"
            htmlFor={input.id}
          >
            {input.label}:
          </label>
          <input
            type="text"
            id={input.id}
            name={input.id}
            value={searchParams[input.id]}
            className="mt-1 block w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={handleChange}
            placeholder={input.placeholder}
          />
        </div>
      ))}

      <div className="flex justify-between items-start">
        <label className="block text-sm font-medium text-gray-700 w-1/3">
          Property Type:
        </label>
        <div className="flex flex-wrap w-2/3">
          {["Detached", "Semi-Detached", "Terraced", "Flat/Maisonette"].map(
            (type) => (
              <label key={type} className="flex items-center mr-4">
                <input
                  type="checkbox"
                  name="propertyType"
                  value={type.toLowerCase()}
                  checked={searchParams.propertyType.includes(
                    type.toLowerCase()
                  )}
                  onChange={handleChange}
                  className="mr-2"
                />
                {type}
              </label>
            )
          )}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <label className="block text-sm font-medium text-gray-700 w-1/3">
          New-Build Status:
        </label>
        <div className="flex gap-2 w-2/3">
          <label className="flex items-center mr-4">
            <input
              type="radio"
              name="newBuild"
              value="true"
              checked={searchParams.newBuild}
              onChange={handleChange}
              className="mr-2"
            />
            New-Build
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="newBuild"
              value="false"
              checked={searchParams.newBuild === false}
              onChange={handleChange}
              className="mr-2"
            />
            Not New-Build
          </label>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <label className="block text-sm font-medium text-gray-700 w-1/3">
          Estate Type:
        </label>
        <select
          className="mt-1 block w-2/3 px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          name="estateType"
          value={searchParams.estateType}
          onChange={handleChange}
        >
          <option value="">Select Estate Type</option>
          <option value="freehold">Freehold</option>
          <option value="leasehold">Leasehold</option>
        </select>
      </div>

      <div className="flex justify-between items-center">
        <label className="block text-sm font-medium text-gray-700 w-1/3">
          Transaction Category:
        </label>
        <select
          className="mt-1 block w-2/3 px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          name="transactionCategory"
          value={searchParams.transactionCategory}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option value="standard">Standard</option>
          <option value="additional">Additional</option>
        </select>
      </div>

      <div className="flex justify-between items-center">
        <label className="block text-sm font-medium text-gray-700 w-1/3">
          Minimum Price (£):
        </label>
        <input
          type="number"
          name="min_price"
          value={searchParams.min_price}
          className="mt-1 block w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          onChange={handleChange}
          placeholder="Enter minimum price"
        />
      </div>

      <div className="flex justify-between items-center">
        <label className="block text-sm font-medium text-gray-700 w-1/3">
          Maximum Price (£):
        </label>
        <input
          type="number"
          name="max_price"
          value={searchParams.max_price}
          className="mt-1 block w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          onChange={handleChange}
          placeholder="Enter maximum price"
        />
      </div>

      <div className="flex justify-between items-center">
        <label className="block text-sm font-medium text-gray-700 w-1/3">
          Transaction Date:
        </label>
        <input
          type="date"
          name="transactionDate"
          value={searchParams.transactionDate}
          className="mt-1 block w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-end mt-6">
        <button
          type="submit"
          className="w-36 flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
