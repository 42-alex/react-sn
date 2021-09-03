import { AppStateType } from '../store-redux';

export const selectUsers = (state: AppStateType) => state.usersPage.users;
export const selectCurrentPage = (state: AppStateType) => state.usersPage.currentPage;
export const selectTotalUsersCount = (state: AppStateType) => state.usersPage.totalUsersCount;
export const selectUsersOnPage = (state: AppStateType) => state.usersPage.usersOnPage;
export const selectIsFetching = (state: AppStateType) => state.usersPage.isFetching;
export const selectFollowingInProgress = (state: AppStateType) => state.usersPage.followingInProgress;