// import { apiSlice } from './apiSlice'

// export const jobsApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     getAllJobs: builder.query({
//       query: () => ({
//         url: `/api/v1/jobs`,
//         method: 'GET',
//       }),
//     }),
//     getJob: builder.query({
//       query: (id) => ({
//         url: `/api/v1/jobs/${id}`,
//         method: 'GET',
//       }),
//     }),
//     postJob: builder.mutation({
//       query: (data) => ({
//         url: '/api/v1/jobs',
//         method: 'POST',
//         body: data,
//       }),
//     }),
//     updateJob: builder.mutation({
//       query: (args) => ({
//         url: `/api/v1/jobs/${args.id}`,
//         method: 'PUT',
//         body: args.data,
//       }),
//     }),
//   }),
// })

// export const { useGetAllJobsQuery, useGetJobQuery, usePostJobMutation, useUpdateJobMutation } =
//   jobsApiSlice
