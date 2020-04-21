import {createSelector} from "reselect";

export const getContactsPage = (state) => {
	return state.contactsPage.contactsData;
};
// export const getContactsPageSelector = (state) => {
// 	return getContactsPage(state).filter(c => true);
// };
// export const getContactsPageSuperSelector = createSelector( getContactsPage, (contactsPage) => {

// 	return contactsPage.filter(c => true);
// });
export const getPageSize = (state) => {
	return state.contactsPage.pageSize;
};
export const getTotalContactsCount = (state) => {
	return state.contactsPage.totalContactsCount;
};
export const getCurrentPage = (state) => {
	return state.contactsPage.currentPage;
};
export const getIsFetching = (state) => {
	return state.contactsPage.isFetching;
};
export const getFollowingInProgress = (state) => {
	return state.contactsPage.followingInProgress;	
};
