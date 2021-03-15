import "../styles/Results.scss";
import { useState, useEffect } from "react";
import { searchItems } from "../services/apiWrapper";
import ItemBox from "./ItemBox";

export default function Results(props) {
  const [results, setResults] = useState();
  useEffect(() => {
    if (props.query) {
      searchItems(props.query).then((res) => {
        setResults(res);
      });
    }
  }, [props.query]);

  if (results) {
    return (
      <div className="results-container">
        <div className="breadcrumb-container">
          {results.categories?.join(" > ")}
        </div>
        <div className="items-container">
          <ItemBox results={results} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
