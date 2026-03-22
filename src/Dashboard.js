import React from "react";

export default function Dashboard({ loading, data }) {
  if (loading) return <p>Loading...</p>;
  if (!data.length) return <p>No Data</p>;

  return (
    <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
      {data.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>

    
  );
}