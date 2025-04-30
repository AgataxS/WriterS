import api from './http'

export const listSessions = () =>
  api.get('/api/v1/sessions').then(r => r.data)

export const createSession = (document_id: number) =>
  api.post('/api/v1/sessions', { document_id }).then(r => r.data)


export const getSessionQuestions = (id: number) =>     
  api.get(`/api/v1/sessions/${id}/questions`).then(r => r.data)

export const generateQuestions = (id: number, num = 5) =>
  api.post(`/api/v1/sessions/${id}/questions`, { num_questions: num })
     .then(r => r.data)
