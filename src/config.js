export const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://react-auth-twitter.herokuapp.com'
	: 'https://localhost:3001';

export const API_URL_STATIC = API_URL + '/static';
	
export const TIMEOUT = 5000;

export const JWT_KEY = '28b001fe-4fae-470e-9d35-fe2a7ad12425';