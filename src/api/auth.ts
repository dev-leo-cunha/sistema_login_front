import api from "./api";

// requisição para o servidor para fazer login
export const login = async (email: string, password: string) => {
  const payload = await api
    .post("/login", { email, password })
    .then(({ data }) => data)
    .catch(() => ({ status: false }));

  if (!payload.token) return Promise.reject(payload.error);

  return payload;
};

// requisição para o servidor para receber a lista de usuários
// o token é passado no header da requisição para autenticar o usuário
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

export const CheckEmailRegister = async (email: string) => {
  const payload = await api
    .post("/checkemail", { email })
    .then(({ data }) => data)
    .catch(() => ({ status: false }));
  return payload;
};

// requisição para o servidor para registrar um novo usuário
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

// requisição para o servidor para atualizar os dados do usuário
// o token é passado no header da requisição para autenticar o usuário
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
  console.log(payload);
  if (!payload.message) return Promise.reject(payload.error);

  return payload;
};

// requisição para o servidor para receber a lista de usuários ordenada
// o order é passado no body da requisição para informar a ordenação
export const listOrder = async (token: string, order: string) => {
  const payload = await api
    .post(
      "/listOrder",
      { order },
      {
        headers: { authorization: `Bearer ${token}` },
      }
    )
    .then(({ data }) => data)
    .catch(() => ({ status: false }));

  if (!payload.list) return Promise.reject(payload.error);

  return payload;
};
