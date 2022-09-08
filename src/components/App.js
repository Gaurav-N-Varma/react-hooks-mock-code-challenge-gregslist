import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import React, { useState, useEffect } from "react";

function App() {
  const [things, setThings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((d) => setThings(d))
      .catch((e) => console.log(e));
  }, []);

  function deleteThing(thing) {
    setThings((old) => {
      return old.filter((th) => th !== thing);
    });
  }

  const displayThings = things.filter((thing) => {
    return thing.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="app">
      <Header setSearchTerm={setSearchTerm} />
      <ListingsContainer things={displayThings} deleteThing={deleteThing} />
    </div>
  );
}

export default App;
