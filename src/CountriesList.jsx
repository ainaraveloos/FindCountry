import { useEffect, useState } from "react";
import ky from "ky";
import CountryCard from "./Components/CountryCard";
import SearchBar from "./Components/SearchBar";
import RegionFilter from "./Components/RegionFilter";
import ModeToggle from "./Components/ToggleMode";
import Logo from '../public/Logo.png'

function CountryList() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await ky.get("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
        setLoading(false);
      } catch (err) {
        console.error("Erreur lors de la récupération des pays:", err);
        setError("Une erreur est survenue lors du chargement des pays.");
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries
    .filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))
    .filter(country => (region ? country.region === region : true));

  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="w-full  p-4 dark:bg-slate-800 transition-colors duration-300 ">
      <ModeToggle />
      <h1 className="text-3xl dark:text-gray-50 font-bold text-center mb-4">All Countries</h1>
      <div className="flex justify-between items-center mb-4 gap-4">
      <SearchBar search={search} setSearch={setSearch} />
      <RegionFilter region={region} setRegion={setRegion} />
      </div>
      
      {loading && <div className="text-center flex items-center justify-center"><img src={Logo} alt="Loading..." className="w-60 h-60  animate-spin transition-all duration-500" /></div>}
      {!filteredCountries.length && <div className="text-center text-gray-500">No results found.</div>}
      {filteredCountries.length && (<><div className="text-center text-gray-500 dark:text-gray-200 mb-12">Showing {filteredCountries.length} results.</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCountries.map(country => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div></>)}
    </div>
  );
}

export default CountryList;
