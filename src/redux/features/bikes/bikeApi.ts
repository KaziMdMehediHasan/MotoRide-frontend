import { baseApi } from "../../api/baseApi";

const bikeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getBikes: builder.query({
            query: () => ({
                url: '/bikes/',
                method: 'GET',
            }),
            providesTags: ['Bikes']
        }),
        getSingleBike: builder.query({
            query: (id) => ({
                url: `/bikes/${id}`,
                method: 'GET',
            }),
            providesTags: ['Bikes']
        }),
        createBike: builder.mutation({
            query: (bikeInfo) => ({
                url: '/bikes',
                method: 'POST',
                body: bikeInfo
            }),
            invalidatesTags: ['Bikes']
        }),
        updateBikeData: builder.mutation({
            query: ({ bikeInfo, bikeId }) => {
                console.log('from update mutation', bikeInfo);
                return {
                    url: `/bikes/${bikeId}`,
                    method: 'PUT',
                    body: bikeInfo,
                }
            },
            invalidatesTags: ['Bikes'],
        }),
        deleteBike: builder.mutation({
            query: (bikeId) => {
                return {
                    url: `/bikes/${bikeId}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ['Bikes']
        })
    })
})

export const { useGetBikesQuery, useGetSingleBikeQuery, useUpdateBikeDataMutation, useDeleteBikeMutation, useCreateBikeMutation } = bikeApi;