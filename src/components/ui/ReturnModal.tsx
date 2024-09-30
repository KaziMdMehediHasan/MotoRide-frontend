import React, { useState } from 'react'
import { useReturnBikeByAdminMutation } from '../../redux/features/rent/rentApi';
import Loader from './Loader';
interface Time {
    hours: number;
    minutes: number;
}
interface props {
    setOpenReturnModal: React.Dispatch<React.SetStateAction<boolean>>;
    selectedRent: {
        rentId: string;
        startTime: string;
        pricePerHour: number;
    };
}
const ReturnModal = ({ setOpenReturnModal, selectedRent }: props) => {
    // redux states
    const [returnBikeByAdmin, { isLoading: returnLoader, isSuccess: returnSuccess }] = useReturnBikeByAdminMutation();
    // component states
    const [selectedDate, setSelectedDate] = useState("");
    const [finalDateTime, setFinalDateTime] = useState("");
    const [totalCost, setTotalCost] = useState<number>(0);
    const [time, setTime] = useState({ hours: 0, minutes: 0 });
    console.log('from return modal:', selectedRent);
    // handling the date change function
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('date:', e.target.value);
        setSelectedDate(e.target.value);
    };


    // handling the time change function
    const handleTimeChange = (field: keyof Time, value: string) => {
        const newValue = parseInt(value, 10);
        if (!isNaN(newValue)) {
            setTime((prevTime) => ({
                ...prevTime,
                [field]: value,
            }));
        }

    };

    // constructing the date to iso format to align with the mongodb database
    const constructDateAndTime = (date: string, time: Time) => {
        let hours = String(time.hours);
        let minutes = String(time.minutes);
        if (String(time.hours).length === 1) hours = String(time.hours).padStart(2, '0');
        if (String(time.minutes).length === 1) minutes = String(time.minutes).padStart(2, '0');
        const dateAndTime = `${date}T${hours}:${minutes}:00Z`;

        return dateAndTime;
    }

    //function to calculate total cost of the rent
    const calculateTotalCost = (returnDate: string, bookingDate: string): number => {
        const book = new Date(bookingDate);
        const back = new Date(returnDate);
        const difference = back.getTime() - book.getTime();
        const timeInHours = Number(difference / (1000 * 60 * 60));
        const cost = timeInHours * selectedRent.pricePerHour
        return Number(cost.toFixed(2));
    }

    // returning the bike to the store by admin
    const returnBike = async () => {
        const returnInfo = {
            rentalId: selectedRent?.rentId,
            totalCost: totalCost,
            returnTime: finalDateTime,
            isReturned: true,
        }
        try {
            await returnBikeByAdmin(returnInfo);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="p-10 text-gray-800 bg-white rounded-md shadow-lg max-w-sm md:max-w-md lg:max-w-lg mx-auto w-1/2 relative">
                <h2 className="text-2xl text-gray-700 font-semibold mb-4 text-center">Select Return Date and Time</h2>
                <h1 className='text-sky-600 text-center my-2'>Time Picker is a 24hr clock where PM values are greater than 12</h1>
                {/* modal close button */}
                <span
                    className='absolute top-2 right-4 cursor-pointer text-xl text-gray-600 bg-gray-300 py-1 px-3 rounded-md hover:bg-red-400 hover:text-white'
                    onClick={() => {
                        setOpenReturnModal(false);
                    }}
                >
                    X
                </span>
                {/* modal close button ends*/}
                {/* Date Picker */}
                {returnLoader && (<Loader />)}
                {returnSuccess && (<h1 className='text-center text-2xl text-secondary bg-teal-300 w-full'>Bike Returned Successfully</h1>)}
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
                            min={0}
                            max={23}
                            value={time.hours}
                            onChange={(e) => handleTimeChange("hours", e.target.value)}
                            className="w-20 h-12 text-3xl text-center border border-gray-300 focus:outline-teal-500 rounded-md"
                        />
                        <span className="mx-1 font-semibold text-xl">:</span>
                        <input
                            type="number"
                            min={0}
                            max={59}
                            value={time.minutes}
                            onChange={(e) => handleTimeChange("minutes", e.target.value)}
                            className="w-20 h-12 text-3xl text-center border border-gray-300 focus:outline-teal-500 rounded-md"
                        />
                    </div>
                </div>
                {
                    totalCost !== 0 && (
                        <p className='mt-4 text-center font-semibold text-2xl text-pink-500'>{totalCost}</p>
                    )
                }
                {/* calculate cost button */}
                <div className="mt-4 flex justify-center">
                    {
                        totalCost !== 0 ? (
                            <button
                                onClick={() => {
                                    returnBike();
                                }}
                                className="px-4 py-2 bg-teal-500 text-white font-semibold text-sm rounded-md hover:bg-teal-600 transition">
                                Return
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    //   setIsPaymentModalOpen(true);
                                    const returnDateTime = constructDateAndTime(selectedDate, time);
                                    setFinalDateTime(returnDateTime);
                                    // console.log('from select button press:', finalDateTime);
                                    setTotalCost(calculateTotalCost(returnDateTime, selectedRent.startTime));
                                    // returnBike();
                                    // console.log(returnInfo);
                                    // setOpenReturnModal(false);
                                }}
                                className="px-4 py-2 bg-teal-500 text-white font-semibold text-sm rounded-md hover:bg-teal-600 transition">
                                Calculate Total Cost
                            </button>
                        )
                    }

                </div>
            </div>
        </>
    )
}

export default ReturnModal