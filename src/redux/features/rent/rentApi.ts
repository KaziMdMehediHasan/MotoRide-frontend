import { baseApi } from "../../api/baseApi";

const rentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllRentals: builder.query({
            query: () => ({
                url: '/rentals/all',
                method: 'GET',
            }),
            providesTags: ['Rents']
        }),
        getRentals: builder.query({
            query: () => ({
                url: '/rentals',
                method: 'GET',
            }),
            providesTags: ['Rents', 'Bikes']
        }),
        deleteRental: builder.mutation({
            query: (rentalId) => ({
                url: `/rentals/${rentalId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Rents']
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
        returnBikeByAdmin: builder.mutation({
            query: (returnInfo) => {
                console.log('from rtk query', returnInfo)
                return {
                    url: `rentals/${returnInfo.rentalId}/admin/return`,
                    method: 'PUT',
                    body: returnInfo
                }
            },
            invalidatesTags: ['Rents']
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

export const {
    useCreateRentMutation,
    useGetRentalsQuery,
    useGetAllRentalsQuery,
    useBikeReturnMutation,
    useDeleteRentalMutation,
    useReturnBikeByAdminMutation
} = rentApi;