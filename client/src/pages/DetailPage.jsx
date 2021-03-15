import SearchBox from "../components/SearchBox";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";

export default function DetailPage() {
  let { id } = useParams();

  return (
    <div>
      <SearchBox />
      <ItemDetail id={id} />
    </div>
  );
}
