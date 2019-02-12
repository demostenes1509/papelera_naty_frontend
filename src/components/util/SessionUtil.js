import { SESSION_INFO } from 'components/util/ConstantsUtil'
import jwt from 'jsonwebtoken';
import { JWT_KEY } from 'config';
import axios from 'axios';

const setToken = (token) => {
    localStorage.setItem(SESSION_INFO, token);
};

const getToken = () => {
    return localStorage.getItem(SESSION_INFO);
};

const clearToken = () => {
    return localStorage.removeItem(SESSION_INFO);
};

const setAxiosAuthToken = token => {
    if(token) {
        axios.defaults.headers.common['Authorization'] = token;
    }
    else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

const raiseTokenAction = (token,loggedIn, notLoggedIn) => {
	setAxiosAuthToken(token);
	if(token) {
		const payload = jwt.verify(token,JWT_KEY);
		loggedIn(payload);
	}
	else {
		notLoggedIn();
	}
}

export {
		setToken,
		getToken,
		clearToken,
		setAxiosAuthToken,
		raiseTokenAction
}