import React from "react";
import "./App.css";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

function App() {
  return (
    <div className="App">
      {/* header */}
      <Header />
      <div className="app__body">
        <Sidebar />
        {/* Feed */}
        {/* Left sidebar */}
      </div>
    </div>
  );
}

export default App;
