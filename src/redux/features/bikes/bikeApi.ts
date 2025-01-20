import { baseApi } from "../../api/baseApi";

const bikeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getBikes: builder.query({
            query: (filter) => {
                console.log(filter);
                // logic to handle multiple query filters in a single endpoint
                const queryParams = [];
                for (const key in filter) {
                    const value = filter[key];
                    if (value != null && value !== '') {
                        queryParams.push(
                            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
                        );
                    }
                }
                let urlRoute = '/bikes';
                if (queryParams.length > 0) {
                    urlRoute += `?${queryParams.join('&')}`;
                }
                console.log(urlRoute);
                return {
                    url: urlRoute,
                    method: 'GET',
                };
            },
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
            query: (bikeInfo) => {
                // checking the form data
                // for (const key in bikeInfo) {
                //     console.log('form data key-value pair in mutation:', key, bikeInfo[key]);
                // }

                // console.log('received mutation body:', bikeInfo);
                console.log('Form Data from rtk mutation:', [...bikeInfo.entries()]);
                return {
                    url: '/bikes/',
                    method: 'POST',
                    body: bikeInfo
                };

            },
            invalidatesTags: ['Bikes']
        }),
        updateBikeData: builder.mutation({
            query: ({ bikeInfo, bikeId }) => {
                console.log('from update mutation', bikeInfo);
                return {
                    url: `/bikes/${bikeId}`,
                    method: 'PUT',
                    body: bikeInfo,
                };
            },
            invalidatesTags: ['Bikes'],
        }),
        deleteBike: builder.mutation({
            query: (bikeId) => {
                return {
                    url: `/bikes/${bikeId}`,
                    method: 'DELETE',
                };
            },
            invalidatesTags: ['Bikes']
        })
    }),
    overrideExisting: true,
});

export const { useGetBikesQuery, useGetSingleBikeQuery, useUpdateBikeDataMutation, useDeleteBikeMutation, useCreateBikeMutation } = bikeApi;