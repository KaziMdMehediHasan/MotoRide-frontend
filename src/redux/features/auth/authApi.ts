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
        }),
        getAllUsers: builder.query({
            query: () => ({
                url: '/users',
                method: 'GET',
            }),
            providesTags: ['User']
        }),
        makeAdmin: builder.mutation({
            query: (userId) => ({
                url: `/users/${userId}`,
                method: 'PUT',
            }),
            invalidatesTags: ['User']
        }),
        deleteUser: builder.mutation({
            query: (userId) => {
                console.log('getting the userId in rtk query:', userId);
                return {
                    url: `/users/${userId}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ['User']
        }),
    })
})

export const {
    useLoginMutation,
    useSignupMutation,
    useGetUserDetailsQuery,
    useUpdateUserDetailsMutation,
    useGetAllUsersQuery,
    useDeleteUserMutation,
    useMakeAdminMutation
} = authApi;