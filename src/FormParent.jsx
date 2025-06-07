import React from "react";
import { useState } from "react";
import UserInfoDisplay from "./UserInfoDisplay";
import Form from "./Form";

function FormParent() {
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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    isEmployed: false,
    favoriteColor: colors[0] || "",
    sauces: [],
    bestStooge: "",
    notes: "",
  });

  const [isSbumitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleFormReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      age: "",
      isEmployed: false,
      favoriteColor: "red",
      sauces: [],
      bestStooge: "",
      notes: "",
    });

    setIsSubmitted(false);
  };

  return (
    <div className="form-parent">
      <Form
        formData={formData}
        setFormData={setFormData}
        handleFormSubmit={handleFormSubmit}
        handleFormReset={handleFormReset}
        optionColors={colors}
      />
      {isSbumitted && <UserInfoDisplay formData={formData} />}
    </div>
  );
}

export default FormParent;
