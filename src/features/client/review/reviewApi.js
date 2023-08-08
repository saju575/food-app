import { apiSlice } from "../../api/apiSlice";

// Inject custom endpoints into the apiSlice for the review API
export const reviewApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Define the 'getReviews' query endpoint
    getReviews: builder.query({
      // Provide the query function to fetch review data
      query: () => `/reviews.json`, // Replace with your actual endpoint URL
    }),
    // You can add more endpoints here if needed
    // For example:
    // createReview: builder.mutation(...)
  }),
});

// Extract the generated hook for 'getReviews' query
export const { useGetReviewsQuery } = reviewApi;
