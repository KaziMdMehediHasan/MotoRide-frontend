export const convertDateToBDTimeZone = () => {
    const currentTime = new Date();
    const timezoneOffset = 6 * 60 * 60 * 1000; // 6 hours in milliseconds
    // getTime function returns time in milliseconds
    const adjustedTime = new Date(currentTime.getTime() + timezoneOffset);

    // Convert to ISO string in UTC/GMT time
    const adjustedISOTime = adjustedTime.toISOString();
    // console.log(adjustedISOTime);
    return adjustedISOTime;
}