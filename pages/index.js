import { Inter } from "next/font/google";
import Search from "@/components/Search";
import { useState } from "react";
import SearchResult from "@/components/SearchResult";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [results, setResults] = useState([]);

  const handleSearch = async (searchParams) => {
    const queryString = new URLSearchParams(searchParams).toString();
    const response = await fetch(
      `http://54.226.245.83:80/api/properties?${queryString}`
    );
    const data = await response.json();
    setResults(data);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-10 ${inter.className}`}
    >
      <h1 className="text-3xl  mb-5 font-bold text-center text-gray-900">
        HM Land Registry Open Data
      </h1>
      <Search onSearch={handleSearch} />
      {results.length > 0 ? (
        <SearchResult results={results} />
      ) : (
        <h1>No Data </h1>
      )}
    </main>
  );
}
