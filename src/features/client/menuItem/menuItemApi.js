import { apiSlice } from "../../api/apiSlice";

// Inject custom endpoints into the apiSlice
export const menuitemApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Define the 'getMenus' query endpoint
    getMenus: builder.query({
      // Provide the query function to fetch menu data
      query: () => `/menu.json`, // Replace with your actual endpoint URL
    }),
    // You can add more endpoints here if needed
    // For example:
    // createMenuItem: builder.mutation(...)
  }),
});

// Extract the generated hook for 'getMenus' query
export const { useGetMenusQuery } = menuitemApi;
