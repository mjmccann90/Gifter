import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ApplicationViews from "./components/ApplicationViews";
import { PostProvider } from "./providers/PostProvider";

function App() {
  return (
    <div className="App">
      <Router>
        <PostProvider>
          <ApplicationViews />
        </PostProvider>
      </Router>
    </div>
  );
}

export default App;