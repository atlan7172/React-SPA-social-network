import axios from "axios";

const instance = axios.create({     //Создаем объект, который упрощает синтаксис ввода запросов на сервер
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "8a96a599-ac69-4386-8bca-d0aad439774c"
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow(id) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
    },
    unfollow(id) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get('profile/' + userId)
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put('profile/status', {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    },
    login(email, login, rememberMe = false) {
        return instance.post('auth/login', {email, login, rememberMe})
    },
    logout() {
        return instance.delete('auth/login')
    }
}

