// import { apiSlice } from './apiSlice'

// export const userApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     login: builder.mutation({
//       query: (data) => ({
//         url: `/api/v1/users/auth`,
//         method: 'POST',
//         body: data,
//       }),
//     }),
//     register: builder.mutation({
//       query: (data) => ({
//         url: '/api/v1/users/',
//         method: 'POST',
//         body: data,
//       }),
//     }),
//     logoutUser: builder.mutation({
//       query: () => ({
//         url: '/api/v1/users/logout',
//         method: 'POST',
//       }),
//     }),
//     updateUser: builder.mutation({
//       query: (data) => ({
//         url: '/api/v1/users/profile',
//         method: 'PUT',
//         body: data,
//       }),
//     }),
//   }),
// })

// export const {
//   useLoginMutation,
//   useRegisterMutation,
//   useLogoutUserMutation,
//   useUpdateUserMutation,
// } = userApiSlice










// import { apiSlice } from './apiSlice'

// export const userApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     login: builder.mutation({
//       query: (data) => ({
//         // url: `/api/v1/users/auth`,
//         url: `/api/v1/admin/login`,
//         method: 'POST',
//         body: data,
//       }),
//     }),
//     // register: builder.mutation({
//     //   query: (data) => ({
//     //     url: '/api/v1/users/',
//     //     method: 'POST',
//     //     body: data,
//     //   }),
//     // }),
//     logoutUser: builder.mutation({
//       query: () => ({
//         url: '/api/v1/admin/logout',
//         method: 'POST',
//       }),
//     }),
//     // updateUser: builder.mutation({
//     //   query: (data) => ({
//     //     url: '/api/v1/users/profile',
//     //     method: 'PUT',
//     //     body: data,
//     //   }),
//     // }),
//   }),
// })

// export const {
//   useLoginMutation,
//   // useRegisterMutation,
//   useLogoutUserMutation,
//   // useUpdateUserMutation,
// } = userApiSlice


    





// client/src/app/service/userApiSlice.js
// import { apiSlice } from './apiSlice'

// export const userApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     login: builder.mutation({
//       query: (data) => ({
//         url: `/api/v1/admin/login`,
//         method: 'POST',
//         body: data,
//       }),
//     }),
//     signup: builder.mutation({
//       query: (data) => ({
//         url: '/api/v1/admin/signup', // Adjust this URL to match your backend route
//         method: 'POST',
//         body: data,
//       }),
//     }),
//     logoutUser: builder.mutation({
//       query: () => ({
//         url: '/api/v1/admin/logout',
//         method: 'POST',
//       }),
//     }),

//     updateUser: builder.mutation({
//       query: (data) => ({
//         url: '/api/v1/admin/update-password',
//         method: 'PUT',
//         body: data,
//       }),
//     }),

//   }),
// })

// export const {
//   useLoginMutation,
//   useSignupMutation,
//   useLogoutUserMutation,
//   useUpdateUserMutation,
// } = userApiSlice









import { apiSlice } from './apiSlice'

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `/api/v1/users/auth`,
        method: 'POST',
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: '/api/v1/users/',
        method: 'POST',
        body: data,
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: '/api/v1/users/logout',
        method: 'POST',
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: '/api/v1/users/profile',
        method: 'PUT',
        body: data,
      }),
    }),
    createSocialMedia: builder.mutation({
      query: (data) => ({
        url: '/api/v1/config/social',
        method: 'POST',
        body: data,
      }),
    }),
    appName: builder.mutation({
      query: (data) => ({
        url: '/api/v1/config/application/name',
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutUserMutation,
  useUpdateUserMutation,
  useCreateSocialMediaMutation,
  useAppNameMutation,
} = userApiSlice