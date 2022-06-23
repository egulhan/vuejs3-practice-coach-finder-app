import router from "@/router";

let autoLogoutTimer;

const handleAuthExpiration = (context, expirationTimeInMs) => {
    autoLogoutTimer = setTimeout(() => {
        context.commit('logout');
        router.replace({name: 'coaches'});
    }, expirationTimeInMs);
};

export default {
    setAuthUser(context, payload) {
        context.commit('setAuthUser', payload);
    },
    async authenticate(context, payload) {
        const key = 'AIzaSyCuIzjySXLUd7VyqeouQRbSi3yxUy_skqU';
        let apiURL;

        payload.returnSecureToken = true;

        if (payload.mode === 'login') {
            apiURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`;
        } else {
            apiURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`;
        }

        const response = await fetch(apiURL, {
            method: 'POST',
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const customMessage = payload.mode === 'login' ? 'Failed to login!' : 'Failed to register!';
            throw new Error(response.statusMessage || customMessage);
        }

        const jsonResponse = await response.json();
        const {localId: userId, email, idToken: token, expiresIn} = jsonResponse;
        const expirationTimeInMs = +expiresIn * 1000;
        const expirationDate = new Date().getTime() + expirationTimeInMs;

        const authUserData = {
            userId,
            email,
            token,
            expirationDate,
        };

        context.commit('setAuthUser', authUserData);

        localStorage.setItem('userId', userId);
        localStorage.setItem('email', email);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationTimeInMs', expirationTimeInMs.toString());
        localStorage.setItem('expirationDate', expirationDate.toString());

        handleAuthExpiration(context, expirationTimeInMs);

        return jsonResponse;
    },
    logout(context) {
        context.commit('logout');

        localStorage.removeItem('userId');
        localStorage.removeItem('email');
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTimeInMs');
        localStorage.removeItem('expirationDate');

        clearTimeout(autoLogoutTimer);
    },
    tryAutoLogin(context) {
        const userId = localStorage.getItem('userId');

        if (!userId) {
            return;
        }

        const email = localStorage.getItem('email');
        const token = localStorage.getItem('token');
        const expirationTimeInMs = localStorage.getItem('expirationTimeInMs');
        const expirationDate = localStorage.getItem('expirationDate');

        if (new Date().getTime() - expirationDate > 0) {
            context.commit('logout');
            return router.replace({name: 'coaches'});
        }

        const authUserData = {
            userId,
            email,
            token,
            expirationDate,
        };

        handleAuthExpiration(context, expirationTimeInMs);

        context.commit('setAuthUser', authUserData);
    }
}