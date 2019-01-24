import { SESSION_INFO } from 'components/util/ConstantsUtil'

const setToken = (token) => {
    localStorage.setItem(SESSION_INFO, token);
};

const getToken = () => {
    return localStorage.getItem(SESSION_INFO);
};

export {
		setToken,
		getToken
}