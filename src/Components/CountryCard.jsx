import { Link } from "react-router-dom";

function CountryCard({ country }) {
  return (
    <Link to={`/country/${country.cca3}`} className="card dark:bg-slate-800 dark:hover:bg-slate-700 transition-transform transform hover:scale-105 bg-slate-50  rounded-md shadow-md hover:shadow-lg  border border-gray-400 hover:border-gray-300">
      <img  src={country.flags.svg} alt={`${country.name.common} flag`} className="w-full max-h-52  object-cover rounded-t-md border border-gray-200" />
      <div className="p-2">
        <h2 className="font-bold text-lg text-blue-600 dark:text-blue-400">{country.name.common}</h2>
        <p className="text-gray-600 dark:text-gray-200"><strong>Region:</strong> {country.region}</p>
        <p className="text-gray-600 dark:text-gray-200"><strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}</p>
        <p className="text-gray-600 dark:text-gray-200"><strong>Sub-Region:</strong> {country.subregion || "N/A"}</p>
      </div>
    </Link>
  );
}

export default CountryCard;
