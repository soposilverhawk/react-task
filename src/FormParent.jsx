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

  const [submittedData, setSubmittedData] = useState(null);

  const [isSbumitted, setIsSubmitted] = useState(false);

  const clearFormData = () => {
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
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setIsSubmitted(true);
    clearFormData();
    console.log(submittedData)
  };

  const handleFormReset = () => {
    clearFormData();
    setIsSubmitted(false);
  };

  return (
    <div className="form-parent">
      <Form
        formData={formData}
        setFormData={setFormData}
        submittedData={submittedData}
        handleFormSubmit={handleFormSubmit}
        handleFormReset={handleFormReset}
        optionColors={colors}
      />
      {isSbumitted && <UserInfoDisplay submittedData={submittedData} />}
    </div>
  );
}

export default FormParent;
