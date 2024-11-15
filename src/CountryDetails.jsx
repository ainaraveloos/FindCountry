import ky from "ky";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../public/Logo.png";

function CountryDetail() {
  const { countryCode } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCountry() {
      try {
        const data = await ky
          .get(`https://restcountries.com/v3.1/alpha/${countryCode}`)
          .json();
        setCountry(data[0]);
        setLoading(false);
      } catch (err) {
        setError("Failed to load country data " + err);
        setLoading(false);
      }
    }
    fetchCountry();
  }, [countryCode]);

  if (loading)
    return (
      <p className="text-center text-gray-500 w-full h-screen self-center">
        <img src={Loading} alt="" className="w-20 h-20 animate-spin" />
      </p>
    );
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!country)
    return <p className="text-center text-gray-500">No country data found.</p>;

  return (
    <div className="flex w-full h-screen justify-center items-center dark:bg-slate-800 bg-white">
      <div className=" max-w-md mx-auto dark:bg-slate-200- bg-white rounded-lg shadow-lg border border-gray-200 mt-6">
        <img
          src={country.flags.svg}
          alt={`${country.name.common} flag`}
          className="w-full h-52  rounded-t-lg object-cover"
        />
        <h2 className="text-2xl font-bold text-gray-800 my-2 text-center ">
          {country.name.common}
        </h2>
        <div className="text-gray-600 space-y-1 p-6">
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Capital:</strong> {country.capital}
          </p>
          <p>
            <strong>Population:</strong> {country.population}
          </p>
          <p>
            <strong>Sub-Region:</strong>{" "}
            {(country.subregion || "N/A").toUpperCase()}
          </p>

          <p>
            <strong>Currency:</strong>{" "}
            {Object.values(country.currencies || {})
              .map((c) => c.name)
              .join(", ")}
          </p>
          <p>
            <strong>Borders:</strong>{" "}
            {country.borders ? country.borders.join(", ") : "None"}
          </p>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="text-white mt-4 m-6  border-b-2 bg-blue-500 border-blue-500 hover:bg-blue-600 hover:border-blue-700 transition-colors duration-300 ease-in-out rounded-md py-2 px-4  "
        >
          {" "}
          Back{" "}
        </button>
      </div>
    </div>
  );
}

export default CountryDetail;
