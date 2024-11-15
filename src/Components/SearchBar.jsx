function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by name or capital..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="min-w-80 p-2 border bg-white border-gray-300 dark:bg-slate-800 dark:text-gray-50 rounded mb-4 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
    />
  );
}

export default SearchBar;
