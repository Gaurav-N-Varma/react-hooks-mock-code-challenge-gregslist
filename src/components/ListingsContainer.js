import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ things, deleteThing }) {
  return (
    <main>
      <ul className="cards">
        {things.map((thing) => {
          return (
            <ListingCard
              key={thing.description}
              thing={thing}
              deleteThing={deleteThing}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
