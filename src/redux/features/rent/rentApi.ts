import { baseApi } from "../../api/baseApi";

const rentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getRentals: builder.query({
            query: () => ({
                url: '/rentals',
                method: 'GET',
            }),
            providesTags: ['Rents']
        }),
        createRent: builder.mutation({
            query: (rentInfo) => {
                console.log('from rtk query', rentInfo);
                return {
                    url: '/rentals',
                    method: 'POST',
                    body: rentInfo
                }
            },
            invalidatesTags: ['Rents']
        })
    })
});

export const { useCreateRentMutation, useGetRentalsQuery } = rentApi;