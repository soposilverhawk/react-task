import React from "react";
import { useState } from "react";

function Form({ formData, setFormData, handleFormSubmit, handleFormReset }) {
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => {
      if (type === "checkbox" && name === "isEmployed") {
        return { ...prev, [name]: checked };
      }

      if (type === "checkbox") {
        const updatedSauces = checked
          ? [...prev.sauces, value]
          : prev.sauces.filter((sauce) => sauce !== value);

        return { ...prev, sauces: updatedSauces };
      }

      if (type === "radio") {
        return { ...prev, [name]: value };
      }

      return { ...prev, [name]: value };
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
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
        <label htmlFor="isEmployed">Employed</label>
        <input
          type="checkbox"
          id="employment"
          checked={formData.isEmployed}
          onChange={handleChange}
          name="isEmployed"
        />
      </div>
      <div className="input favorite-color">
        <label htmlFor="favoriteColor">Favorite Color</label>
        <select
          name="favoriteColor"
          id="favoriteColor"
          value={formData.favoriteColor}
          onChange={handleChange}
        >
          {colors.map((color, index) => (
            <option value={color} key={index}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <div className="input sauces-choice">
        <label htmlFor="sauces">Sauces</label>
        <div className="sauces-list" id="sauces">
          <input
            type="checkbox"
            id="ketchup"
            value="ketchup"
            name="ketchup"
            onChange={handleChange}
            checked={formData.sauces.includes("ketchup")}
          />
          <label htmlFor="ketchup">Ketchup</label>
          <input
            type="checkbox"
            id="mustard"
            value="mustard"
            name="mustard"
            onChange={handleChange}
            checked={formData.sauces.includes("mustard")}
          />
          <label htmlFor="mustard">Mustard</label>
          <input
            type="checkbox"
            id="mayonnaise"
            value="mayonnaise"
            name="mayonnaise"
            onChange={handleChange}
            checked={formData.sauces.includes("mayonnaise")}
          />
          <label htmlFor="mayonnaise">Mayonnaise</label>
          <input
            type="checkbox"
            id="guacamole"
            value="guacamole"
            name="guacamole"
            onChange={handleChange}
            checked={formData.sauces.includes("guacamole")}
          />
          <label htmlFor="guacamole">Guacamole</label>
        </div>
      </div>
      <div className="input stooge">
        <label htmlFor="stooge">Best Stooge</label>
        <div className="stooge-list" id="stooge">
          <input
            type="radio"
            name="bestStooge"
            id="larry"
            value="Larry"
            onChange={handleChange}
            checked={formData.bestStooge === "Larry"}
          />
          <label htmlFor="larry">Larry</label>
          <input
            type="radio"
            name="bestStooge"
            value="Moe"
            onChange={handleChange}
            checked={formData.bestStooge === "Moe"}
          />
          <label htmlFor="moe">Moe</label>
          <input
            type="radio"
            name="bestStooge"
            value="Curly"
            onChange={handleChange}
            checked={formData.bestStooge === "Curly"}
          />
          <label htmlFor="curly">Curly</label>
        </div>
      </div>
      <div className="input notes">
        <textarea
          name="notes"
          id="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Write additional notes..."
          cols="100"
        ></textarea>
      </div>
      <div className="form-btns">
        <button type="submit">Submit</button>
        <button type="button" onClick={handleFormReset}>Reset</button>
      </div>
    </form>
  );
}

export default Form;
