import React from "react";
import { useState } from "react";
import UserInfoDisplay from "./UserInfoDisplay";
import Form from "./Form";

function FormParent() {
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

  const [isSbumitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  return (
    <div>
      <Form
        formData={formData}
        setFormData={setFormData}
        handleFormSubmit={handleFormSubmit}
      />
      {isSbumitted && <UserInfoDisplay formData={formData} />}
    </div>
  );
}

export default FormParent;
