import React from "react";
import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    isEmployed: false,
    favoriteColor: "",
    sauces: [],
    bestStooge: "",
    notes: "",
  });

  const colors = [
    "red",
    "orange",
    "yellow",
    "chartreuse",
    "green",
    "cyan",
    "blue",
    "violet",
    "magenta",
    "rose",
  ];

   const handleSubmit = () => {
    console.log("form submitted");
  };

  const handleChange = (e) => {
   setFormData(e.target.value)
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="input first-name">
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          value={formData.firstName}
          onChange={handleChange}
          name="firstName"
          placeholder="first name"
        />
      </div>
      <div className="input last-name">
        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          value={formData.lastName}
          onChange={handleChange}
          name="lastName"
          placeholder="last name"
        />
      </div>
      <div className="input age">
        <label htmlFor="age">Age</label>
        <input
          type="text"
          id="age"
          value={formData.age}
          onChange={handleChange}
          name="age"
          placeholder="age"
        />
      </div>
      <div className="input employment">
        <label htmlFor="is-employed">Employed</label>
        <input
          type="checkbox"
          id="employment"
          value={formData.isEmployed}
          onChange={handleChange}
          name="is-employed"
        />
      </div>
      <div className="input favorite-color">
        <label htmlFor="favorite-color">Favorite Color</label>
        <select name="color-options" id="color-options">
          {colors.map((color, index) => (
            <option value={color} key={index} onChange={handleChange}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <div className="input sauces-choice">
        <label htmlFor="sauces">Sauces</label>
        <div className="sauces-list" id="sauces">
          <input type="checkbox" id="ketchup" value="ketchup" name="ketchup" />
          <label htmlFor="ketchup">Ketchup</label>
          <input type="checkbox" id="mustard" value="mustard" name="mustard" />
          <label htmlFor="mustard">Mustard</label>
          <input
            type="checkbox"
            id="mayonnaise"
            value="mayonnaise"
            name="mayonnaise"
          />
          <label htmlFor="mayonnaise">Mayonnaise</label>
          <input
            type="checkbox"
            id="guacamole"
            value="guacamole"
            name="guacamole"
          />
          <label htmlFor="guacamole">Guacamole</label>
        </div>
      </div>
      <div className="input stooge">
        <label htmlFor="stooge">Best Stooge</label>
        <div className="stooge-list" id="stooge">
          <input type="radio" name="stooge-option" id="larry" />
          <label htmlFor="larry">Larry</label>
          <input type="radio" name="stooge-option" />
          <label htmlFor="moe">Moe</label>
          <input type="radio" name="stooge-option" />
          <label htmlFor="curly">Curly</label>
        </div>
      </div>
      <div className="input notes">
        <textarea
          name="user-notes"
          id="user-notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Write additional notes..."
          cols="100"
        ></textarea>
      </div>
      <div className="form-btns">
        <button type="submit">Submit</button>
        <button type="button">Reset</button>
      </div>
    </form>
  );
}

export default Form;
