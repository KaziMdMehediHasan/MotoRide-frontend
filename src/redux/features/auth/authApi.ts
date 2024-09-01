import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo) => ({
                url: '/auth/login',
                method: 'POST',
                body: userInfo
            })
        }),
        signup: builder.mutation({
            query: (userInfo) => ({
                url: '/auth/signup',
                method: 'POST',
                body: userInfo
            })
        }),
        getUserDetails: builder.query({
            query: () => ({
                url: '/users/me',
                method: 'GET',
                providedTags: ['TUpdatedUser']
            })
        }),
        updateUserDetails: builder.mutation({
            query: (userInfo) => ({
                url: '/users/me',
                method: 'PUT',
                body: userInfo,
            }),
        })
    })
})

export const { useLoginMutation, useSignupMutation, useGetUserDetailsQuery, useUpdateUserDetailsMutation } = authApi;