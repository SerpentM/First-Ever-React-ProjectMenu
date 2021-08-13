import React from "react";
import Card from "./Card";
import Button from "./Button";
import Share from "./Share";

function App() {
  return (
    <div>
      <h1 className="heading">Todays Menu! </h1>
      <Card />
      <Button />
      <h3>Press the button to get a random menu</h3>
      <Share />
    </div>
  );
}

export default App;
