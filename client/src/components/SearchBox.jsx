import "../styles/SearchBox.scss";
import logo from "../img/Logo_ML.png";
import searchIcon from "../img/ic_Search.png";
import { useHistory } from "react-router-dom";

export default function SearchBox(props) {
  const history = useHistory();

  return (
    <div className="top-container">
      <div className="elements-container">
        <img className="logo" src={logo} alt="Logo" />
        <input
          className="text-input"
          id="text-input"
          placeholder={" Nunca dejes de buscar"}
          onKeyDown={handleKey}
        />
        <input
          type="image"
          className="search-input"
          alt="Search"
          src={searchIcon}
          onClick={() => handleClick()}
        />
      </div>
    </div>
  );

  function handleClick() {
    navigateToResults();
  }

  function handleKey(e) {
    if (e.key === "Enter") {
      navigateToResults();
    }
  }

  function navigateToResults() {
    history.push(
      `/items?search=${document.getElementById("text-input").value}`
    );
    if (props.setQuery) {
      props.setQuery(document.getElementById("text-input").value);
    }
  }
}
