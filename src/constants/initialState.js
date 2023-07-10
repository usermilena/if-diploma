import { authStatuses } from "./authStatuses";

const dateFrom = new Date();
const dateTo = new Date(Date.now() + 4 * 24 * 60 * 60 * 1000);

export const INITIAL_STATE = {
  auth: {
    status: authStatuses.loggedOut,
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
};
