"use client";

import { useState } from "react";

export default function AboutManager() {
  const [services, setAbout] = useState([
    { id: 1, title: "Home Loan" },
    { id: 2, title: "Business Loan" },
  ]);
  const [newAbout, setNewAbout] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");

  // Add service
  const addAbout = () => {
    if (!newService) return;
    setAbout([...services, { id: Date.now(), title: newAbout }]);
    setNewService("");
  };

  // Delete service
  const deleteAbout = (id) => {
    setAbout(services.filter((s) => s.id !== id));
  };

  // Edit service
  const editAbout = (id, title) => {
    setEditingId(id);
    setEditingTitle(title);
  };

  const saveEdit = (id) => {
    setAbout(
      services.map((s) => (s.id === id ? { ...s, title: editingTitle } : s))
    );
    setEditingId(null);
    setEditingTitle("");
  };

  return (
    <div>
      <h2>About</h2>
      <input
        type="text"
        placeholder="New About"
        value={newService}
        onChange={(e) => setNewAbout(e.target.value)}
      />
      <button onClick={addAbout}>Add</button>

      <ul>
        {about.map((s) => (
          <li key={s.id}>
            {editingId === s.id ? (
              <>
                <input
                  value={editingTitle}
                  onChange={(e) => setEditingTitle(e.target.value)}
                />
                <button onClick={() => saveEdit(s.id)}>Save</button>
              </>
            ) : (
              <>
                {s.title}{" "}
                <button onClick={() => editAbout(s.id, s.title)}>Edit</button>{" "}
                <button onClick={() => deleteAbout(s.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
