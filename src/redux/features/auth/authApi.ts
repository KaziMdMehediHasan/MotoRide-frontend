import { Data } from "../../../utils/Types";
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
            query: (registrationData) => ({
                url: '/auth/signup',
                method: 'POST',
                body: registrationData
            })
        }),
        getUserDetails: builder.query<Data, unknown>({
            query: () => ({
                url: '/users/me',
                method: 'GET',
            }),
            providesTags: ['User'],
        }),
        updateUserDetails: builder.mutation({
            query: (userInfo) => ({
                url: '/users/me',
                method: 'PUT',
                body: userInfo,
            }),
            invalidatesTags: ['User'],
        })
    })
})

export const { useLoginMutation, useSignupMutation, useGetUserDetailsQuery, useUpdateUserDetailsMutation } = authApi;