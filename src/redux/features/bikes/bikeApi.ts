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
        getSingleBike: builder.query<TBike, string>({
            query: (id) => ({
                url: `/bikes/${id}`,
                method: 'GET',
            }),
        })
    })
})

export const { useGetBikesQuery, useGetSingleBikeQuery } = bikeApi;