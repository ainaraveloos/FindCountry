function RegionFilter({ region, setRegion }) {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  return (
    <select
      value={region}
      onChange={(e) => setRegion(e.target.value)}
      className="min-w-64 dark:bg-slate-800 dark:text-gray-50 p-2 border bg-white border-gray-300 rounded mb-4 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
    >
      <option value="">All Regions</option>
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
}

export default RegionFilter;
