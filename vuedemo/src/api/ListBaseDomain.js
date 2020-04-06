import BASE_INTANSE from './BaseIntanse';

const DOMAIN = {
    LOGIN_USER: async function(params) {
        return await BASE_INTANSE.post('/login', params)
    },
    LOGOUT_USER: async function(token) {
        return await BASE_INTANSE.get('/logout', { headers: { 'x-auth-token': token } })
    },
    REGISTER_USER: async function(params) {
        return await BASE_INTANSE.post('/register', params)
    },
}
export default DOMAIN