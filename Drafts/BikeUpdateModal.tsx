// {
//     isModalOpen && (
//         <>
//             {/* background overlay effect */}
//             <div
//                 className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
//                 onClick={() => setIsModalOpen(false)}
//             ></div>
//             {/* main modal content */}
//             <div className="fixed inset-0 flex items-center justify-center">
//                 <div className='p-4 md:p-6 w-1/2 mx-auto bg-gray-100 absolute shadow-lg border rounded-lg transform transition-all duration-300 ease-out scale-100'>
//                     <form encType='multipart/form-data' onSubmit={uploadFile}>
//                         {/* bike name field */}
//                         <div className="mb-4">
//                             <label className="block text-gray-700">Bike Name</label>
//                             <div className="flex items-center space-x-2">
//                                 {/* conditionally rendering name input field */}
//                                 <input
//                                     type="text"
//                                     placeholder={name}
//                                     onChange={(e) => setUpdateBike({ ...updateBike, name: e.target.value })}
//                                     className=" border p-2 rounded-md w-full focus:outline-teal-500"
//                                 />
//                                 {/* conditionally rendering save buttons */}
//                             </div>
//                         </div>
//                         {/* bike name field div ends */}
//                         {/* description field starts */}
//                         <div className="mb-4">
//                             <label className="block text-gray-700">Description</label>
//                             <div className="flex items-center space-x-2">
//                                 <input
//                                     name="email"
//                                     id="email"
//                                     pattern='/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/'
//                                     type="email"
//                                     placeholder={description}
//                                     onChange={(e) => setUpdateBike({ ...updateBike, description: e.target.value })}
//                                     className=" border p-2 rounded-md w-full focus:outline-teal-500"
//                                 />
//                             </div>
//                         </div>
//                         {/* description field ends */}
//                         {/* brand field starts*/}
//                         <div className="mb-4">
//                             <label className="block text-gray-700">Brand</label>
//                             <div className="flex items-center space-x-2">
//                                 <input
//                                     type="number"
//                                     placeholder={brand}
//                                     onChange={(e) => setUpdateBike({ ...updateBike, brand: (e.target.value) })}
//                                     className=" border p-2 rounded-md w-full focus:outline-teal-500"
//                                 />
//                             </div>
//                         </div>
//                         {/* brand field ends*/}
//                         {/* cc field starts */}
//                         <div className="mb-4">
//                             <label className="block text-gray-700">CC</label>
//                             <div className="flex items-center space-x-2">
//                                 <input
//                                     type="number"
//                                     placeholder={`${cc}`}
//                                     onChange={(e) => setUpdateBike({ ...updateBike, cc: Number(e.target.value) })}
//                                     className=" border p-2 rounded-md w-full focus:outline-teal-500"
//                                 />
//                             </div>
//                         </div>
//                         {/* cc field ends */}
//                         {/* model field starts*/}
//                         <div>
//                             <div className="mb-4">
//                                 <label className="block text-gray-700">Model</label>
//                                 <div className="flex items-center space-x-2">
//                                     <input
//                                         type="text"
//                                         placeholder={model}
//                                         onChange={(e) => setUpdateBike({ ...updateBike, model: e.target.value })}
//                                         className=" border p-2 rounded-md w-full focus:outline-teal-500"
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                         {/* model field starts*/}
//                         {/* year field starts */}
//                         <div>
//                             <div className="mb-4">
//                                 <label className="block text-gray-700">Year</label>
//                                 <div className="flex items-center space-x-2">
//                                     <input
//                                         type='number'
//                                         placeholder={`${year}`}
//                                         onChange={(e) => {
//                                             setUpdateBike({ ...updateBike, year: Number(e.target.value) });

//                                         }}
//                                         className=" border p-2 rounded-md w-full focus:outline-teal-500"
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                         {/* year field ends */}
//                         {/* availability radio */}
//                         <div className="flex items-center space-x-4 mb-4">
//                             <div className="flex items-center">
//                                 <input
//                                     id="default-checkbox"
//                                     type="checkbox"
//                                     value=""
//                                     onClick={(e) => {
//                                         console.log(e.currentTarget.checked);
//                                         if (e.currentTarget.checked) {
//                                             setUpdateBike({ ...updateBike, isAvailable: true })
//                                         }
//                                         // setUpdateBike({ ...updateBike, isAvailable: e.currentTarget.checked })
//                                     }}
//                                     className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500" />
//                                 <label htmlFor="default-checkbox" className="ms-2 text-md text-gray-700">Available</label>
//                             </div>
//                             <div className="flex items-center">
//                                 <input
//                                     id="default-checkbox"
//                                     type="checkbox"
//                                     value=""
//                                     onClick={(e) => {
//                                         console.log(e.currentTarget.checked);
//                                         if (e.currentTarget.checked) {
//                                             setUpdateBike({ ...updateBike, isAvailable: false });
//                                         }
//                                     }}
//                                     className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500" />
//                                 <label htmlFor="default-checkbox" className="ms-2 text-md text-gray-700">Not Available</label>
//                             </div>
//                         </div>
//                         {/* availability radio end */}
//                         {/* view the selected image */}
//                         <div className='w-full h-64 '>
//                             <img
//                                 className='w-full rounded-lg h-64 object-cover'
//                                 src={imgPath}
//                             />
//                         </div>
//                         {/* image upload field */}
//                         <div>
//                             <input
//                                 type="file"
//                                 id="file"
//                                 name="file"
//                                 onChange={handleFileChange} // Update state when file is selected
//                                 required
//                                 className="mt-4 w-full file:cursor-pointer text-sm text-slate-500 file:mr-8 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-teal-200 file:text-teal-700 hover:file:bg-teal-300"
//                             // onChange={handleImageSelect}
//                             />
//                         </div>
//                         {
//                             error && (
//                                 <div className="mt-4 bg-red-200 text-red-600 rounded-md shadow-lg py-2 px-4">
//                                     {error}
//                                 </div>
//                             )
//                         }
//                         {/* form buttons */}
//                         <div className="space-x-2 mt-4">
//                             <button
//                                 type="submit"
//                                 // onClick={() => {
//                                 //     setIsModalOpen(false);
//                                 //     // handleUpdateDataSubmit();
//                                 // }}
//                                 className="bg-teal-500 hover:bg-teal-600 text-sm text-white px-4 py-2 rounded-md"
//                             >
//                                 Save
//                             </button>
//                             <button
//                                 onClick={() => {
//                                     setIsModalOpen(!isModalOpen);
//                                     // setUpdateUser(updateUserValues);
//                                 }}
//                                 className="bg-gray-300 px-4 text-sm py-2 rounded-md"
//                             >
//                                 Cancel
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }

{/* Breadcrumbs */ }
{/* <nav className="text-gray-600 text-sm">
                    <ol className="list-reset flex">
                        <li>
                            <a href="#" className="text-blue-600">Bike Models</a>
                        </li>
                        <li>
                            <span className="mx-2">/</span>
                        </li>
                        <li>
                            <a href="#" className="text-blue-600">Yamaha</a>
                        </li>
                        <li>
                            <span className="mx-2">/</span>
                        </li>
                        <li>{name}</li>
                    </ol>
                </nav> */}

// about us page backup
{/* Team Member 1 */ }
// {/* <div className="text-center">
//     <div className="w-40 h-40 mx-auto rounded-full bg-gray-300 mb-4">
//         {/* Replace with dynamic image */}
//         <img src="/path/to/team-member1.jpg" alt="Team Member 1" className="w-full h-full object-cover rounded-full" />
//     </div>
//     <h3 className="text-xl font-semibold">John Doe</h3>
//     <p className="text-gray-600">CEO & Founder</p>
//     <p className="mt-2">John is a passionate biker and entrepreneur with over 10 years of experience in the industry.</p>
// </div>
// {/* Repeat for other team members */ }
//                             <div className="text-center">
//                                 <div className="w-40 h-40 mx-auto rounded-full bg-gray-300 mb-4">
//                                     {/* Replace with dynamic image */}
//                                     <img src="/path/to/team-member2.jpg" alt="Team Member 2" className="w-full h-full object-cover rounded-full" />
//                                 </div>
//                                 <h3 className="text-xl font-semibold">Jane Smith</h3>
//                                 <p className="text-gray-600">COO</p>
//                                 <p className="mt-2">Jane brings a wealth of operational expertise and a love for biking to the team.</p>
//                             </div>
//                             <div className="text-center">
//                                 <div className="w-40 h-40 mx-auto rounded-full bg-gray-300 mb-4">
//                                     {/* Replace with dynamic image */}
//                                     <img src="/path/to/team-member3.jpg" alt="Team Member 3" className="w-full h-full object-cover rounded-full" />
//                                 </div>
//                                 <h3 className="text-xl font-semibold">Mike Johnson</h3>
//                                 <p className="text-gray-600">CTO</p>
//                                 <p className="mt-2">Mike leads our technology development with a passion for innovation in the biking industry.</p>
//                             </div> */}