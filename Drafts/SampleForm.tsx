import React, { useState } from 'react';
import { useGetSingleBikeQuery, useUpdateBikeDataMutation } from "../src/redux/features/bikes/bikeApi";
import { useParams } from 'react-router-dom';

type TUpdateBike = {
    _id?: string;
    brand?: string;
    cc?: number;
    description?: string;
    isAvailable?: boolean;
    model?: string;
    name?: string;
    pricePerHour?: number;
    year?: number,
}

const SampleForm = () => {
    const { bikeId } = useParams();
    console.log(bikeId);
    const [updateBikeData, { data: updatedBikeData, error: bikeUpdateError }] = useUpdateBikeDataMutation();
    const [selectedFile, setSelectedFile] = useState(null);
    const [updateData, setUpdateData] = useState<TUpdateBike>({});
    console.log(updateData);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]); // Store the selected file
    };

    const uploadFile = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        console.log('clicked');
        if (!selectedFile) {
            alert('Please choose a file first!');
            return;
        }
        const bikeInfo = new FormData();
        bikeInfo.append('img', selectedFile);
        console.log(bikeInfo);// Append the file to FormData
        updateBikeData({ bikeInfo, bikeId });
    };
    return (
        <form encType='multipart/form-data' onSubmit={uploadFile}>
            <input
                className="border border-teal-200"
                type="text"
                id="name"
                name="name"
                onChange={(e) => { setUpdateData({ ...updateData, name: e.target.value }) }}
                // Update state when file is selected
                required
            />
            <input
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange} // Update state when file is selected
                required
            />
            <button type="submit">Upload</button>
        </form>
    );
};

export default SampleForm;