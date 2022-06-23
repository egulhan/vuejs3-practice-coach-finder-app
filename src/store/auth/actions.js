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

        const authUserData = {
            userId,
            email,
            token,
            expiresIn,
        };

        context.commit('setAuthUser', authUserData);

        localStorage.setItem('userId', userId);
        localStorage.setItem('email', email);
        localStorage.setItem('token', token);
        localStorage.setItem('expiresIn', expiresIn);

        return jsonResponse;
    },
    logout(context) {
        context.commit('logout');

        localStorage.removeItem('userId');
        localStorage.removeItem('email');
        localStorage.removeItem('token');
        localStorage.removeItem('expiresIn');
    },
    tryAutoLogin(context) {
        const userId = localStorage.getItem('userId');
        const email = localStorage.getItem('email');
        const token = localStorage.getItem('token');
        const expiresIn = localStorage.getItem('expiresIn');

        if (!userId) {
            return;
        }

        const authUserData = {
            userId,
            email,
            token,
            expiresIn,
        };

        context.commit('setAuthUser', authUserData);
    }
}