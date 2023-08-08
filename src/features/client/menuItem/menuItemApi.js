import { apiSlice } from "../../api/apiSlice";

export const menuitemApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMenus: builder.query({
      query: () => `/menu.json`,
    }),
  }),
});

export const { useGetMenusQuery } = menuitemApi;
