import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'api-key': '9f0fedce-e20e-486e-ab6e-f6f15c689a4d'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`, {}).then(response => response.data);
    },
    getProfile(userId) {
        console.warn('Obsolete method');
        return profileAPI.getProfile(userId);
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => response.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status }).then(response => response.data);
    }
};

export const authAPI = {
    me() {
        return instance.get('auth/me').then(response => response.data);
    }
}
