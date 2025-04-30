import api from './http'
export const evaluateAnswer = (b: any) =>
  api.post('/api/v1/evaluations/evaluate', b).then(r => r.data)
