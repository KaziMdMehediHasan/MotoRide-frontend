import { useState } from "react";
interface Time {
    hours: number;
    minutes: number;
}
interface props {
    setIsBookingModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsPaymentModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isPaymentModalOpen?: boolean;
    setFinalDateTime: React.Dispatch<React.SetStateAction<string>>;
}

const DateTimePicker = ({ setIsBookingModalOpen, setIsPaymentModalOpen, setFinalDateTime }: props) => {
    const [selectedDate, setSelectedDate] = useState("");
    const [time, setTime] = useState({ hours: 0, minutes: 0 });

    // const rentInfo = {
    //     bikeId: bikeId,
    //     startTime: pickedDateAndTime
    // }

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('date:', e.target.value);
        setSelectedDate(e.target.value);
    };

    const handleTimeChange = (field: keyof Time, value: string) => {
        const newValue = parseInt(value, 10);
        if (!isNaN(newValue)) {
            setTime((prevTime) => ({
                ...prevTime,
                [field]: value,
            }));
        }

    };

    const constructDateAndTime = (date: string, time: Time) => {
        let hours = String(time.hours);
        let minutes = String(time.minutes);
        if (String(time.hours).length === 1) hours = String(time.hours).padStart(2, '0');
        if (String(time.minutes).length === 1) minutes = String(time.minutes).padStart(2, '0');
        const dateAndTime = `${date}T${hours}:${minutes}:00Z`;

        return dateAndTime;
    }

    // const rentBike = async () => {
    //     const finalDateTime = constructDateAndTime(selectedDate, time); //another variable makes sure we get the date properly
    //     // console.log('captured time from the modal:', pickedDateAndTime);
    //     const rentInfo = {
    //         bikeId: bikeId,
    //         startTime: finalDateTime
    //     }
    //     console.log('from rentBike function:', rentInfo);
    //     try {
    //         await createRent(rentInfo).unwrap();
    //     } catch (error) {
    //         // const errorMessage = error.error.data.message
    //         console.log(error);
    //     }

    // }


    console.log('time:', time);
    // console.log('picked date:', pickedDateAndTime);

    return (
        <div className="p-10 text-gray-800 bg-white bg-opacity-50 rounded-md shadow-lg max-w-sm md:max-w-md lg:max-w-lg mx-auto w-1/2 relative">
            {/* {
                isLoading && (<Loader />)
            } */}
            {/* {
                isError && (<h1 className="text-xl font-semibold mb-4 text-center text-red-500">{error?.status} {error?.data?.message}</h1>)
            }
            {
                isSuccess && (<h1 className="text-xl font-semibold mb-4 text-center text-green-500">Booking Successful</h1>)
            } */}
            <h2 className="text-xl font-semibold mb-4 text-center">Select Date and Time</h2>
            {/* modal close button */}
            <span
                className='absolute top-2 right-4 cursor-pointer text-xl text-gray-600 bg-gray-300 py-1 px-3 rounded-md hover:bg-red-400 hover:text-white'
                onClick={() => {
                    setIsBookingModalOpen(false);
                }}
            >
                X
            </span>
            {/* modal close button ends*/}
            {/* Date Picker */}
            <div className="flex flex-col items-center mb-4">
                <input
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    className="text-lg p-2 border border-gray-300 rounded-md focus:outline-teal-500"
                />
            </div>

            {/* Time Picker */}
            <div className="flex justify-center items-center space-x-4">
                <div className="flex items-center">
                    <input
                        type="number"
                        min="0"
                        max="23"
                        value={time.hours}
                        onChange={(e) => handleTimeChange("hours", e.target.value)}
                        className="w-20 h-12 text-3xl text-center border border-gray-300 focus:outline-teal-500 rounded-md"
                    />
                    <span className="mx-1 font-semibold text-xl">:</span>
                    <input
                        type="number"
                        min="0"
                        max="59"
                        value={time.minutes}
                        onChange={(e) => handleTimeChange("minutes", e.target.value)}
                        className="w-20 h-12 text-3xl text-center border border-gray-300 focus:outline-teal-500 rounded-md"
                    />
                </div>
            </div>

            {/* Select Button */}
            <div className="mt-4 flex justify-center">
                <button
                    onClick={() => {
                        setIsPaymentModalOpen(true);
                        const finalDateTime = constructDateAndTime(selectedDate, time);
                        setFinalDateTime(finalDateTime);
                        setIsBookingModalOpen(false);
                    }}
                    className="px-4 py-2 bg-teal-500 text-white font-semibold text-sm rounded-md hover:bg-teal-600 transition">
                    Select
                </button>
            </div>
        </div>
    );
};

export default DateTimePicker;
