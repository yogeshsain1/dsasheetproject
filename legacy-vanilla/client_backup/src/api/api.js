import axios from 'axios'

const baseURL = import.meta.env.VITE_API_BASE_URL || '/api'
const api = axios.create({ baseURL })

export const getStoredUser = () => {
	try { return JSON.parse(localStorage.getItem('dsa_user') || 'null') } catch { return null }
}
export const setSession = ({ token, user }) => {
	localStorage.setItem('dsa_token', token)
	localStorage.setItem('dsa_user', JSON.stringify(user))
}
export const clearSession = () => {
	localStorage.removeItem('dsa_token')
	localStorage.removeItem('dsa_user')
}

api.interceptors.request.use(config => {
	const token = localStorage.getItem('dsa_token')
	if (token) config.headers.Authorization = `Bearer ${token}`
	return config
})

export const register = (data)       => api.post('/auth/register', data)
export const login = (data)          => api.post('/auth/login', data)
export const getProgress   = ()           => api.get('/progress')
export const toggleProblem = (id, type)   => api.post('/progress/toggle', { id, type })
export const toggleStar    = (id)         => api.post('/progress/star', { id })
export const resetProgress = ()           => api.delete('/progress/reset')
export const getStats      = ()           => api.get('/progress/stats')
export const getAnalytics  = ()           => api.get('/progress/analytics')
export const getNotes      = (id)         => api.get(`/progress/notes/${id}`)
export const saveNotes     = (id, data)   => api.post(`/progress/notes/${id}`, data)
export const importBackup  = (data)       => api.post('/progress/import', data)
export const reviewProblem = (id)         => api.post('/progress/srs/review', { id })
