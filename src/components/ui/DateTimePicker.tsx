import { useState } from "react";
interface Time {
    hours: number;
    minutes: number;
}
interface props {
    setIsBookingModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DateTimePicker = ({ setIsBookingModalOpen }: props) => {
    const [selectedDate, setSelectedDate] = useState("");
    const [time, setTime] = useState({ hours: 9, minutes: 2 });

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    return (
        <div className="p-10 bg-white rounded-md shadow-lg max-w-sm md:max-w-md lg:max-w-lg mx-auto w-1/2 relative">
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
                    className="text-lg p-2 border border-gray-300 rounded-md"
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
                        className="w-12 text-lg text-center border border-gray-300 rounded-md"
                    />
                    <span className="mx-1">:</span>
                    <input
                        type="number"
                        min="0"
                        max="59"
                        value={time.minutes}
                        onChange={(e) => handleTimeChange("minutes", e.target.value)}
                        className="w-12 text-lg text-center border border-gray-300 rounded-md"
                    />
                </div>
            </div>

            {/* Select Button */}
            <div className="mt-4 flex justify-center">
                <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition">
                    Select
                </button>
            </div>
        </div>
    );
};

export default DateTimePicker;
