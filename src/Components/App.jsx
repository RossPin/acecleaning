import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <Header />
          <h2>Coming Soon</h2>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;