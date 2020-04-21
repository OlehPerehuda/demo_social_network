import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "a49eb78a-5dac-498a-9e8c-ade469471a92"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    followPost(userId) {
        return instance.post(`follow/${userId}`)
        .then(response => response.data);
    },
    unFollowDelete(userId) {
        return instance.delete(`follow/${userId}`)
        .then(response => response.data)
    }
};

export const authAPI = {
    authMeGet() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logOut() {
        return instance.delete(`auth/login`);
    }
};

export const profileAPI = {
    getProfile(contactId) {
        return instance.get(`profile/${contactId}`);
    },
    getStatus(contactId) {
        return instance.get(`profile/status/${contactId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile);
    }    
};

