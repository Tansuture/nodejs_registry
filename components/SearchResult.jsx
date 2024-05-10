import React from "react";

const SearchResult = ({ results }) => {
  return (
    <div>
      {results?.map((el) => (
        <div
         
          className="border border-slate-400 rounded-lg mb-4 p-4"
        >
          <h2 className="text-xl font-bold mb-2">Price Paid:{el.pricePaid}</h2>
          <p className="mb-2">
            <strong>Property Address:</strong>
            <br />
            Street: {el.propertyAddress.street}
            <br />
            Locality: {el.propertyAddress.locality}
            <br />
            Town: {el.propertyAddress.town}
            <br />
            District: {el.propertyAddress.district}
            <br />
            County: {el.propertyAddress.county}
            <br />
            Postcode: {el.propertyAddress.postcode}
          </p>
          <p className="mb-2">
            <strong>Property Type:</strong>{" "}
            {el.propertyType.prefLabel[0]._value}
          </p>
          <p className="mb-2">
            <strong>Estate Type:</strong> {el.estateType.prefLabel[0]._value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
