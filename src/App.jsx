import { useState } from "react";
import "./App.css";
import Header from "./components/header";
const VitomApiCall = [
  "about us",
  "contact us",
  "privacy policy",
  "terms of service",
];
function App() {
  return (
    <>
      <Header props={VitomApiCall} />
    </>
  );
}

export default App;
