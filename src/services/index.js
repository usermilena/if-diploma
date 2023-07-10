import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { hotelsUrl } from "../constants/urls";

export const hotels = createApi({
  reducerPath: "hotelsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: hotelsUrl,
  }),
  endpoints: (builder) => ({
    getHotels: builder.mutation({
      query: (data) => ({
        url: `/?search=${
          data.destination
        }&dateFrom=${data.dateFrom.getTime()}&dateTo=${data.dateTo.getTime()}&adults=${
          data.adults
        }&children=${data.children}&rooms=${data.rooms}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetHotelsMutation } = hotels;
