import api from "./api";

export const login = async (email: string, password: string) => {
  const payload = await api
    .post("/login", { email, password })
    .then(({ data }) => data)
    .catch(() => ({ status: false }));

  if (!payload.token) return Promise.reject(payload.error);

  return payload;
};

export const access = async (token: string) => {
  const payload = await api
    .post(
      "/access",
      {},
      {
        headers: { authorization: `Bearer ${token}` },
      }
    )
    .then(({ data }) => data)
    .catch(() => ({ status: false }));

  if (!payload.list) return Promise.reject(payload.error);

  return payload;
};

export const register = async (
  email: string,
  password: string,
  passwordRepeat: string,
  fullName: string
) => {
  const payload = await api
    .post("/register", { email, password, passwordRepeat, fullName })
    .then(({ data }) => data)
    .catch(() => ({ status: false }));

  if (!payload.token) return Promise.reject(payload.error);

  return payload;
};

export const update = async (
  newName: string,
  newPassword: string,
  password: string,
  token: string
) => {
  const payload = await api
    .put(
      "/update",
      { newName, newPassword, password },
      {
        headers: { authorization: `Bearer ${token}` },
      }
    )
    .then(({ data }) => data)
    .catch(() => ({ status: false }));
    console.log(payload)
  if (!payload.message) return Promise.reject(payload.error);
      
  return payload;
};
