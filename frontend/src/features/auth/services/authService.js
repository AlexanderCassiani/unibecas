const BASE_URL = "http://192.168.1.56:3000/api";

// registrar usuario
export async function signup(usuario, email, password) {
  const response = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ usuario, email, password }),
  });

  const data = await response.json();
  console.log(data);

  if (!response.ok) {
    throw new Error(data.error.message);
  }

  return data;
}

export async function login(email, password) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error.message);
  }

  localStorage.setItem("token", data.token);

  return data;
}

export async function perfil() {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("No se encontró el token");
  }

  const response = await fetch(`${BASE_URL}/perfil`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error.message);
  }

  return data;
}
