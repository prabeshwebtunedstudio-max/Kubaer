// src/components/admin/ServicesManager.js
"use client";

import { useEffect, useState } from "react";
import { fetchData, createData, updateData, deleteData } from "@/lib/api";

export default function ServicesManager() {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");

  // Fetch services on mount
  useEffect(() => {
    const loadServices = async () => {
      const data = await fetchData("services");
      setServices(data);
    };
    loadServices();
  }, []);

  // Add service
  const addService = async () => {
    if (!newService) return;
    const saved = await createData("services", { title: newService });
    setServices([...services, saved]);
    setNewService("");
  };

  // Edit service
  const saveEdit = async (id) => {
    const updated = await updateData("services", id, { title: editingTitle });
    setServices(services.map(s => (s.id === id ? updated : s)));
    setEditingId(null);
    setEditingTitle("");
  };

  // Delete service
  const removeService = async (id) => {
    await deleteData("services", id);
    setServices(services.filter(s => s.id !== id));
  };

  return (
    <div>
      <h2>Services</h2>
      <input
        type="text"
        placeholder="New Service"
        value={newService}
        onChange={e => setNewService(e.target.value)}
      />
      <button onClick={addService}>Add</button>

      <ul>
        {services.map(s => (
          <li key={s.id}>
            {editingId === s.id ? (
              <>
                <input value={editingTitle} onChange={e => setEditingTitle(e.target.value)} />
                <button onClick={() => saveEdit(s.id)}>Save</button>
              </>
            ) : (
              <>
                {s.title} <button onClick={() => { setEditingId(s.id); setEditingTitle(s.title); }}>Edit</button>{" "}
                <button onClick={() => removeService(s.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
