import { baseApi } from "../../api/baseApi";

const paymentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createPayment: builder.mutation({
            query: (amount) => {
                console.log('sent payment amount to rtk function:', amount);
                return {
                    url: '/payment/advance-payment',
                    method: 'POST',
                    body: amount
                }

            }
        }),
    })
});

export const { useCreatePaymentMutation } = paymentApi;