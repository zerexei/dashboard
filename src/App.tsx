import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import NavUser from "./Components/NavUser";
import Dashboard from "./Components/pages/Dashboard";
import Home from "./Components/pages/Home";
import Issues from "./Components/pages/Issues";
import PullRequest from "./Components/pages/PullRequest";
import Releases from "./Components/pages/Releases";
import Repositories from "./Components/pages/Repositories";
import Stats from "./Components/pages/Stats";
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
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/repos" component={Repositories} />
              <Route path="/issues" component={Issues} />
              <Route path="/pull-request" component={PullRequest} />
              <Route path="/releases" component={Releases} />
              <Route path="/wiki" component={Wiki} />
              <Route path="/stats" component={Stats} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
