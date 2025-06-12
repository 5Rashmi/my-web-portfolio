import { useState } from "react";
import { getInternetApi } from "../../utils/internetApi";
import SearchBar from "../../ui/search/SearchBar";
import SearchResults from "./SearchResults";

const InternetPage = () => {
  const [results, setResults] = useState<any[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query: string) => {
    const data = await getInternetApi(query);
    console.log("FULL API RESPONSE:", data);

    const links = data?.organic_results || [];
    setResults(links);
    setHasSearched(true); // ← Add this line
  };

  return (
    <div className="w-full mx-auto px-8 py-2 overflow-y-auto">
      <SearchBar onSearch={handleSearch} />
      {hasSearched && <SearchResults results={results} />}
    </div>
  );
};

export default InternetPage;
