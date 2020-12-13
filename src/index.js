import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import AddPost from "./pages/addPost";
import EditPost from "./pages/editPost";
import Dashboard from "./pages/Dashboard";

/**
 * Switch ensures the rendering of only one component
 * Route tag are the links b/w the components and placed b/w switch tags
 */

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog/:postName" component={Blog} />
          <Route path="/login" component={Login} />
          <Route path="/addPost" component={AddPost} />
          <Route path="/editPost" component={EditPost} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
