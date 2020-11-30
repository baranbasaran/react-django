import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./views/search";
import List from "./views/list";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a
            className="navbar-brand mx-auto"
            href="https://www.alotech.com.tr/"
            target="_blank"
            style={{ color: "red", fontWeight: "bold", textAlign: "center" }}
          >
            AloTech
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>

        <div className="container py-4">
          <div className="row">
            <Route path="/" exact component={Search} />
            <Route path="/list/:startdate/:finishdate" exact component={List} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
