import api from './http'
export const listDocuments  = () => api.get('/api/v1/documents').then(r => r.data)
export const createDocument = (d: any) => api.post('/api/v1/documents', d).then(r => r.data)
