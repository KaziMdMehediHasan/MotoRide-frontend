import { baseApi } from "../../api/baseApi";

const rentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getRentals: builder.query({
            query: () => ({
                url: '/rentals',
                method: 'GET',
            }),
            providesTags: ['Rents', 'Bikes']
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
            invalidatesTags: ['Rents', 'Bikes']
        }),
        bikeReturn: builder.mutation({
            query: (returnInfo) => {
                console.log('from rtk query', returnInfo);
                // console.log('backend hitting link:', `/rentals/${returnInfo.rentalId}/return`);
                return {
                    url: `/rentals/${returnInfo.rentalId}/return`,
                    method: 'PUT',
                    body: returnInfo
                }
            },
            invalidatesTags: ['Rents', 'Bikes']
        })
    }),
    overrideExisting: true,
});

export const { useCreateRentMutation, useGetRentalsQuery, useBikeReturnMutation } = rentApi;