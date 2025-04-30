import api from './http'
export const loginApi    = (e: string, p: string) =>
  api.post('/api/v1/auth/login', new URLSearchParams({ username: e, password: p })).then(r => r.data)
export const registerApi = (e: string, p: string) =>
  api.post('/api/v1/auth/register', { email: e, password: p }).then(r => r.data)
