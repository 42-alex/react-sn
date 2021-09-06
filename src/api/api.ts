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
  getUsers(currentPage = 1, usersOnPage = 3) {
    return axiosInstance
      .get<GetUsersResponseType>(`users?page=${currentPage}&count=${usersOnPage}`)
  },
  followUser(userId: number) {
    return axiosInstance
      .post<CommonResponseType>(`follow/${userId}`)
  },
  unfollowUser(userId: number) {
    return axiosInstance
      .delete<CommonResponseType>(`follow/${userId}`)
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
  authMe() {
    return axiosInstance.get<AuthMeResponseType>('auth/me');
  },
  login(loginData: LoginDataType) {
    return axiosInstance.post<LoginResponseType>('auth/login', { ...loginData });
  },
  logout() {
    return axiosInstance.delete<CommonResponseType>('auth/login');
  },
  getCaptchaUrl() {
    return axiosInstance.get<GetCaptchaUrlResponseType>('security/get-captcha-url');
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
  getProfile(profileId: number) {
    return axiosInstance.get<UserProfileType>(`profile/${profileId}`);
  },
  getProfileStatus(userId: number) {
    return axiosInstance.get<GetProfileStatusResponseType>(`profile/status/${userId}`);
  },
  setProfileStatus(statusText: string) {
    return axiosInstance.put<CommonResponseType>(`profile/status`, { status: statusText });
  },
  updateAvatar(avatarFile: any) {  // todo: replace with right type
    let data = new FormData();
    data.append('image', avatarFile);
    return axiosInstance.put<UpdateAvatarResponseType>(`profile/photo`, data, {
      headers: {
        'Content-Type': `multipart/form-data`,
      }
    });
  },
  setProfileData(profileData: ProfileDataType) {
    return axiosInstance.put<CommonResponseType>(`profile/`, profileData);
  },
}


export {
  usersApi,
  authApi,
  profileApi,
};