/* eslint-disable no-unused-vars */
// Disable eslint warning for unused variables, as this file contains template code

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create an API slice using Redux Toolkit's createApi function
export const apiSlice = createApi({
  // Define a unique name for the reducer path
  reducerPath: "api",

  // Create a baseQuery using fetchBaseQuery and set the base URL for requests
  baseQuery: fetchBaseQuery({
    baseUrl: "./data", // Replace with your actual base URL
  }),

  // Define endpoints for your API
  endpoints: (builder) => ({
    // You can define various endpoints here using the builder syntax
    // For example:
    // myEndpoint: builder.query(...),
    // anotherEndpoint: builder.mutation(...),
  }),
});
