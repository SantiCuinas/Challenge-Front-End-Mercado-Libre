import "../styles/Results.scss";
import { formatPrice } from "../utils/stringFormatter";
import { useHistory } from "react-router-dom";

export default function ItemBox(props) {
  const history = useHistory();

  return props.results.items.map((item) => (
    <div className="search-container" key={item.id} onClick={() => handleClick(item.id)}>
      <img className="product" src={item.picture} alt="product" />
      <div className="price-container">{formatPrice(item.price.amount)}</div>
      <div className="name-container">{item.title}</div>
      <div className="location-container">{item.location}</div>
    </div>
  ));

  function handleClick(id) {
    history.push(`/items/${id}`);
  }
}
