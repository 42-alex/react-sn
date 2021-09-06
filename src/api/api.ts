import axios from 'axios';
import { LoginDataType } from '../redux/reducers/auth-reducer';
import { ProfileDataType, UserProfileType } from '../redux/reducers/profile-reducer';
import { UserType } from '../redux/reducers/users-reducer';


const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '34ad0048-d0e3-4361-8839-f5809200c7fb'
  }
});

type CommonResponseType = {
  data: {}
  resultCode: number
  messages: Array<string>
};

type GetUsersResponseType = {
  items: Array<UserType>
  totalCount: number
  error: string
};

const usersApi = {
  async getUsers(currentPage = 1, usersOnPage = 3) {
    const response = await axiosInstance
      .get<GetUsersResponseType>(`users?page=${currentPage}&count=${usersOnPage}`)
    return response.data;
  },
  async followUser(userId: number) {
    const response = await axiosInstance
      .post<CommonResponseType>(`follow/${userId}`)
    return response.data;
  },
  async unfollowUser(userId: number) {
    const response = await axiosInstance
      .delete<CommonResponseType>(`follow/${userId}`)
    return response.data;
  },
}

type AuthMeResponseType = {
  data: { id: number, email: string, login: string }
  resultCode: number
  messages: Array<string>
}
type LoginResponseType = {
  data: { userId: number }
  resultCode: number
  messages: Array<string>
}
type GetCaptchaUrlResponseType = {
  url: string
}

const authApi = {
  async authMe() {
    const response = await axiosInstance.get<AuthMeResponseType>('auth/me');
    return response.data;
  },
  async login(loginData: LoginDataType) {
    const response = await axiosInstance.post<LoginResponseType>('auth/login', { ...loginData });
    return response.data;
  },
  async logout() {
    const response = await axiosInstance.delete<CommonResponseType>('auth/login');
    return response.data;
  },
  async getCaptchaUrl() {
    const response = await axiosInstance.get<GetCaptchaUrlResponseType>('security/get-captcha-url');
    return response.data;
  },
}

type GetProfileStatusResponseType = string;
type UpdateAvatarResponseType = {
  data: {
    photos: { small: string, large: string }
  }
  resultCode: number
  messages: Array<string>
}

const profileApi = {
  async getProfile(profileId: number) {
    const response = await axiosInstance.get<UserProfileType>(`profile/${profileId}`);
    return response.data;
  },
  async getProfileStatus(userId: number) {
    const response = await axiosInstance.get<GetProfileStatusResponseType>(`profile/status/${userId}`);
    return response.data;
  },
  async setProfileStatus(statusText: string) {
    const response = await axiosInstance.put<CommonResponseType>(`profile/status`, { status: statusText });
    return response.data;
  },
  async updateAvatar(avatarFile: any) {  // todo: replace with right type
    let data = new FormData();
    data.append('image', avatarFile);
    const response = await axiosInstance.put<UpdateAvatarResponseType>(`profile/photo`, data, {
      headers: {
        'Content-Type': `multipart/form-data`,
      }
    });
    return response.data;
  },
  async setProfileData(profileData: ProfileDataType) {
    const response = await axiosInstance.put<CommonResponseType>(`profile/`, profileData);
    return response.data;
  },
}


export {
  usersApi,
  authApi,
  profileApi,
};