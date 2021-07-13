import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import NavUser from "./Components/NavUser";
import Dashboard from "./Components/pages/Dashboard";
import Home from "./Components/pages/Home";
import Issues from "./Components/pages/Issues";
import PullRequest from "./Components/pages/PullRequest";
import Releases from "./Components/pages/Releases";
import Repositories from "./Components/pages/Repositories";
import Repository from "./Components/pages/Repository";
import Stats from "./Components/pages/Stats";
import Trendy from "./Components/pages/Trendy";
import Wiki from "./Components/pages/Wiki";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen max-h-screen p-6 bg-gray-50">
        <div className="flex flex-1 items-stretch bg-white shadow-md ">
          {/* ======================LEFT================= */}
          <div className="w-1/6 p-2 text-white bg-green-700 rounded-l">
            <NavUser />
            <NavBar />
          </div>

          {/* =================RIGHT==================== */}
          <div className="flex-1 p-2 rounded-r">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/repos" component={Repositories} />
              <Route exact path="/repos/:name" component={Repository} />
              <Route exact path="/trendy" component={Trendy} />

              <Route exact path="/issues" component={Issues} />
              <Route exact path="/pull-request" component={PullRequest} />
              <Route exact path="/releases" component={Releases} />
              <Route exact path="/wiki" component={Wiki} />
              <Route exact path="/stats" component={Stats} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
