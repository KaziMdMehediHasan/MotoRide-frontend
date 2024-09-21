const ConfirmationScreen = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="bg-white rounded-lg shadow-md p-6 max-w-sm text-center">
                <div className="flex justify-center mb-4">
                    <div className="bg-green-100 text-green-500 rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </div>
                <h2 className="text-2xl font-semibold text-green-600 mb-2">Payment Successful!</h2>
                {/* <div className="flex justify-center gap-4 items-center">
                    <p className="text-gray-700 font-medium">Amount Paid:</p>
                    <p className="text-xl font-semibold text-green-600">${returnData?.totalCost || 10}</p>
                </div> */}
            </div>
        </div>
    );
};

export default ConfirmationScreen;
