import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const articleApiHeader = {};

const baseUrl = '';

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => `test/${params}`,
    }),
  }),
});
