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
        }),
        updateBikeData: builder.mutation({
            query: ({ bikeInfo, bikeId }) => {
                console.log('from update mutation', bikeInfo);
                // const formData = new FormData();
                // forming the data structure based on the received data
                // for (const key in bikeInfo) {
                //     // console.log(bikeInfo[key]);
                //     if (bikeInfo[key] instanceof File) {
                //         formData.append(key, bikeInfo[key]);
                //     } else {
                //         formData.append(key, bikeInfo[key].toString());
                //     }
                // }
                // for (const key in bikeInfo) {
                //     // eslint-disable-next-line no-prototype-builtins
                //     if (bikeInfo.hasOwnProperty(key)) {
                //         if (bikeInfo[key] instanceof File) {
                //             // If it's a file, append as is
                //             formData.append(key, bikeInfo[key]);
                //         } else {
                //             // Otherwise, convert to string and append
                //             formData.append(key, bikeInfo[key].toString());
                //         }
                //     }
                // }
                // console.log('form data from rtk mutation', formData);
                return {
                    url: `/bikes/${bikeId}`,
                    method: 'PUT',
                    body: bikeInfo,
                }
            },
            invalidatesTags: ['User'],
        })
    })
})

export const { useGetBikesQuery, useGetSingleBikeQuery, useUpdateBikeDataMutation } = bikeApi;