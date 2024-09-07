import { TBike } from "../../../utils/Types";
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
        })
    })
})

export const { useGetBikesQuery, useGetSingleBikeQuery, useUpdateBikeDataMutation } = bikeApi;