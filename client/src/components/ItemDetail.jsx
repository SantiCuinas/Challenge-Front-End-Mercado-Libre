import { useState, useEffect } from "react";
import { getDetails } from "../services/apiWrapper";
import "../styles/Detail.scss";
import { formatPrice, formatConditionSold } from "../utils/stringFormatter";

export default function ItemDetail(props) {
  const [results, setResults] = useState();
  useEffect(() => {
    if (props.id) {
      getDetails(props.id).then((res) => {
        setResults(res);
      });
    }
  }, [props.id]);

  if (results) {
    return (
      <div className="results-container">
        <div className="breadcrumb-container">
          {results.categories?.join(" > ")}
        </div>
        <div className="details-container">
          <img
            className="product-image"
            src={results.item.picture}
            alt="product"
          />
          <div className="description-container">
            <div className="description-title">Descripcion del producto</div>
            <div className="description-body">{results.item.description}</div>
          </div>
          <div className="title-container">
            <div className="condition-sold-container">
              <div className="title-condition-sold">
                {formatConditionSold(
                  results.item.condition,
                  results.item.sold_quantity
                )}
              </div>
            </div>
            <div className="title">{results.item.title}</div>
            <div className="title-price">
              {formatPrice(results.item.price.amount)}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
