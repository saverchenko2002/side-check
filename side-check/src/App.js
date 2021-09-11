import "./App.css";
import { Switch, Route, Redirect } from "react-router";

import Header from "./components/header-component/header.component";
import Homepage from "./pages/homepage.component";
import NoHomepage from "./pages/nohomepage.component";

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/exit" component={NoHomepage} />
    </Switch>
  </div>
);

export default App;
