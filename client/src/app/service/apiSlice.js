// import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

// const baseQuery = fetchBaseQuery({
//   baseUrl: `${import.meta.env.VITE_SERVER_URL}`,
//   credentials: 'include',
// })

// export const apiSlice = createApi({
//   baseQuery,
//   tagTypes: ['Admin'],
//   endpoints: (builder) => ({}),
// })






import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_SERVER_URL}`,
  credentials: 'include',
})

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({}),
})





// import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

// const baseQuery = fetchBaseQuery({
//   baseUrl: `${import.meta.env.VITE_SERVER_URL}`,
//   credentials: 'include',
// })

// export const apiSlice = createApi({
//   baseQuery,
//   tagTypes: ['User', 'Job'],
//   endpoints: (builder) => ({}),
// })