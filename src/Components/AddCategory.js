import React, { useState } from "react";
import PropTypes from "prop-types";
export const AddCategory = ({ setCategories }) => {
  const [inputValue, SetInputValue] = useState("");

  const handleInputChange = (e) => {
    SetInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("submit hecho");
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      SetInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.protoType = {
  setCategories: PropTypes.func.isRequired,
};
