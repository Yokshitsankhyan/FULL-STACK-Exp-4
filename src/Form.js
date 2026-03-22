import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setMessage("Name is required");
    } else {
      setMessage("Submitted successfully");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
      <p>{message}</p>
    </form>
  );
}