const dateFrom = new Date();
const dateTo = new Date(Date.now() + 4 * 24 * 60 * 60 * 1000);

export const INITIAL_STATE = {
  auth: {
    user: null,
  },
  books: {
    all: [],
  },
  hotels: {
    destination: null,
    dateFrom: dateFrom,
    dateTo: dateTo,
    adults: 1,
    children: 0,
    rooms: 1,
    hotels: [],
  },
  modals: {
    isSignUpOpen: false,
    isAccountModalOpen: false,
  },
};
