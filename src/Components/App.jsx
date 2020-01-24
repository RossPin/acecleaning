import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <Header />
          <Home />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;