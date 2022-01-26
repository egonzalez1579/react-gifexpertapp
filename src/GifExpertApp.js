import React, { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setcategories] = useState(["Goku"]);

  // const handleAdd = () => {
  //   setcategories([...categories, "HunterXHunter"]);
  // setCategories( cats => [...cats, 'HunterXHunter']);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setcategories}></AddCategory>
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
