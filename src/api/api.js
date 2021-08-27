import axios from 'axios';


const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '34ad0048-d0e3-4361-8839-f5809200c7fb'
  }
});


const usersApi = {
  getUsers(currentPage = 1, usersOnPage = 3) {
    return axiosInstance
      .get(`users?page=${currentPage}&count=${usersOnPage}`)
  },
  followUser(userId) {
    return axiosInstance
      .post(`follow/${userId}`)
  },
  unfollowUser(userId) {
    return axiosInstance
      .delete(`follow/${userId}`)
  },
}

const authApi = {
  authMe() {
    return axiosInstance.get('auth/me');
  },
  login(loginData) {
    return axiosInstance.post('auth/login', { ...loginData });
  },
  logout() {
    return axiosInstance.delete('auth/login');
  },
  getCaptchaUrl() {
    return axiosInstance.get('security/get-captcha-url');
  },
}

const profileApi = {
  getProfile(profileId) {
    return axiosInstance.get(`profile/${profileId}`);
  },
  getProfileStatus(userId) {
    return axiosInstance.get(`profile/status/${userId}`);
  },
  setProfileStatus(statusText) {
    return axiosInstance.put(`profile/status`, { status: statusText });
  },
  updateAvatar(avatarFile) {
    let data = new FormData();
    data.append('image', avatarFile);
    return axiosInstance.put(`profile/photo`, data, {
      headers: {
        'Content-Type': `multipart/form-data`,
      }
    });
  },
  setProfileData(profileData) {
    return axiosInstance.put(`profile/`, profileData);
  },
}


export {
  usersApi,
  authApi,
  profileApi,
};