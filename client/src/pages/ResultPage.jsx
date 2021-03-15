import SearchBox from "../components/SearchBox";
import Results from "../components/Results";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ResultPage() {
  let query = useQuery();

  const [queryValue, setQuery] = useState();

  useEffect(() => {
    setQuery(query.get("search"));
  }, [query]);
  return (
    <div>
      <SearchBox setQuery={setQuery} />
      <Results query={queryValue} />
    </div>
  );

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
}
