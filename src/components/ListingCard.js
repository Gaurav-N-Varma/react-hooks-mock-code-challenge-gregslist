import React, { useState } from "react";

function ListingCard({ thing, deleteThing }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  function handleDeleteClick() {
    // delete this from the backend
    fetch(`http://localhost:6001/listings/${thing.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((r) => r.json())
      .then((d) => d)
      .catch((e) => console.log(e));

    // update the things state  
    deleteThing(thing)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={thing.image} alt={"description"} />
      </div>
      <div className="details">
        {isClicked ? (
          <button
            onClick={handleClick}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">
            ☆
          </button>
        )}
        <strong>{thing.description}</strong>
        <span> · {thing.location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
