const SearchResults = ({ results }: { results: any[] }) => {
  if (!results.length) return <p>No results found</p>;

  return (
    <div className="mt-4 space-y-4 max-h-[460px] overflow-y-auto scrollbar-custom pr-2">
      {results.map((item, idx) => (
        <div
          key={idx}
          className="p-4 bg-white/10 rounded text-white hover:bg-white/20 transition"
        >
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 font-semibold text-lg"
          >
            {item.title}
          </a>

          <p className="text-sm text-gray-300 mt-1">{item.snippet}</p>

          <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
            {item.favicon && (
              <img src={item.favicon} alt="favicon" className="w-4 h-4" />
            )}
            <span>{item.displayed_link}</span>
            {item.date && <span>• {item.date}</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
