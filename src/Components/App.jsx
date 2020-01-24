import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Contact from "./Contact"

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div className="container">
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;