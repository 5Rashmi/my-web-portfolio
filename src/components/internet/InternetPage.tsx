import { useState } from "react";
import { getInternetApi } from "../../utils/internetApi";
import SearchBar from "../../ui/search/SearchBar";
import SearchResults from "./SearchResults";

const InternetPage = () => {
  const [results, setResults] = useState<any[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setLoading(true);
    const data = await getInternetApi(query);
    console.log("FULL API RESPONSE:", data);

    const links = data?.organic_results || [];
    setResults(links);
    setHasSearched(true);
    setLoading(false);
  };

  return (
    <div className="w-full mx-auto px-8 py-2 overflow-y-auto">
      <SearchBar onSearch={handleSearch} />
      {loading && (
        <div className="text-center mt-4 text-lg font-medium text-gray-600 animate-pulse">
          Loading...
        </div>
      )}
      {!loading && hasSearched && <SearchResults results={results} />}
    </div>
  );
};

export default InternetPage;
