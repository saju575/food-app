import { apiSlice } from "../../api/apiSlice";

export const reviewApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => `/reviews.json`,
    }),
  }),
});

export const { useGetReviewsQuery } = reviewApi;
