const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8080';

export async function fetchProperties({ signal } = {}) {
  const res = await fetch(`${API_URL}/api/properties`, { signal });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
