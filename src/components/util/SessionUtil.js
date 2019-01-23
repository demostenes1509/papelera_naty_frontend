import { SESSION_INFO, TOKEN_NAME } from 'components/util/ConstantsUtil'

const setNotLoggedIn = () => {
    console.log('SET NOT LOGGED IN');
    localStorage.setItem(SESSION_INFO, JSON.stringify({
        loggedIn: false
    }));
};

const setLoggedIn = (info) => {
    console.log('SET LOGGED IN');
    localStorage.setItem(SESSION_INFO, JSON.stringify({
        loggedIn: true,
        info
    }));
};

const setSessionInfo = (info) => {
    localStorage.setItem(SESSION_INFO, JSON.stringify(info));
};

const getToken = () => {
    const info = JSON.parse(localStorage.getItem(SESSION_INFO));
    return (info?info[TOKEN_NAME]:null);
};

const isLoggedIn = () => {
    const info = JSON.parse(localStorage.getItem(SESSION_INFO));
    return (info?info.isLoggedIn:false);
}

export {
    setNotLoggedIn,
    setLoggedIn,
    isLoggedIn,
    setSessionInfo,
    getToken
}