// src/lib/api.js
export const fetchData = async (endpoint) => {
  const res = await fetch(`/api/${endpoint}`);
  return res.json();
};

export const createData = async (endpoint, data) => {
  const res = await fetch(`/api/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updateData = async (endpoint, id, data) => {
  const res = await fetch(`/api/${endpoint}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteData = async (endpoint, id) => {
  const res = await fetch(`/api/${endpoint}/${id}`, { method: "DELETE" });
  return res.json();
};
