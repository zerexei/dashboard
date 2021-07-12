import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import NavUser from "./Components/NavUser";
import Home from "./Components/pages/Home";

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

              <Route path="/profile">
                <h2>profile</h2>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
