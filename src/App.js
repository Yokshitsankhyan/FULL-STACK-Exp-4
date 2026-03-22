import React, { useState, useCallback } from "react";
import Button from "./Button";
import Form from "./Form";
import Dashboard from "./Dashboard";
import "./App.css";

export default function App() {
  const [items, setItems] = useState(["Item1", "Item2"]);
  const [loading, setLoading] = useState(false);

  const handleClick = useCallback(() => {
    alert("Button Clicked 🚀");
  }, []);

  const handleAddItem = (newItem) => {
    if (!newItem) return;
    setItems((prev) => [...prev, newItem]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          🚀 Exp 4 Testing Dashboard
        </h1>

        {/* Button Section */}
        <div className="bg-white shadow-md rounded-2xl p-5">
          <h2 className="text-lg font-semibold mb-3">Button Component</h2>
          <Button onClick={handleClick} />
        </div>

        {/* Form Section */}
        <div className="bg-white shadow-md rounded-2xl p-5">
          <h2 className="text-lg font-semibold mb-3">Form Component</h2>
          <Form onSubmit={handleAddItem} />
        </div>

        {/* Dashboard Section */}
        <div className="bg-white shadow-md rounded-2xl p-5">
          <h2 className="text-lg font-semibold mb-3">Dashboard</h2>
          <Dashboard loading={loading} data={items} />
        </div>
      </div>
    </div>
  );
}
