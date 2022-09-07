import React from "react";

export default function CatList({ catPics = [] }) {

  return (
    <div>
      {catPics.map((pic) => (
        <img key={pic.id} src={pic.url} alt="cat" />
      ))}
    </div>
  );
}