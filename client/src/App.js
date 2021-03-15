import "./App.css";
import { Route, Switch } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import ResultsPage from "./pages/ResultPage";
import DetailPage from "./pages/DetailPage"
import "./styles/General.scss";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={SearchPage} exact />
        <Route path="/items" component={ResultsPage} exact />
        <Route path="/items/:id" component={DetailPage} exact />
      </Switch>
    </main>
  );
}

export default App;
